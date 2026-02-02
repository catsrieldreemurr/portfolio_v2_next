import Link from "next/link";
import { ReactNode } from "react";

interface SetProps{
    children?: ReactNode
    isBold?: boolean
    href: string
}

export default function LinkElement({children, isBold, href}:SetProps){
    return <Link href={href} className={`text-pink-950 hover:underline ${isBold && "font-bold"}`}>{children}</Link>
}