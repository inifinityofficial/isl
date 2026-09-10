import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import FaqInner from "../section/faq/FaqInner";

export const metadata = {
  title: `Faqs Page || ${SITE_NAME}`,
};

const Faqs: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="FAQ" />
            <FaqInner />
        </LayoutWrapper>
        </>
    );
};

export default Faqs;