
import type { Metadata } from "next";
import React from 'react';
import { SITE_NAME } from "../app/Head";
import Banner from "./section/home1/Banner";
import Client from "./section/home1/Client";
import About from "./section/home1/About";
import Service from "./section/home1/Service";
import Funfact from "./section/home1/Funfact";
import Marquee from "./section/home1/Marquee";
import Testimonial from "./section/home1/Testimonial";
import Benefit from "./section/home1/Benefit";
import Pricing from "./section/home1/Pricing";
import Contact from "./section/home1/Contact";
import News from "./section/home1/News";
import CallToAction from "./section/home1/CallToAction";
import LayoutWrapper from './LayoutWrapper';

export const metadata: Metadata = {
  title: "Web Development Company | Infinity Software Labs",
  description:
    "Infinity Software Labs is a web development company delivering custom websites, web applications, software, AI solutions, and digital growth services for modern businesses.",
  alternates: {
    canonical: "https://www.infinitysoftwarelabs.com/",
  },
  openGraph: {
    title: "Web Development Company | Infinity Software Labs",
    description:
      "Custom websites, business software, AI solutions, and digital growth services built to support real business goals.",
    url: "https://www.infinitysoftwarelabs.com/",
    siteName: "Infinity Software Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | Infinity Software Labs",
    description:
      "Custom websites, business software, AI solutions, and digital growth services built to support real business goals.",
  },
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
         {/*    <Client /> */}
            <About />
            <Service />
            <Funfact />
            <Marquee />
            <Testimonial />
            <Benefit />
           { <Pricing />}
            <Contact />
        {/*     <News /> */}
            <CallToAction />
        </LayoutWrapper>
        </>
    );
};

export default Home;