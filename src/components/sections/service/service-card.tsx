import React from "react";
import Typography from "@/components/ui/typography";
import Card from "@/components/ui/card";

export type ServiceCardType = {
    icon: React.ReactNode
    title: string
    subtitle: string
}
export default function ServiceCard({icon, title, subtitle}: ServiceCardType) {
    return <Card className={"p-10"}>
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
    </Card>
}
