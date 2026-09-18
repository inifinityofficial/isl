import type { Metadata } from "next";
import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TestimonialInner from "../section/testimonial/TestimonialInner";

export const metadata: Metadata = {
  title: "Client Feedback | Infinity Software Labs",
  description:
    "Explore client feedback and project experiences with Infinity Software Labs, a web development and software company focused on digital products, AI solutions, and business growth.",
  alternates: {
    canonical: "https://www.infinitysoftwarelabs.com/page-testimonial",
  },
  openGraph: {
    title: "Client Feedback | Infinity Software Labs",
    description:
      "See how businesses experience our web development, software, and AI project work across design, delivery, and long-term support.",
    url: "https://www.infinitysoftwarelabs.com/page-testimonial",
    siteName: "Infinity Software Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Feedback | Infinity Software Labs",
    description:
      "See how businesses experience our web development, software, and AI project work across design, delivery, and long-term support.",
  },
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