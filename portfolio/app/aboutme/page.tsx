import Image from "next/image";
import Navbar from "../../components/ui/subpageNavbar";
import Typography from "@/components/ui/typography";

export default function Page(){
    return (
        <div className="bgPattern h-screen">
            <Navbar></Navbar>

            <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left gap-10">
                <Image src={"/polaroid2.png"} alt="Picture of Me" height={400} width={400} className="h-[20rem] w-[18rem] mt-[5rem] border border-black"></Image>
                <div className="mt-5 sm:mt-[5rem]">
                    <Typography variant="h3" isBold>Howdy!</Typography>
                    <Typography>Howdy! Jeg er Dan Andreo, en 17 år gammel utvikler og datanerd Fra Norge.</Typography>
                </div>
            </div>
        </div>
    )
}