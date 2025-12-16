import Image from "next/image";
import FooterText from "./footerbarTypography";
import Typography from "./typography";
import Link from "next/link";

const classString = "sm:w-1/4 flex justify-center items-center flex-col"
const linkString = "hover:underline text-red-300"

export default function Footerbar(){
    return(
        <footer className="bg-slate-900 sm:h-[20rem] text-white flex flex-col sm:flex-row mt-[5rem] gap-10 sm:p-[10rem]">
            <div className={`${classString} mt-[5rem] sm:mt-0`}>
                <FooterText variant="h1">Dan Andreos Portfolio</FooterText>
                <FooterText>Laget Desember 2025 med Next.JS</FooterText>

                <div className="mt-10">
                    <Link href={"https://github.com/catsrieldreemurr/portfolio_v2_next"} className={`font-bold ${linkString}`}>{`GitHub Repository`}</Link>
                </div>
            </div>

            <div className={classString}>
                <FooterText variant="h1">Sider</FooterText>
                <Link href={"/"} className={`mt-5 ${linkString}`}>Main</Link>
                <Link href={"/skills"} className={linkString}>Skills</Link>
                <Link href={"/aboutme"} className={linkString}>Om Meg</Link>
                <Link href={"/"} className={linkString}>Prosjektgalleri</Link>
                <Link href={"/contactme"} className={linkString}>Kontakt Meg</Link>
            </div>

            <div className={classString}>

            </div>

            <div className={classString}>
                <Image src={"/fernbaxxter.png"} width={200} height={200} alt="Signature: 'Fern Baxxter'" className="mb-[5rem] sm:mb-0"></Image>
            </div>
        </footer>
    )
}