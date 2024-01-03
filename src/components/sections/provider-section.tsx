import React from "react";
import Typography from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import {StaticImage} from "gatsby-plugin-image";

export default function ProviderSection() {
    return <section id={"provider"}  className={"flex flex-col lg:flex-row items-center gap-24"}>
        <div className={"flex-1"}>
            <StaticImage src={"../../images/provider-illustration.png"} alt={"Provider Image"} className={"mx-auto max-w-[350px] lg:max-w-full"} />
        </div>
        <div className={"flex-1  w-full text-left lg:text-center"}>
            <div className={"space-y-6 text-left"}>
                <Typography
                    as={"h2"}
                    size={"headingMedium"}
                    thick={"semibold"}
                    className={"max-w-sm"}
                >
                    Leading healthcare providers
                </Typography>
                <hr className={"max-w-[80px] border-[1px]  border-black"}/>
                <Typography as={"h5"} size={"textMedium"} color={"muted"}>
                    Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
                    To us, it’s not just work. We take pride
                    in the solutions we deliver
                </Typography>
            </div>
            <Button variant={"outline"} size={"lg"} radius={"full"} className={"mt-8 mx-auto md:mx-0"}>Learn More</Button>
        </div>
    </section>
}
