import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ServiceDetails from "../section/services/ServiceDetails";

export const metadata = {
  title: `Services Details || ${SITE_NAME}`,
};

const ServiceDetailsPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Service Details" />
            <ServiceDetails />
        </LayoutWrapper>
        </>
    );
};

export default ServiceDetailsPage;