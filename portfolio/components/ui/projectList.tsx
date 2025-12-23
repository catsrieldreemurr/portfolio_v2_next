"use client"

import { useEffect, useState } from "react"
import { Badge } from "./badge";
import Image from "next/image";
import Footerbar from "./footerbar";
import { Spinner } from "./spinner";

interface Project {
    projectInfo: {
        name: string;
        shortDesc: string;
        description: string;
        projectDate: string;
        tags: string[];
        stack: string[];
        previewImageURL: string;
        isFeatured: boolean;
    };
    links: {
        githubRepositoryLink: string;
        liveVersion: string;
    };
}

export default function ProjectsList(){
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    async function getData(){ 
        try{
            const res = await fetch("/api/fetchData");
            const data = await res.json();

            if(Array.isArray(data)){
                setProjects(data);
            }
        }
        catch(err){
            console.error('Failed to fetch projects', err);
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div>
            {
                isLoading && <div className="h-screen flex justify-center bgPattern text-4xl gap-10">
                    <p>Loading...</p>
                    <Spinner className="size-10"></Spinner>
                </div>
            }

            {   
                projects.map((currProject, index) => {
                    return <div key={index} className="flex flex-col items-center">

                        <div className={`rounded-sm mt-5 w-2/3 text-center p-5 bg-white/50`}>                                              
                            <p className="text-xl font-bold sm:text-3xl text-center">{currProject.projectInfo.name}</p>
                            <p>{currProject.projectInfo.projectDate}</p>
                            <p>{currProject.projectInfo.description}</p>

                            <div className="text-lg sm:flex gap-5 justify-center mt-5">
                                <p className="font-bold">Stack:</p>
                                {
                                    currProject.projectInfo.stack.map((text, index) => {
                                        return <p key={index}>{text}</p>
                                    })
                                }
                            </div>
                            
                            <div className="flex justify-center">
                                <Image src={currProject.projectInfo.previewImageURL} height={400} width={400} alt="previewImage" className="rounded-sm mt-5"></Image>
                            </div>

                            <div className="flex gap-2 justify-center mt-5">
                                {currProject.projectInfo.tags.map((text, index) => {
                                    return <Badge key={index}>{text}</Badge>})}
                            </div>
                        </div>
                    </div>
                })
            }

            <Footerbar></Footerbar>
        </div>
    )
}