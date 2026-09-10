import React from "react";
import { SITE_NAME } from "../Head";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import ProjectDetails from "../section/project/ProjectDetails";

export const metadata = {
  title: `Project Details || ${SITE_NAME}`,
};

const ProjectDetailsPage: React.FC = (): JSX.Element => {
    return (
        <>
        <LayoutWrapper HeaderStyle="two" FooterStyle="two">
            <PageTitle pageName="Project Details" />
            <ProjectDetails />
        </LayoutWrapper>
        </>
    );
};

export default ProjectDetailsPage;