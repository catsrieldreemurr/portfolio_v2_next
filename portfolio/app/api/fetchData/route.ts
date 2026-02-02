import { NextResponse } from "next/server";

const url = "https://raw.githubusercontent.com/catsrieldreemurr/projects/refs/heads/main/projects.json"

export async function GET(){
    try{
        const res = await fetch(url);
        
        if(!res.ok){
            return new Response(JSON.stringify({
                success: false,
                message: 'Something went Wrong.'
            }), {status: res.status})
        }

        const data = await res.json();

        const projects = Array.from(data.projects);

        return NextResponse.json(projects);
    }
    catch(err){
        return new Response(JSON.stringify({
            success:  false,
            message: 'Internal Server Error'
        }), {status: 500})
    }
}