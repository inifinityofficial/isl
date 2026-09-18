import React, { Suspense } from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import NewsGrid from "../section/blog/NewsGrid";

export const metadata = {
  title: `Insights & Technology News || ${SITE_NAME}`,
  description:
    "Explore practical articles on web development, AI, automation, software engineering, SEO, and modern business technology from Infinity Software Labs.",
  alternates: {
    canonical: "https://www.infinitysoftwarelabs.com/page-blog",
  },
  openGraph: {
    title: "Insights & Technology News | Infinity Software Labs",
    description:
      "Actionable technology insights covering AI, web development, software engineering, SEO, and digital growth.",
    url: "https://www.infinitysoftwarelabs.com/page-blog",
    siteName: "Infinity Software Labs",
    type: "website",
  },
};

const NewsGridPage: React.FC = (): JSX.Element => {
  return (
    <>
      <LayoutWrapper HeaderStyle="two" FooterStyle="two">
        <PageTitle pageName="Insights & Technology News" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <Suspense fallback={<div className="auto-container" style={{ padding: "2rem 0" }}>Loading articles...</div>}>
          <NewsGrid />
        </Suspense>
      </LayoutWrapper>
    </>
  );
};

export default NewsGridPage;