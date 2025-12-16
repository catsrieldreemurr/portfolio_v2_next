"use client"
import Link from "next/link";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "../../components/ui/typography";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Footerbar from "@/components/ui/footerbar";

export default function Page2(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [warningIsVisible, setWarningIsVisible] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const [warningMessage, setWarningMessage]= useState('');
    async function handleSubmit(){
        if(name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0){
            try{
            setLoading(true);
            const response = await fetch('/api/sendEmail', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email, 
                    message: message
                })
            })

            const data = await response.json();
            setLoading(false);

            if(data === 'Email-Adresse er ikke gyldig.' || data.error){
                setWarningIsVisible(true);
                setWarningMessage(data);

                setSuccess(false);
            } else{
                setWarningIsVisible(false);
                setSuccess(true);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch(err){
            setWarningMessage("Noe gikk galt. Prøv igjen senere.");
            setWarningIsVisible(true);
            setSuccess(false);
        }
        } else{
            setWarningMessage("Data Mangler. Fyll inn alle felter og prøv igjen.")
            setWarningIsVisible(true);
            setSuccess(false);
        }
    }

    return(
        <div className="bgPattern h-screen">
            <Navbar></Navbar>

            <div className="flex items-center flex-col text-center">
                <Typography variant="h1">Kontakt meg</Typography>
                <Typography>Er det noe interessant du vil vite om meg? Ta kontakt!</Typography>
                <Typography>Email Adresse: danobrovold@gmail.com </Typography>
            </div>

            {warningIsVisible && <div className="flex flex-col items-center mt-10">
                <div className="rounded-xl bg-red-200 border border-red-800 w-[20rem] p-4">
                    <p className="text-lg text-red-800 text-center">{warningMessage}</p>
                </div>
            </div>}

            {success && <div className="flex flex-col items-center mt-10">
                <div className="rounded-xl bg-green-200 border border-green-800 w-[20rem] p-4">
                    <p className="text-lg text-green-800 text-center">Melding er sent </p>
                </div>
            </div>}

            <form className="flex flex-col space-y-2 w-[20rem] mx-auto" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="mt-10">
                    <Label htmlFor="name">Ditt Navn</Label>
                    <Input placeholder="Navn Navneson" id="name" onChange={(e) => {
                        setName(e.target.value);
                    }}></Input>
                </div>

                <div>
                    <Label htmlFor="email">Din Epost</Label>
                    <Input placeholder="eksempel@gmail.com" id="email" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></Input>
                </div>
                <div>
                    <Label htmlFor="msg">Din Melding</Label>
                    <Textarea placeholder="Hello world!" id="msg" onChange={(e) => {
                        setMessage(e.target.value);
                    }}></Textarea>  
                </div>

                <Button variant={"outline"} aria-label="Submit" className="border border-black" onClick={handleSubmit} disabled={loading}>{loading && <Spinner></Spinner>}Send Melding</Button>
                
            </form>
            <div className="mt-[5-rem]">
                <Footerbar></Footerbar>
            </div>
        </div>
    )
}