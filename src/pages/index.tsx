import * as React from "react"
import type { HeadFC } from "gatsby"
import HomeLayout from "@/components/layout/home-layout";
import HomeSection from "@/components/sections/home-section";
import ServiceSection from "@/components/sections/service/service-section";
import ProviderSection from "@/components/sections/provider-section";
import DownloadSection from "@/components/sections/download/download-section";
import ClientSection from "@/components/sections/client/client-section";
import ArticleSection from "@/components/sections/article/article-section";
import {StaticImage} from "gatsby-plugin-image";


export default function HomePage(){
  return <HomeLayout>
      <HomeSection />
      <ServiceSection />
      <ProviderSection />
      <DownloadSection />
      <ClientSection />
      <ArticleSection />
  </HomeLayout>
}

export const Head: HeadFC = () => <title>Trafalgar Landing Page</title>
