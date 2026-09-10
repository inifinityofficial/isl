import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home6/Banner";
import Funfact from "../section/home6/Funfact";
import Service from "../section/home6/Service";
import Client from "../section/home6/Client";
import About from "../section/home6/About";
import Funfact2 from "../section/home1/Funfact";
import Project from "../section/home1/Project";
import Project2 from "../section/home6/Project2";
import Marquee from "../section/home2/Marquee";
import ProgressBar from "../section/home6/ProgressBar";
import Faq from "../section/home6/Faq";
import Team from "../section/home6/Team";
import Pricing from "../section/home6/Pricing";
import CallToAction from "../section/home6/CallToAction";
import Contact from "../section/home6/Contact";

export const metadata = {
  title: `Home Layout6 || ${SITE_NAME}`,
};

const Home6: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="six" FooterStyle="two">
      <Banner />
      <Funfact />
      <Service />
      <Client />
      <About />
      <Funfact2 />
      <Project />
      <Project2 />
      <Marquee />
      <ProgressBar />
      <Faq />
      <Team />
      <Pricing />
      <CallToAction />
      <Contact />
    </LayoutWrapper>
  );
};

export default Home6;