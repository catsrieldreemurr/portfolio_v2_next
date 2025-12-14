"use client"
import Image from "next/image";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "@/components/ui/typography";
import LinkElement from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page(){
    const [currentInfo, setcurrentInfo] = useState('abilities');
    return (
        <div className="bgPattern">
            <Navbar></Navbar>

            <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-10">
                <Image src={"/polaroid2.png"} alt="Picture of Me" height={400} width={400} className="h-[20rem] w-[18rem] mt-[5rem] border border-black"></Image>
                <div className="sm:mt-[5rem] p-5">
                    <Typography variant="h3" isBold>Howdy!</Typography>
                    <Typography>Howdy! Jeg er Dan Andreo, en 17 år gammel utvikler og datanerd Fra Norge.</Typography>
                    <Typography>Jeg går på Informasjonsteknologi-linjen på Hamar Katedralskole.</Typography>
                    <Typography>Jeg fokuserer mesteparten av tiden min på web-dev, og jeg lærer Unity på siden.</Typography>

                    <div className="flex mt-10 gap-10 justify-center">
                        <LinkElement href="https://github.com/catsrieldreemurr" isBold>GitHub (Hoved)</LinkElement>
                        <LinkElement href="https://github.com/twomuchCatsriel" isBold>GitHub (Arkiv)</LinkElement>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-row gap-5 justify-center mt-[4rem]">
                    <Button onClick={() => {
                        if(currentInfo !== "abilities")
                        {
                            setcurrentInfo("abilities")
                        }   
                    }} className={`${currentInfo === "abilities" && "bg-slate-800"}`}>Ferdigheter</Button>
                    <Button onClick={() => {
                        if(currentInfo !== "education")
                        {
                            setcurrentInfo("education")
                        }       
                    }} className={`${currentInfo === "education" && "bg-slate-800"}`}>Utdanning</Button>
                    <Button onClick={() => {
                        if(currentInfo !== "experience")
                        {
                            setcurrentInfo("experience")
                        }      
                    }} className={`${currentInfo === "experience" && "bg-slate-800"}`}>Erfaring</Button>
                </div>

                {currentInfo === "abilities" && <div className="p-5 flex justify-center">
                    <div className="sm:w-1/3 bg-[url(/paper.jpg)] p-5 rounded-xl">
                        <Typography variant="h2" isBold isCentered>- Ferdigheter -</Typography>
                        <Typography isBold>{`Programmering`}</Typography>
                        <Typography>- HTML/CSS/JS (80%)</Typography>
                        <Typography>- REACT (70%)</Typography>
                        <Typography>- NextJS (70%)</Typography>
                        <Typography>- TypeScript (50%)</Typography>
                        <Typography>- C# & Unity (40%)</Typography>
                        <Typography>- Enkel Python (30%)</Typography>
                        <Typography>- ROBLOX LUAU (50%)</Typography>
                        <Typography>- Backend med NodeJS (10%)</Typography>

                        <Typography isBold spacer>Other</Typography>
                        <Typography>- Video Editing in Vegas Pro 19 (35%)</Typography>
                        <Typography>- Enkel Bilderedigering med Photoshop og GIMP (30%)</Typography>
                    </div>
                </div>}

                {currentInfo === "education" && <div className="p-5 flex justify-center">
                    <div className="sm:w-1/3 bg-[url(/paper.jpg)] p-5 rounded-xl">
                        <Typography variant="h2" isBold isCentered>- Utdanning -</Typography>
                        <Typography isBold>Grunnskole</Typography>
                        <Typography>- Fagerlund Barneskole</Typography>
                        <Typography>- Brumunddal Ungdomsskole</Typography>
                        
                        <Typography isBold spacer>Videregående</Typography>
                        <Typography>- Hamar Katedralskole Informasjonsteknologi og Medieproduksjon (1IM)</Typography>
                        <Typography>- Hamar Katedralskole Informasjonsteknologi (2INF) </Typography>
                    </div>
                </div>}

                {currentInfo === "experience" && <div className="p-5 flex justify-center">
                    <div className="sm:w-1/3 bg-[url(/paper.jpg)] p-5 rounded-xl">
                        <Typography variant="h2" isBold isCentered>- Erfaring -</Typography>
                            <Typography variant="h3" isBold spacer>Mai 2022</Typography>
                            <Typography>- Besøk på Langmoen Logistikk Avdeling I Brumunddal</Typography>
                            <Typography>- 1 Dag, Jobbeskyggedag</Typography>

                            <Typography variant="h3" isBold spacer>Juli 2023</Typography>
                            <Typography>- Assistent i 3. Klasse på Mørkved Skole</Typography>
                            <Typography>- 5 Dager, Utplasseringuke på ungdomsskolen</Typography>

                            <Typography variant="h3" isBold spacer>November 2023</Typography>
                            <Typography>- Besøk hos Itera Norge i Oslo</Typography>
                            <Typography>- 1 Dag, Jobbskyggedag</Typography>

                            <Typography variant="h3" isBold spacer>Mars 2025</Typography>
                            <Typography>- Frontend utvikling hos Dyplink, Hamar</Typography>
                            <Typography>- 3 dager i 2 uker.</Typography>
                            <Typography>Utviklet et spørreundersøkelsesprogram som lagret info til en JSON fil</Typography>

                            <Typography variant="h3" isBold spacer>Oktober-Desember 2025</Typography>
                            <Typography>- Frontend utvikling hos Dyplink, Hamar</Typography>
                            <Typography>- Hver Torsdag (Pågående)</Typography>
                            <Typography>Jobber på et internt front-end side med REACT + TypeScript</Typography>
                    </div>
                </div>}
            </div>

            <div className="flex flex-col sm:flex-row items-center p-5 justify-center gap-5 items-stretch"> 
                <div className="bg-[url(/paper.jpg)] p-5 rounded-lg sm:w-1/3">
                    <Typography variant="h3" isBold>Programmering</Typography>
                    <Typography>Jeg begynte ordentlig med programmering i 2022, gjennom Scratch.</Typography>
                    <Typography>Dette fikk meg interessert i programmering, og fikk meg til å begynne å lære ROBLOX LUAU.</Typography>
                    <Typography>Jeg endte opp med å like tekstprogrammering, og jeg begynte å prøve flere språk for å finne hva jeg liker.</Typography>
                    <Typography>Etter dette så lærte jeg enkel Python og C#, og JavaScript.</Typography>
                </div>

                <div className="bg-[url(/paper.jpg)] p-5 rounded-lg sm:w-1/3">
                    <Typography variant="h3" isBold>Webutvikling</Typography>
                    <Typography>Webutvikling er fortsatt relativt nytt for meg.</Typography>
                    <Typography>Jeg ble introdusert til HTML og CSS på ungdomsskolen, og brukte det for å lage enkle nettsider uten kode.</Typography>
                    <Typography>Jeg lærte ikke JavaScript før 2024 på Videregående, men når jeg gjorde det så elsket jeg det.</Typography>
                    <Typography>Jeg begynte å bruke JavaScript for å lage noen mindre prosjekter.</Typography>

                    <Typography spacer>Jeg lærte først om REACT i Mars 2025 gjennom en skoleoppgave.</Typography>
                    <Typography>Etter dette så begynte jeg å lage prosjekter med REACT, spesielt REACT + VITE.</Typography>
                    <Typography>Rundt Oktober av 2025 så lagde jeg mitt første NextJS prosjekt, etter at en venn anbefalte det.</Typography>
                    <Typography>Jeg begynte deretter å lage prosjekter i NEXT, og har det morsomt med å lage forskjellige ting med det.</Typography>
                </div> 
            </div>
        </div>
    )
}