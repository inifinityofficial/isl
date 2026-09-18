import type { Metadata } from "next";
import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import Client from "../section/home1/Client";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import Faqs from "../section/home2/Faqs";
import Pricing from "../section/home1/Pricing";
import Team from "../section/home2/Team";
import CallToAction from "../section/home2/CallToAction";
import Contact from "../section/home2/Contact";
import Map from "../section/home2/Map"

export const metadata: Metadata = {
  title: "About Infinity Software Labs | Web & AI Development Agency",
  description:
    "Learn about Infinity Software Labs, a web development and software company focused on custom websites, business software, AI solutions, and digital transformation.",
  alternates: {
    canonical: "https://www.infinitysoftwarelabs.com/page-about",
  },
  openGraph: {
    title: "About Infinity Software Labs | Web & AI Development Agency",
    description:
      "A technology partner for custom web development, software delivery, AI integrations, and business-focused digital solutions.",
    url: "https://www.infinitysoftwarelabs.com/page-about",
    siteName: "Infinity Software Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Infinity Software Labs | Web & AI Development Agency",
    description:
      "A technology partner for custom web development, software delivery, AI integrations, and business-focused digital solutions.",
  },
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="About Us" />
            {/* <Client /> */}
            <About />
            <Service />
            <Faqs />
         {/*    <Team /> */}
            {/* <Pricing /> */}
            <CallToAction />
            <Contact />
            <Map />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;