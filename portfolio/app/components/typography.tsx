import { ReactNode } from "react";

// Inspired by MUI's Typography element, since I use that for work Lol

interface setTypes{
    variant?: string
    isUnderline?: boolean
    children?: ReactNode
}

export default function Typography({variant, children, isUnderline}: setTypes){
    if(variant==="h1"){
        return <h1 className={`text-5xl font-bold p-5 ${isUnderline && "underline"}`}>{children}</h1>
    }

    else if(variant ==="h2"){
        return <h2 className="text-2xl">{children}</h2>
    }

    else{
        return <p className="text-lg">{children}</p>
    }
}