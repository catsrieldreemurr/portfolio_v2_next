import Image from "next/image"
import Typography from "./typography"

interface props{
    imagePath: string
    skillText: string
    comfortLevel: string
}

export default function CarouselLoadout({imagePath, skillText, comfortLevel}:props){
    return(
        <div className="flex flex-col items-center justify-center p-2">
            <Image src={imagePath} height={200} width={200} alt={skillText}></Image>

            <div>
                <Typography variant="h3" isBold isCentered spacer>{skillText}</Typography>
                <Typography isCentered>{comfortLevel}</Typography>
            </div>
        </div>
        
    )
}