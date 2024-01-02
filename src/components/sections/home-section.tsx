import React from "react";
import Typography from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {StaticImage} from "gatsby-plugin-image";


export default function HomeSection() {
    return <section className={"flex gap-2"}>
        <div className={"flex-1 "}>
            <div className={"space-y-4"}>
                <Typography
                    as={"h1"}
                    size={"headingLarge"}
                    thick={"bold"}
                    className={"max-w-md leading-tight"}
                >
                    Virtual healthcare for you
                </Typography>
                <Typography
                    as={"h3"}
                    color={"muted"}
                    className={"max-w-md"}
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
            layout={"fixed"}
        />
    </section>
}
