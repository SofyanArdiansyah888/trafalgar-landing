import React from "react";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Typography from "@/components/ui/typography";
import {StaticImage} from "gatsby-plugin-image";
import DotsIcon1 from "@/components/ui/icons/dots1-icon";
import DotsIcon2 from "@/components/ui/icons/dots2-icon";

export default function ClientSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(1)
    const [count, setCount] = React.useState(0)
    console.log(current)
    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return <section>
        <Carousel
            setApi={setApi}
            opts={{
                loop: true,
            }}
            className={"max-w-4xl mx-auto"}>
            <CarouselContent>
                {
                    [1, 2, 3, 4].map((item) => <CarouselItem key={item}><ClientCard/></CarouselItem>)
                }
            </CarouselContent>
            <div className={"relative max-w-fit mx-auto mt-20"}>
                <CarouselPrevious/>
                <div className={"flex gap-2"}>
                    <div className={`w-1.5 h-1.5 rounded-full ${current === 1 ? "bg-primary/50" : "bg-primary"}  `}/>
                    <div className={`w-1.5 h-1.5 rounded-full ${current === 2 ? "bg-primary/50" : "bg-primary"}  `}/>
                    <div className={`w-1.5 h-1.5 rounded-full ${current === 3 ? "bg-primary/50" : "bg-primary"}  `}/>
                    <div className={`w-1.5 h-1.5 rounded-full ${current === 4 ? "bg-primary/50" : "bg-primary"}  `}/>
                </div>
                <CarouselNext/>
            </div>
        </Carousel>

    </section>
}


function ClientCard() {
    return <div className={"rounded-2xl py-16 px-16 relative"}
                style={{background: "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)"}}
    >
        <div className={"text-center mx-auto space-y-4 mb-16"}>
            <Typography as={"h2"} color={"white"} size={"headingSmall"} thick={"semibold"}>What our customer are
                saying</Typography>
            <hr className={"max-w-[80px] border-[1px]  border-white mx-auto"}/>
        </div>

        <div className={"grid grid-cols-2  items-center"}>
            <div className={"flex gap-8 items-center"}>
                <StaticImage
                    src={"../../images/icon.png"}
                    alt={"Customer Image"}
                    className={"w-20 h-20 rounded-full"}
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
