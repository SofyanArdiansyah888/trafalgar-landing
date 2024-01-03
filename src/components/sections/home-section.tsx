import React from "react";
import Typography from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {StaticImage} from "gatsby-plugin-image";


export default function HomeSection() {
    return <section id={"home"} className={"grid grid-cols-1 lg:grid-cols-2 gap-2"}>
        <div className={"text-center lg:text-left"}>
            <div className={"space-y-4"}>
                <Typography
                    as={"h1"}
                    size={"headingLarge"}
                    thick={"bold"}
                    className={"lg:max-w-md leading-tight text-center lg:text-left"}
                >
                    Virtual healthcare for you
                </Typography>
                <Typography
                    as={"h3"}
                    color={"muted"}
                    className={"max-w-md mx-auto lg:mx-0"}
                >
                    Trafalgar provides progressive, and affordable
                    healthcare, accessible on mobile and online
                    for everyone
                </Typography>
            </div>
            <Button
                variant={"default"}
                size={"lg"}
                radius={"full"}
                className={"mt-8"}>
                Consult today
            </Button>
        </div>
        <StaticImage
            src={"../../images/home-illustration.png"}
            alt={"Home Section Image"}
            placeholder={"blurred"}
            className={"mx-auto max-w-[350px] lg:max-w-full"}
        />
    </section>
}
