import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home2/Banner";
import Clients from "../section/home2/Clients";
import Service from "../section/home2/Service";
import About from "../section/home2/About";
import Project from "../section/home2/Project";
import Team from "../section/home2/Team";
import Faqs from "../section/home2/Faqs";
import Testimonial from "../section/home2/Testimonial";
import Marquee from "../section/home2/Marquee";
import News from "../section/home2/News";
import CallToAction from "../section/home2/CallToAction";
import Contact from "../section/home2/Contact";
import Map from "../section/home2/Map"


export const metadata = {
  title: `Home Layout2 || ${SITE_NAME}`,
};

const Home2: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <Banner />
      <Clients />
      <Service />
      <About />
      <Project />
      <Team />
      <Faqs />
      <Testimonial />
      <Marquee />
      <News />
      <CallToAction />
      <Contact />
      <Map />
    </LayoutWrapper>
  );
};

export default Home2;