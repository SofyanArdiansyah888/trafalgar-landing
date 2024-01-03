import Typography from "@/components/ui/typography";
import {StaticImage} from "gatsby-plugin-image";
import DotsIcon1 from "@/components/ui/icons/dots1-icon";
import DotsIcon2 from "@/components/ui/icons/dots2-icon";
import React from "react";

export default function ClientCard() {
    return <div className={"rounded-2xl py-6 lg:py-16 px-6 lg:px-32 relative"}
                style={{background: "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)"}}
    >
        <div className={"text-center mx-auto space-y-4 mb-16"}>
            <Typography as={"h2"} color={"white"} size={"headingSmall"} thick={"semibold"}>What our customer are
                saying
            </Typography>
            <hr className={"max-w-[80px] border-[1px]  border-white mx-auto"}/>
        </div>

        <div className={"grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0  items-center"}>
            <div className={"flex gap-8 items-center"}>
                <StaticImage
                    src={"../../../images/profil.png"}
                    alt={"Customer Image"}
                    className={"w-20 h-20 rounded-full"}
                    placeholder={"blurred"}
                />
                <div>
                    <Typography as={"h4"} color={"white"} size={"textMedium"} className={"whitespace-nowrap"}
                                thick={"semibold"}>Edward Newgate</Typography>
                    <Typography color={"white"} size={"textSmall"}>Founder Circle</Typography>
                </div>
            </div>
            <Typography as={"p"} color={"white"} className={" justify-stretch"} size={"textSmall"}>
                “Our dedicated patient engagement app and web portal allow you to access information instantaneously (no
                tedeous form, long calls, or administrative hassle) and securely”
            </Typography>
        </div>

        <DotsIcon1 className={"absolute top-0 right-0 w-24 h-24"}/>
        <DotsIcon2 className={"absolute bottom-0 left-0 w-24 h-24"}/>
    </div>
}
