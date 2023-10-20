import Sidebar from "@/components/Sidebar";
import {ReactNode} from "react";
import localFont from "next/font/local"

interface Props {
    children: ReactNode
}



export default function Layout({ children }: Props) {
    return (
        <div className={``}>
            <Sidebar />
            {children}
        </div>
    )
}