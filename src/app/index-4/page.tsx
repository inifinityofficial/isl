import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home4/Banner";
import About from "../section/home4/About";
import CallToAction from "../section/home4/CallToAction";
import Funfact from "../section/home4/Funfact";
import Client from "../section/home4/Client";
import Service from "../section/home4/Service";
import Choose from "../section/home4/Choose";
import Benefit from "../section/home4/Benefit";
import Marquee from "../section/home4/Marquee";
import Project from "../section/home4/Project";
import Pricing  from "../section/home4/Pricing";
import Team  from "../section/home4/Team";
import CallToAction2 from "../section/home4/CallToAction2";
import Testimonial from "../section/home4/Testimonial";
import News from "../section/home4/News";
import Contact from "../section/home4/Contact";


export const metadata = {
  title: `Home Layout4 || ${SITE_NAME}`,
};

const Home4: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="four" FooterStyle="four">
      <Banner />
      <About />
      <CallToAction />
      <Funfact />
      <Client />
      <Service />
      <Choose />
      <Benefit />
      <Marquee />
      <Project />
      <Pricing />
      <Team />
      <CallToAction2 />
      <Testimonial />
      <News />
      <Contact />
    </LayoutWrapper>
  );
};

export default Home4;