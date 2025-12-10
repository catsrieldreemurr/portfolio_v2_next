import Image from "next/image";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "@/components/ui/typography";
import LinkElement from "@/components/ui/link";

export default function Page(){
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

            <div className="flex flex-col items-center mt-[5rem] p-5"> 
                
                <div className="bg-[url(/paper.jpg)] p-5 rounded-lg">
                    <Typography variant="h3" isBold>Programmering</Typography>
                    <Typography>Jeg begynte ordentlig med programmering i 2022, gjennom Scratch.</Typography>
                    <Typography>Dette fikk meg interessert i programmering, og fikk meg til å begynne å lære ROBLOX LUAU.</Typography>
                    <Typography>Jeg endte opp med å like tekstprogrammering, og jeg begynte å prøve flere språk for å finne hva jeg liker.</Typography>
                    <Typography>Etter dette så lærte jeg enkel Python og C#, og JavaScript.</Typography>
                </div>

                <div className="mt-5 bg-[url(/paper.jpg)] p-5 rounded-lg">
                    <Typography variant="h3" isBold>Webutvikling</Typography>
                    <Typography>Webutvikling er fortsatt relativt nytt for meg.</Typography>
                    <Typography>Jeg ble introdusert til HTML og CSS på ungdomsskolen, og brukte det for å lage enkle nettsider uten kode.</Typography>
                    <Typography>Jeg lærte ikke JavaScript før 2024 på Videregående, men når jeg gjorde det så elsket jeg det.</Typography>
                    <Typography>Jeg begynte å bruke JavaScript for å lage noen mindre prosjekter.</Typography>

                    <div className="mt-10"><Typography>Jeg lærte først om REACT i Mars 2025 gjennom en skoleoppgave.</Typography></div>
                    <Typography>Etter dette så begynte jeg å lage prosjekter med REACT, spesielt REACT + VITE.</Typography>
                    <Typography>Rundt Oktober av 2025 så lagde jeg mitt første NextJS prosjekt, etter at en venn anbefalte det.</Typography>
                    <Typography>Jeg begynte deretter å lage prosjekter i NEXT, og har det morsomt med å lage forskjellige ting med det.</Typography>
                </div> 
            </div>
        </div>
    )
}