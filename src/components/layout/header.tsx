import React from "react";
import LogoIcon from "@/components/ui/icons/logo-icon";

export default function Header() {
    return <header className={"container flex justify-between py-8 items-center"}>
        <div>
            <LogoIcon className={"w-auto h-[32px]"} />
        </div>

        <nav>
            <ul className={"flex gap-6"}>
                <li>Home</li>
                <li>Find A Doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About Us</li>
            </ul>
        </nav>
    </header>
}
