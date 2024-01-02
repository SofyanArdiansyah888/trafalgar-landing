import React from "react";
import {cn} from "@/lib/utils";

export default function Card({children,className}: { children: React.ReactNode, className?:string }) {
    return <div className={cn("space-y-6 rounded-3xl z-10 bg-white",className)}
                style={{boxShadow: '10px 40px 50px 0px rgba(229, 233, 246, 0.40)'}}>
        {children}
    </div>
}
