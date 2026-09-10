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

export const metadata = {
  title: `About Pages || ${SITE_NAME}`,
};

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="About Us" />
            <Client />
            <About />
            <Service />
            <Faqs />
            <Team />
            <Pricing />
            <CallToAction />
            <Contact />
            <Map />
        </LayoutWrapper>
        </>
    );
};

export default AboutPage;