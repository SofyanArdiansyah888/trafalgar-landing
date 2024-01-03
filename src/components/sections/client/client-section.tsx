import React from "react";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import ClientCard from "@/components/sections/client/client-card";

export default function ClientSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(1)
    const [count, setCount] = React.useState(0)
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
            plugins={[
                Autoplay({
                    delay: 2500,
                })
            ]}
            setApi={setApi}
            opts={{
                loop: true,
            }}
            className={"max-w-5xl mx-auto"}>
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



