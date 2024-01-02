import Card from "@/components/ui/card";
import React from "react";
import Typography from "@/components/ui/typography";
import NextIcon from "@/components/ui/icons/next-icon";
import {StaticImage} from "gatsby-plugin-image";

export type ArticleCardType = {
    image: string,
    title: string,
    description: string,
    link: string
}
export default function ArticleCard({image, title, description, link}: ArticleCardType) {
    return <Card>
        {/*<img src={""} alt={title} className={""}/>*/}
        <StaticImage src={"../../../images/article-image1.png"} alt={title} className={"rounded-t-3xl"} />
        <div className={"py-4 px-6 text-left relative min-h-[280px]"}>
            <Typography size={"headingSmall"} thick={"semibold"}>{title}</Typography>
            <Typography size={"textMedium"} color={"muted"} className={"my-4"}>{description}</Typography>
            <Typography size={"textSmall"} color={"primary"} className={"mt-4 absolute bottom-8 left-6 flex gap-2 items-center"}>Read more <NextIcon/></Typography>
        </div>

    </Card>
}
