import Image from "next/image";
import Link from "next/link";

const links = "border p-2 rounded-xl bg-white/50 text-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-slate-300";

export default function Home() {
  return (
    <div className="bgPattern h-screen">
      <div className="flex justify-center items-center flex-col h-screen">
        <h1 className="text-5xl font-bold underline p-5">Dan Andreo</h1>
        <h2 className="text-2xl">console.log("Hello World");</h2>

        <div className="p-2 mt-5 flex gap-5 sm:gap-20 sm:p-10">
          <Link href={"/aboutme"} className={links}>Om Meg</Link>
          <Link href={"https://youtube.com"} className={links}>Prosjektgalleri</Link>
          <Link href={"https://youtube.com"} className={links}>Kontakt</Link>
        </div>

        <Image src={"/polaroid1.png"} height={400} width={400} alt="Dan Andreo" className="h-[20rem] w-[18rem] mt-[5rem] border border-black"></Image>
      </div>
    </div>
  );
}
