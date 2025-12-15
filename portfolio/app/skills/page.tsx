"use client"
import AbilityList from "@/components/itemwrapper";
import ItemWrapper from "@/components/itemwrapper";
import { Button } from "@/components/ui/button";
import Footerbar from "@/components/ui/footerbar";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/ui/subpageNavbar";
import Typography from "@/components/ui/typography";
import { useState } from "react";

export default function Page(){
    const [currentInfo, setcurrentInfo] = useState('abilities');
    return (
        <div className="bgPattern">
            <Navbar></Navbar>
            <div className="mt-[5rem] sm:mt-5 p-5 flex flex-col items-center">
                <Typography variant="h2" isBold>- Kort Om Meg- </Typography>
                <Typography>Howdy! Jeg er Dan Andreo, en 17 år gammel nerd fra Norge.</Typography>
                <Typography>Jeg går på Informasjonsteknologi på Hamar Katedralskole (2INF), med fokus på Utvikling.</Typography>
                <Typography>Mine interesser inkluderer mye programmeringsrelatert, som Spillutvikling og webutvikling.</Typography>
            </div>

                <div className="flex flex-row gap-5 justify-center mt-[4rem]">
                    <Button onClick={() => {
                        if(currentInfo !== "abilities")
                        {
                            setcurrentInfo("abilities")
                        }   
                    }} className={`${currentInfo === "abilities" && "bg-slate-700"}`}>Ferdigheter</Button>
                    <Button onClick={() => {
                        if(currentInfo !== "education")
                        {
                            setcurrentInfo("education")
                        }       
                    }} className={`${currentInfo === "education" && "bg-slate-700"}`}>Utdanning</Button>
                    <Button onClick={() => {
                        if(currentInfo !== "experience")
                        {
                            setcurrentInfo("experience")
                        }      
                    }} className={`${currentInfo === "experience" && "bg-slate-700"}`}>Erfaring</Button>
                </div>

                {currentInfo === "abilities" && <div className="p-5 flex justify-center">
                    <div className="sm:w-1/3 bg-[url(/paper.jpg)] p-5 rounded-xl">
                        <Typography variant="h2" isBold isCentered>- Ferdigheter -</Typography>
                        <Typography isBold isUnderline>{`Programmering`}</Typography>
                        
                        <AbilityList value={80} text="HTML/CSS/JS (80%)"></AbilityList>
                        <AbilityList value={70} text="REACT (70%)"></AbilityList>
                        <AbilityList value={50} text="NextJS (50%)"></AbilityList>
                        <AbilityList value={20} text="Unity og C# (20%)"></AbilityList>
                        <AbilityList value={30} text="Python (30%)"></AbilityList>
                        <AbilityList value={45} text="Roblox LUAU (45%)"></AbilityList>
                        <AbilityList value={10} text="Backend med Node.JS (10%)"></AbilityList>

                        <Typography isBold spacer isUnderline>Other</Typography>
                        <AbilityList value={35} text="Video Editing in Vegas Pro 19 (35%)"></AbilityList>
                        <AbilityList value={30} text="Bilderedigering med Photoshop og GIMP (30%)"></AbilityList>
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

            <Footerbar></Footerbar>
        </div>
    )
}