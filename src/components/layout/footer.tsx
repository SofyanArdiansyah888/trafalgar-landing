import React from "react";
import DotsIcon1 from "@/components/ui/icons/dots1-icon";
import Typography from "@/components/ui/typography";
import DotsIcon2 from "@/components/ui/icons/dots2-icon";

export default function Footer() {
    return <footer
        className={"py-20 px-4 md:px-32 relative"}
        style={{background: "linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%)"}}
    >
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-12"}>
            <div className={"md:order-2 md:col-span-3 lg:col-span-2 space-y-6"}>
                <div className={"flex gap-3 text-white items-center"}>
                    <div className={"bg-white w-8 h-8 rounded-full text-primary text-center pt-1"}>T</div>
                    <Typography color={"white"} size={"textLarge"} thick={"semibold"}>Trafalgar</Typography>
                </div>
                <div>
                    <Typography color={"white"} size={"textSmall"} thick={"light"} className={"max-w-sm"}>
                        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online
                        for everyone
                    </Typography>
                </div>
                <div>
                    <Typography color={"white"} size={"textSmall"} thick={"light"}>
                        ©Trafalgar PTY LTD 2020. All rights reserved
                    </Typography>
                </div>
            </div>

            {/*COMPANY*/}
            <div className={"space-y-6"}>
                <Typography as={"div"} color={"white"} thick={"bold"}>Company</Typography>
                <ul className={"space-y-3"}>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            About
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Testimonials
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Find A Doctor
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Apps
                        </Typography>
                    </li>
                </ul>
            </div>

            {/*REGION*/}
            <div className={"space-y-6"}>
                <Typography as={"div"} color={"white"} thick={"bold"}>Region</Typography>
                <ul className={"space-y-3"}>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Indonesia
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Singapore
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Hongkong
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Canada
                        </Typography>
                    </li>
                </ul>
            </div>

            {/*HELP*/}
            <div className={"space-y-6"}>
                <Typography as={"div"} color={"white"} thick={"bold"}>Help</Typography>
                <ul className={"space-y-3"}>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Help center
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Contact support
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            Instructions
                        </Typography>
                    </li>
                    <li>
                        <Typography color={"white"} size={"textSmall"} thick={"light"}>
                            How it works
                        </Typography>
                    </li>
                </ul>
            </div>

        </div>

        <DotsIcon1 className={"absolute bottom-0 left-0 w-20 h-20"}/>
        <DotsIcon2 className={"absolute -top-10 right-0 w-20 h-20"}/>
    </footer>
}
