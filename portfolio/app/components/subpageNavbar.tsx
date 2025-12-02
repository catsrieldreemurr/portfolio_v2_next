import Link from "next/link";

const links = "p-2 text-md sm:text-2xl hover:text-slate-800 font-bold"

export default function Navbar(){
    return(
        <nav>
            <div className="p-10 flex gap-5 sm:gap-10">
                <Link href={"/"} className={links}>Main</Link>
                <Link href={"/aboutme"} className={links}>Om Meg</Link>
                <Link href={"/"} className={links}>Prosjektgalleri</Link>
                <Link href={"/"} className={links}>Kontakt</Link>
            </div>
        </nav>
    )
}