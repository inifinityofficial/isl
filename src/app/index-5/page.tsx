import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home5/Banner";
import Service from "../section/home5/Service";
import About from "../section/home5/About";
import Marquee from "../section/home5/Marquee";
import Benefit from "../section/home4/Benefit";
import HzAccordion from "../section/home5/HzAccordion";
import Counter from "../section/home5/Counter";
import Funfact from "../section/home5/Funfact";
import Pricing  from "../section/home5/Pricing";
import Client from "../section/home5/Client";
import Benefit2 from "../section/home5/Benefit2";
import Team  from "../section/home4/Team";
import Contact from "../section/home1/Contact";
import News from "../section/home1/News";

export const metadata = {
  title: `Home Layout5 || ${SITE_NAME}`,
};

const Home5: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="five" FooterStyle="five">
      <Banner />
      <Service />
      <About />
      <Marquee />
      <Benefit />
      <HzAccordion />
      <Counter />
      <Funfact />
      <Pricing />
      <Client />
      <Benefit2 />
      <Team />
      <Contact />
      <News />
    </LayoutWrapper>
  );
};

export default Home5;