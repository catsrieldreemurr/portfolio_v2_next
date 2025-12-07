export async function POST(req:Request){
    const data = await req.json();

    const {name, email, message} = data;

    return new Response(JSON.stringify(name, email, message), {status: 200});
    
}
