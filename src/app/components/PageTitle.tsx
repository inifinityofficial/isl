import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageTitleProps {
  pageName: string;
  breadcrumbs?: BreadcrumbItem[];
}

// Server Component - no hooks or browser APIs
const PageTitle: React.FC<PageTitleProps> = ({ pageName, breadcrumbs }) => {
  const breadcrumbItems = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [{ label: "Home", href: "/" }, { label: pageName }];

  return (
      <section className="breadcume-section">
        <div className="outer-box">
          <div className="auto-container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="breadcumb-content">
                          <div className="breadcumb-title">
                              <h1 className="title">{pageName}</h1>
                          </div>
                          <ul className="breadcume-pull">
                              {breadcrumbItems.map((item, index) => (
                                <li key={`${item.label}-${index}`}>
                                  {item.href ? (
                                    <Link className="title-line" href={item.href}>
                                      {item.label}
                                      {index < breadcrumbItems.length - 1 && <span><i className="fas fa-angle-right"></i></span>}
                                    </Link>
                                  ) : (
                                    <>
                                      {item.label}
                                      {index < breadcrumbItems.length - 1 && <span><i className="fas fa-angle-right"></i></span>}
                                    </>
                                  )}
                                </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
  );
};

export default PageTitle;