import FooterText from "./footerbarTypography";
import Typography from "./typography";

const classString = "sm:w-1/3 flex justify-center items-center flex-col"

export default function Footerbar(){
    return(
        <footer className="bg-slate-900 h-[20rem] text-white flex flex-col sm:flex-row mt-[5rem]">
            <div className={classString}>
                <FooterText variant="h1">Dan Andreos Portfolio</FooterText>
                <FooterText>Cool stuff</FooterText>
            </div>

            <div className={classString}>
                <h2>test2</h2>
            </div>

            <div className={classString}>

            </div>
        </footer>
    )
}