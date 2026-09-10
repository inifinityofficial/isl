import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import TeamDetails from "../section/team/TeamDetails";

export const metadata = {
  title: `Team Details || ${SITE_NAME}`,
};


const TeamDetailsPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Team Details" />
            <TeamDetails />
        </LayoutWrapper>
        </>
    );
};

export default TeamDetailsPage;
