import React from "react";
import LogoIcon from "@/components/ui/icons/logo-icon";
import Typography from "@/components/ui/typography";

export default function Header() {
    return <header className={"container flex justify-between py-8 items-center"}>
        <div>
            <LogoIcon className={"w-auto h-[32px]"}/>
        </div>

        <nav>
            <ul className={"flex gap-8 items-center"}>
                <li>
                    <Typography thick={"semibold"} size={'textSmall'}> Home</Typography>
                </li>
                <li>
                    <Typography color={"muted"} size={'textSmall'}>
                        Find A Doctor
                    </Typography>
                </li>
                <li>
                    <Typography color={"muted"} size={'textSmall'}>
                        Apps
                    </Typography>
                </li>
                <li>
                    <Typography color={"muted"} size={'textSmall'}>
                        Testimonials
                    </Typography>
                </li>
                <li>
                    <Typography color={"muted"} size={'textSmall'}>
                        About Us
                    </Typography>
                </li>
            </ul>
        </nav>
    </header>
}
