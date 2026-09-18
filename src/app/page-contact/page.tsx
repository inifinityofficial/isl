import type { Metadata } from "next";
import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ContactInner from "../section/contact/ContactInner";

export const metadata: Metadata = {
    title: `Contact Infinity Software Labs | ${SITE_NAME}`,
    description:
        "Contact Infinity Software Labs to discuss web development, custom software, AI solutions, and digital growth projects for your business.",
    alternates: {
        canonical: "https://www.infinitysoftwarelabs.com/page-contact",
    },
    openGraph: {
        title: `Contact Infinity Software Labs | ${SITE_NAME}`,
        description:
            "Talk with Infinity Software Labs about practical web, software, AI, and digital growth solutions for your business.",
        url: "https://www.infinitysoftwarelabs.com/page-contact",
        siteName: SITE_NAME,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: `Contact Infinity Software Labs | ${SITE_NAME}`,
        description:
            "Talk with Infinity Software Labs about practical web, software, AI, and digital growth solutions for your business.",
    },
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