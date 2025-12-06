import Link from "next/link";

const links = "sm:p-2 sm:text-md sm:text-2xl sm:hover:text-gray-400 sm:font-bold sm:bg-[url(/paper.jpg)] sm:bg-cover sm:rounded-sm sm:border sm:border-black"

export default function Navbar(){
    return(
        <nav>
            <div className="flex gap-5 justify-center bg-[url(/paper.jpg)] bg-cover p-5 text-md font-bold border-b border-black sm:bg-none sm:gap-10 sm:p-10 sm:border-none">
                <Link href={"/"} className={links}>Main</Link>
                <Link href={"/aboutme"} className={links}>Om Meg</Link>
                <Link href={"/"} className={links}>Prosjektgalleri</Link>
                <Link href={"/"} className={links}>Kontakt</Link>
            </div>
        </nav>
    )
}