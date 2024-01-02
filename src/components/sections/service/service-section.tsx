import React from "react";
import Typography from "@/components/ui/typography";
import ServiceCard, {ServiceCardType} from "@/components/sections/service/service-card";
import {Button} from "@/components/ui/button";
import SearchDoctorIcon from "@/components/ui/icons/search-doctor-icon";
import VectorIcon from "@/components/ui/icons/vector-icon";
import OnlinePharmacyIcon from "@/components/ui/icons/online-pharmacy-icon";
import ConsultationIcon from "@/components/ui/icons/consultation-icon";
import TrackingIcon from "@/components/ui/icons/tracking-icon";
import EmergencyIcon from "@/components/ui/icons/emergency-icon";
import DetailsInfoIcon from "@/components/ui/icons/details-info-icon";
const cards: ServiceCardType[] = [
    {
        title: "Search doctor",
        subtitle: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
        icon: <SearchDoctorIcon className={"h-24"}/>
    },
    {
        title: "Online pharmacy",
        subtitle: "Buy  your medicines with our mobile application with a simple delivery system",
        icon: <OnlinePharmacyIcon className={"h-24"}/>
    },
    {
        title: "Consultation",
        subtitle: "Free consultation with our trusted doctors and get the best recomendations",
        icon: <ConsultationIcon className={"h-24"}/>
    },
    {
        title: "Details info",
        subtitle: "Free consultation with our trusted doctors and get the best recomendations",
        icon: <DetailsInfoIcon className={"h-24"}/>
    },
    {
        title: "Emergency care",
        subtitle: "You can get 24/7 urgent care for yourself or your children and your lovely family",
        icon: <EmergencyIcon className={"h-24"}/>
    },
    {
        title: "Tracking",
        subtitle: "Track and save your medical history and health data",
        icon: <TrackingIcon className={"h-24"}/>
    },
]
export default function ServiceSection() {

    return <section className={"!px-0"}>
        {/*HEADING*/}
        <div className={"space-y-8 max-w-4xl text-center mx-auto"}>
            <Typography as={"h1"} size={"headingMedium"} thick={"semibold"}>
                Our Services
            </Typography>
            <hr className={"max-w-[80px] border-[1px] mx-auto border-black"}/>
            <Typography as={"h4"} size={"textSmall"} color={"muted"}>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo
                treatment with our highly qualified doctors you can consult with us which type of service is suitable
                for your health
            </Typography>
        </div>

        {/*CARDLIST*/}
        <div className={"relative"}>

            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 z-50 px-32"}>
                {
                    cards.map((card, index) => <ServiceCard key={index} {...card} />)
                }
            </div>
            <VectorIcon className={"absolute -left-[32px] top-[10%] -z-10"}/>
        </div>

        <div className={"text-center mx-auto"}>
            <Button
                variant={"outline"}
                radius={"full"}
                size={"lg"}>
                Learn More
            </Button>
        </div>


    </section>
}
