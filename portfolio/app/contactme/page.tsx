"use client"
import Link from "next/link";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "../../components/ui/typography";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page2(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [warningIsVisible, setWarningIsVisible] = useState(false);

    async function handleSubmit(){
        if(name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0){
            const res = await fetch('/api/sendEmail', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    email: email, 
                    message: message
                })
            })

            console.log(res);
        } else{
            console.log('missing content');
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

                <Button variant={"outline"} aria-label="Submit" className="border border-black" onClick={handleSubmit}>Send Melding</Button>
                
            </form>
        </div>
    )
}