import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ServiceGrid from "../section/services/ServiceGrid";

export const metadata = {
  title: `Services Page || ${SITE_NAME}`,
};


const ServicesPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Service Grid" />
            <ServiceGrid />
        </LayoutWrapper>
        </>
    );
};

export default ServicesPage;