"use client"
import AbilityList from "@/components/itemwrapper";
import ItemWrapper from "@/components/itemwrapper";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselLoadout from "@/components/ui/carouselFrame";
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
                <Typography variant="h2" isBold>- Kunnskap og Erfaringer - </Typography>
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
                    <div className="w-6/6 sm:w-1/3 bg-[url(/paper.jpg)] p-5 rounded-xl">
                        <Typography variant="h2" isBold isCentered>- Ferdigheter -</Typography>
                        
                        <div className="flex justify-center items-center p-5">
                            <div className="w-5/6">
                                <Carousel className="bg-slate-700 rounded-lg text-white">
                                    <CarouselContent>
                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="NextJS" 
                                                imagePath="/nextjs.png"
                                                comfortLevel="Veldig Komfortabel (80%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="TypeScript" 
                                                imagePath="/typescript.png"
                                                comfortLevel="Komfortabel (60%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="HTML/CSS/JS" 
                                                imagePath="/htmllogo.png"
                                                comfortLevel="Ekstremt Komfortabel (90%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="C# / Unity" 
                                                imagePath="/C_Sharp.png"
                                                comfortLevel="Litt Komfortabel (20%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="ROBLOX LUAU" 
                                                imagePath="/roblox.png"
                                                comfortLevel="Komfortabel (50%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="NodeJS Backend" 
                                                imagePath="/nodejs.png"
                                                comfortLevel="Litt Komfortabel (30%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                        <CarouselItem> 
                                            <CarouselLoadout 
                                                skillText="React" 
                                                imagePath="/react.png"
                                                comfortLevel="Veldig Komfortabel (90%)">
                                            </CarouselLoadout> 
                                        </CarouselItem>

                                    </CarouselContent>
                                    <CarouselPrevious className="bg-slate-800 text-white"></CarouselPrevious>
                                    <CarouselNext className="bg-slate-800 text-white"></CarouselNext>
                                </Carousel>
                            </div>
                        </div>
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