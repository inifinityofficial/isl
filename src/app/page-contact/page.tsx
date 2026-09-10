import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ContactInner from "../section/contact/ContactInner";

export const metadata = {
  title: `Contact Page || ${SITE_NAME}`,
};

const Contact: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Contact Us" />
            <ContactInner />
        </LayoutWrapper>
        </>
    );
};

export default Contact;