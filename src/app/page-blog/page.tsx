import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import NewsGrid from "../section/blog/NewsGrid";

export const metadata = {
  title: `News Grid || ${SITE_NAME}`,
};

const NewsGridPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="News Grid" />
            <NewsGrid />
        </LayoutWrapper>
        </>
    );
};

export default NewsGridPage;