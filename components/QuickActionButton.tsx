import { ReactNode } from "react"
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface Props {
    children: ReactNode
}

export default function QuickActionButton({ children }: Props) {
    return (
        <Button className={"rounded-xl justify-start shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] hover:bg-gray-200 px-4 py-7 bg-white text-black flex gap-4 items-center border border-[#EBEBEB]"}>
            {children}
        </Button>
    )
}