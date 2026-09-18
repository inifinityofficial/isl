import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutWrapper from "../../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import { SERVICE_CATALOG, getServiceBySlug } from "../../data/services";
import ServiceDetailTemplate from "../../section/services/ServiceDetailTemplate";

export async function generateStaticParams() {
  return SERVICE_CATALOG.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Infinity Software Labs",
      description: "The requested service page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    alternates: {
      canonical: service.canonical,
    },
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      url: service.canonical,
      siteName: "Infinity Software Labs",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.ogTitle,
      description: service.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <LayoutWrapper HeaderStyle="two" FooterStyle="two">
        <PageTitle
          pageName={service.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/page-services" },
            { label: service.title },
          ]}
        />
        <ServiceDetailTemplate service={service} />
      </LayoutWrapper>
    </>
  );
};

export default ServiceDetailPage;
