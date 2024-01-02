import React from "react";
import Typography from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import DownloadIcon from "@/components/ui/icons/download-icon";
import {StaticImage} from "gatsby-plugin-image";

export default function DownloadSection() {
    return <section className={"flex items-center gap-24"}>
        {/*TEXT*/}
        <div>
            <div className={"text-left space-y-4"}>
                <Typography as={"h2"} size={"headingMedium"} thick={"semibold"} className={"max-w-xs"}>
                    Download our mobile apps
                </Typography>
                <hr className={"max-w-[80px] border-[1px]  border-black"}/>
                <Typography as={"h4"} size={"textMedium"} color={"muted"} className={"max-w-md"}>
                    Our dedicated patient engagement app and
                    web portal allow you to access information instantaneously (no tedeous form, long calls,
                    or administrative hassle) and securely
                </Typography>
            </div>
            <Button variant={"outline"} size={"lg"} radius={"full"} className={"flex items-center gap-2 mt-8"}>
                Download
                <DownloadIcon/>
            </Button>
        </div>

        {/*IMAGE*/}
        <StaticImage
            src={"../../images/download-illustration.png"}
            alt={"Download Image On Section"}
            placeholder={"blurred"}
        />
    </section>
}
