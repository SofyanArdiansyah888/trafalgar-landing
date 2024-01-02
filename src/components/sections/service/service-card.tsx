import React from "react";
import Typography from "@/components/ui/typography";

export type ServiceCardType = {
    icon: React.ReactNode
    title: string
    subtitle: string
}
export default function ServiceCard({icon, title, subtitle}: ServiceCardType) {
    return <div className={"p-12 space-y-6 rounded-3xl z-10 bg-white"} style={{boxShadow: '10px 40px 50px 0px rgba(229, 233, 246, 0.40)'}}>
        {icon}
        <Typography
            as={"h5"}
            size={"headingSmall"}
            thick={"semibold"}
        >

            {title}
        </Typography>
        <Typography
            as={"h6"}
            color={"muted"}
            size={"textSmall"}>
            {subtitle}
        </Typography>
    </div>
}
