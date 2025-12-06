import Link from "next/link";
import Navbar from "../components/subpageNavbar";
import Typography from "../components/typography";

export default function Page2(){
    return(
        <div className="bgPattern h-screen">
            <Navbar></Navbar>

            <div className="flex items-center flex-col text-center">
                <Typography variant="h1">Kontakt meg</Typography>
                <Typography>Er det noe interessant du vil vite om meg? Ta kontakt!</Typography>
                <Typography>Email Adresse: danobrovold@gmail.com </Typography>
            </div>
        </div>
    )
}