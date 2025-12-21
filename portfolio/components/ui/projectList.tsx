"use client"

import { useEffect, useState } from "react"
import { Badge } from "./badge";

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
    }

    return(
        <div>
            {
                projects.map((currProject, index) => {
                    return <div key={index} className="flex flex-col items-center">

                        <div className="bg-white/50 rounded-sm mt-5 w-2/3 text-center p-5">
                            <div className="flex gap-2">
                                {currProject.projectInfo.tags.map((text, index) => {
                                    return <Badge key={index}>{text}</Badge>
                            })}
                            </div>

                            <div className="flex justify-center">                                                
                                <div className="w-1/2">
                                    <p className="text-xl font-bold sm:text-3xl text-center">{currProject.projectInfo.name}</p>
                                </div>
                            </div>

                            <p>{currProject.projectInfo.projectDate}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}