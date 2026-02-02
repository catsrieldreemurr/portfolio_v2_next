import ProjectsList from "@/components/ui/projectList";
import Navbar from "@/components/ui/subpageNavbar";

export default function Page(){
    return (
        <div className="bgPattern">
            <Navbar></Navbar>

            <ProjectsList></ProjectsList>

            
        </div>
    )
}