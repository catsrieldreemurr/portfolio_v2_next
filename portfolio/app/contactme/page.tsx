"use client"
import Link from "next/link";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "../../components/ui/typography";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page2(){
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
                console.log('hi');
            }}>
                <div className="mt-10">
                    <Label htmlFor="name">Navn</Label>
                    <Input placeholder="Navn Navneson" id="name"></Input>
                </div>

                <div>
                    <Label htmlFor="email">Epost</Label>
                    <Input placeholder="eksempel@gmail.com" id="email"></Input>
                </div>
                <div>
                    <Label htmlFor="msg">Melding</Label>
                    <Textarea placeholder="Hello world!" id="msg"></Textarea>  
                </div>

                <Button variant={"outline"} aria-label="Submit" className="border border-black" onClick={() => {
                    console.log('hi');
                }}>Send Melding</Button>
                
            </form>
        </div>
    )
}