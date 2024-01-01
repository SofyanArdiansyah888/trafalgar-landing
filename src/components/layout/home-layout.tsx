import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import React from "react";

export default function HomeLayout({children}:{children: React.ReactNode}) {
    return <>
        <Header/>
        <main className={"container"}>
            {children}
        </main>

        <Footer/>
    </>
}
