import { Resend } from "resend";
import he  from "he";
import * as EmailValidator from "email-validator";

export async function POST(req:Request){
    const data = await req.json();
    const {name, email, message} = data;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailTo = process.env.EMAIL;
    if (!emailTo) throw new Error("EMAIL Variable is missing");

    if(EmailValidator.validate(email) === true){
        const safeName = he.encode(name);
        const safeEmail = he.encode(email);
        const safeMessage = he.encode(message);

        const Builtmessage = `
        <p>MESSAGE FROM ${safeName}</p>
        <p>EMAIL: ${safeEmail}</p>
        <p>------ MESSAGE CONTENT -------</p>
        <pre>${safeMessage}</pre>
        <p>------ MESSAGE END -------</p>
        `;

        await resend.emails.send({
            from: 'contact@catsrieldreemurr.com',
            to: emailTo,
            subject: `MESSAGE FROM ${safeName} (SENT FROM PORTFOLIO)`,
            html: Builtmessage
        })

        return new Response(JSON.stringify({name, email, message}), {status: 200});
    } else{
        return new Response(JSON.stringify('Email-Adresse er ikke gyldig.'), {status: 400})
    }
}
