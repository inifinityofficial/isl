import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import Banner from "../section/home3/Banner";
import Client from "../section/home3/Client";
import Service from "../section/home3/Service";
import Funfact from "../section/home3/Funfact";
import About from "../section/home3/About";
import About2 from "../section/home3/About2";
import Faqs from "../section/home3/Faqs";
import Project from "../section/home3/Project";
import Team from "../section/home3/Team";
import Benefit from "../section/home3/Benefit";
import News from "../section/home3/News";
import CallToAction from "../section/home3/CallToAction";
import Map from "../section/home3/Map";


export const metadata = {
  title: `Home Layout3 || ${SITE_NAME}`,
};

const Home3: React.FC = (): JSX.Element => {
  return (
    <LayoutWrapper HeaderStyle="three" FooterStyle="three">
      <Banner />
      <Client />
      <Service />
      <Funfact />
      <About />
      <About2 />
      <Faqs />
      <Project />
      <Team />
      <Benefit />
      <News />
      <CallToAction />
      <Map />
    </LayoutWrapper>
  );
};

export default Home3;