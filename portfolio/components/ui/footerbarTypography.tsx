import { ReactNode } from "react";

interface SetTypes{
    children?: ReactNode
    isBold?: boolean
    isUnderline?: boolean
    isCentered?: boolean
    variant?: string
    spacer?: boolean

}

export default function FooterText({children, isBold, isUnderline, isCentered, variant, spacer}:SetTypes){
    if(variant == "h1"){
        return <p className={`text-2xl text-white font-bold ${isUnderline && "underline"} ${isBold && "font-bold"} ${isCentered && "text-center"} ${spacer && "mt-5"}`}>{children}</p>
    }

    else{
        return <p className={`text-lg text-white ${isUnderline && "underline"} ${isBold && "font-bold"} ${isCentered && "text-center"} ${spacer && "mt-5"}`}>{children}</p>
    }
}