import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TestimonialInner from "../section/testimonial/TestimonialInner";

export const metadata = {
  title: `Testimonial || ${SITE_NAME}`,
};


const TestimonialsPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Testimonial" />
            <TestimonialInner />
        </LayoutWrapper>
        </>
    );
};

export default TestimonialsPage;