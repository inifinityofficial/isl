import type { Metadata } from "next";
import Link from "next/link";
import LayoutWrapper from "../LayoutWrapper";
import PageTitle from "../components/PageTitle";
import { SERVICE_MENU_GROUPS } from "../data/services";

export const metadata: Metadata = {
  title: "Web, Software & AI Services | Infinity Software Labs",
  description:
    "Explore web development, custom software, mobile app, AI, automation, SEO, and digital growth services from Infinity Software Labs.",
  alternates: {
    canonical: "https://www.infinitysoftwarelabs.com/services",
  },
  openGraph: {
    title: "Web, Software & AI Services | Infinity Software Labs",
    description:
      "Explore web development, custom software, mobile app, AI, automation, SEO, and digital growth services from Infinity Software Labs.",
    url: "https://www.infinitysoftwarelabs.com/services",
    siteName: "Infinity Software Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web, Software & AI Services | Infinity Software Labs",
    description:
      "Explore web development, custom software, mobile app, AI, automation, SEO, and digital growth services from Infinity Software Labs.",
  },
};

const ServicesOverviewPage = () => {
  return (
    <LayoutWrapper HeaderStyle="two" FooterStyle="two">
      <PageTitle
        pageName="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <section className="service-details-section">
        <div className="auto-container">
          <div className="row">
            {SERVICE_MENU_GROUPS.map((group) => (
              <div className="col-lg-4 col-md-6 mb-4" key={group.heading}>
                <div className="inner-box" style={{ background: "#fff", border: "1px solid #eaeaea", borderRadius: 20, padding: 24 }}>
                  <h3 className="title">{group.heading}</h3>
                  <ul className="list-style-two">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default ServicesOverviewPage;
