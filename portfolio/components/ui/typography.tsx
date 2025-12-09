import { ReactNode } from "react";

// Inspired by MUI's Typography element, since I use that for work Lol

interface setTypes{
    variant?: string
    isUnderline?: boolean
    isBold?:boolean
    children?: ReactNode
}

export default function Typography({variant, children, isUnderline, isBold}: setTypes){
    if(variant==="h1"){
        return <h1 className={`text-5xl font-bold p-5 ${isUnderline && "underline"}`}>{children}</h1>
    }

    else if(variant ==="h2"){
        return <h2 className={`text-2xl ${isUnderline && "underline"} ${isBold && "font-bold"}`}>{children}</h2>
    }
    else if(variant === "h3"){
        return <h3 className={`text-xl ${isUnderline && "underline"} ${isBold && "font-bold"}`}>{children}</h3>
    }

    else{
        return <p className={`text-lg ${isUnderline && "underline"} ${isBold && "font-bold"}`}>{children}</p>
    }
}