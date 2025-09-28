import Navbar from "@/components/navbar"
import { Vazirmatn } from "next/font/google"

const font = Vazirmatn()

export default function FaLayout({ children }) {
    return (
        <div style={font.style} dir="rtl">
            <Navbar lang="fa" />
            {children}
        </div>
    )
}