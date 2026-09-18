import LayoutWrapper from "./LayoutWrapper";
import PageTitle from "./components/PageTitle";

const NotFoundPage = () => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <PageTitle pageName="Page Not Found" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Page Not Found" }]} />
      <section className="error-section">
        <div className="auto-container text-center py-5">
          <h2>We couldn’t find that page.</h2>
          <p>The service or page you requested is not available. Please return to the homepage or browse our services.</p>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default NotFoundPage;
