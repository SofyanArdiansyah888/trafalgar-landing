import React from "react";
import LogoIcon from "@/components/ui/icons/logo-icon";
import Typography from "@/components/ui/typography";
import {Link} from "gatsby";

export default function Header() {
    return <header className={"container flex justify-between py-8 items-center"}>
        <div>
            <LogoIcon className={"w-auto h-[32px]"}/>
        </div>

        <nav className={"hidden lg:block"}>
            <ul className={"flex gap-8 items-center"}>
                <li>
                    <Typography as={"a"} href={"#home"}  color={"muted"} size={'textSmall'} className={"hover:text-primary"} > Home</Typography>
                </li>
                <li>
                    <Typography as={"a"} href={"#service"}  color={"muted"} size={'textSmall'} className={"hover:text-primary"}>
                        Find A Doctor
                    </Typography>
                </li>
                <li>
                    <Typography as={"a"} href={"#download"} color={"muted"} size={'textSmall'} className={"hover:text-primary"}>
                        Apps
                    </Typography>
                </li>
                <li>
                    <Typography as={"a"} href={"#client"} color={"muted"} size={'textSmall'} className={"hover:text-primary"}>
                        Testimonials
                    </Typography>
                </li>
                <li>
                    <Typography as={"a"} href={"#article"} color={"muted"} size={'textSmall'} className={"hover:text-primary"}>
                        Article
                    </Typography>
                </li>
            </ul>
        </nav>
    </header>
}
