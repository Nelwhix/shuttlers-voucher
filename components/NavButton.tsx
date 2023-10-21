import Image from "next/image";


interface Props {
    text: string
    icon: string
    iconWidth: number
    iconHeight: number
    active: boolean
}

export default function NavButton({ text, icon, iconWidth, iconHeight, active }: Props) {

    return (
        <button className={`flex gap-3 px-4 py-3 rounded-[12px] ${active && 'bg-[#f7f7f7]'} w-full`}>
            <Image
                src={icon}
                width={iconWidth}
                height={iconHeight}
                alt={text}
            />

            <span className={`font-medium text-sm ${active ? '' : 'text-[#565656]'}`}>{text}</span>
        </button>
    )
}