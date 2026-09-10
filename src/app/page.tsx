
import React from 'react';
import { SITE_NAME } from "../app/Head";
import Banner from "./section/home1/Banner";
import Client from "./section/home1/Client";
import About from "./section/home1/About";
import Service from "./section/home1/Service";
import Funfact from "./section/home1/Funfact";
import Project from "./section/home1/Project";
import Marquee from "./section/home1/Marquee";
import Testimonial from "./section/home1/Testimonial";
import Benefit from "./section/home1/Benefit";
import Pricing from "./section/home1/Pricing";
import Contact from "./section/home1/Contact";
import News from "./section/home1/News";
import CallToAction from "./section/home1/CallToAction";
import LayoutWrapper from './LayoutWrapper';

export const metadata = {
  title: `Home Layout1 || ${SITE_NAME}`,
};

const Home: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper>
            <Banner />
            <Client />
            <About />
            <Service />
            <Funfact />
            <Project />
            <Marquee />
            <Testimonial />
            <Benefit />
            <Pricing />
            <Contact />
            <News />
            <CallToAction />
        </LayoutWrapper>
        </>
    );
};

export default Home;