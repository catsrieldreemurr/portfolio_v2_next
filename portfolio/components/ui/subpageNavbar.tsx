import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { Popover } from "./popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

const links = "sm:p-2 sm:text-md sm:text-2xl sm:hover:text-gray-500 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 sm:bg-[url(/paper.jpg)] sm:bg-cover sm:rounded-sm sm:border sm:border-black "

export default function Navbar(){
    return(
        <nav>
            <div className="flex sm:justify-center gap-5 bg-[url(/paper.jpg)] bg-cover p-5 text-md border-b border-black sm:bg-none sm:gap-10 sm:p-10 sm:border-none ">
                <div className="hidden sm:flex gap-5">
                    <Link href={"/"} className={links}>Main</Link>
                    <Link href={"/skills"} className={links}>Skills</Link>
                    <Link href={"/aboutme"} className={links}>Om Meg</Link>
                    <Link href={"/projectgallery"} className={links}>Prosjektgalleri</Link>
                    <Link href={"/contactme"} className={links}>Kontakt</Link>
                </div>

                <div className="flex sm:hidden">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className="bg-white border-black border">
                                <Image src={"/menu.png"} width={25} height={25} alt="menu"></Image>
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent>
                            <div className="bg-white p-2 rounded-xl border-black border mt-5 flex flex-col text-center text-lg font-bold-">
                                <Link href={"/"} className={"p-2"}>Main</Link>
                                <Link href={"/skills"} className={"p-2"}>Skills</Link>
                                <Link href={"/aboutme"} className={"p-2"}>Om Meg</Link>
                                <Link href={"/projectgallery"} className={"p-2"}>Prosjektgalleri</Link>
                                <Link href={"/contactme"} className={"p-2"}>Kontakt</Link>
                            </div>
                        </PopoverContent>
                    </Popover>
                    
                </div>
                
            </div>
        </nav>
    ) 
}