import React from "react";
import Typography from "@/components/ui/typography";
import ArticleCard, {ArticleCardType} from "@/components/sections/article/article-card";
import VectorIcon2 from "@/components/ui/icons/vector-icon2";
import {Button} from "@/components/ui/button";


const items: ArticleCardType[] = [
    {
        title: "Disease detection, check up in the laboratory",
        description: "In this case, the role of the health laboratory is very important to do a disease detection...",
        image: "./images/icon.png",
        link: ""
    },
    {
        title: "Herbal medicines that are safe for consumption",
        description: "Herbal medicine is very widely used at this time because of its very good for your health...",
        image: "../images/icon.png",
        link: ""
    },
    {
        title: "Natural care for healthy facial skin",
        description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
        image: "../images/icon.png",
        link: ""
    },
]
export default function ArticleSection() {
    return <section className={"!px-0"}>
        {/*HEADING*/}
        <div className={"space-y-6"}>
            <Typography as={"h2"} size={"headingMedium"} thick={"semibold"} className={"text-center"}>
                Check out our latest article
            </Typography>
            <hr className={"max-w-[80px] border-[1px] mx-auto border-black"}/>
        </div>
        {/*CARDS*/}
        <div className={"relative mt-24 px-32"}>
            <VectorIcon2 className={"absolute right-0"}/>
            <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
                {
                    items.map((item, index) =>
                        <ArticleCard {...item} key={index} />)
                }
            </div>
        </div>

        <div className={"text-center mx-auto mt-24"}>
            <Button
                variant={"outline"}
                radius={"full"}
                size={"lg"}>
                View all
            </Button>
        </div>
    </section>
}
