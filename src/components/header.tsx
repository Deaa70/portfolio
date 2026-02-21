import { useEffect, useState } from "react"
import { Moon, Sun } from 'lucide-react';
import cvPDF from "@/assets/Deaa_Naser_CV.pdf";
export default function Header() {


    const state = localStorage.getItem('mode');
    const [mode, toggleMode] = useState(state && state == "true"); // false for dark and true for light

    if (mode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('mode', 'true');
    }

    else {
        localStorage.setItem('mode', 'false');
        document.documentElement.classList.remove('dark');
    }
    useEffect(() => {

        const parent = document.getElementById('root-element');

        setTimeout(() => {
            if (parent) {
                if (!parent.classList.contains('isolate')) {

                    parent.classList.add('transition-colors')
                    parent.classList.add('duration-300')
                    parent.classList.add('isolate')
                }
            }
        }, (500));

    }, [mode]);

    return <header className=" text-neutral-900 dark:text-white p-2 flex justify-between ">



        <h1 className="font-semibold select-none text-2xl text-transparent bg-clip-text bg-linear-to-l from-[#111827] dark:from-[#1f2937] to-[#9ca3af] dark:to-white  animate-rotate-gradient">
            {"<Deaa/>"}
        </h1>
        <div className="flex items-center gap-3">
            <button onClick={() => toggleMode(e => !e)} className="cursor-pointer">

                <Moon className="dark:hidden" />
                <Sun className="dark:block hidden" />
            </button>
            <a
                href={cvPDF}
                download="Deaa_Naser_CV.pdf"   // optional: specify the downloaded file name
                className="dark:text-neutral-900 text-white bg-neutral-900 dark:bg-white rounded-sm p-1 inline-block"
            >
                Download CV
            </a>
        </div>
    </header>
}