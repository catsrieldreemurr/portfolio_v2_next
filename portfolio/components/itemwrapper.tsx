import { Progress } from "./ui/progress";
import Typography from "./ui/typography";

interface SetProps{
    value?: number
    text?: string
}

export default function AbilityList({value, text}:SetProps){
    return(
        <div className="flex gap-10 items-center rounded-xl mt-5 p-3 text-black">
            <Progress value={value || 0} className="w-1/3"></Progress>
            <Typography isBold>{text || "you forgor"}</Typography>
        </div>
    )
}