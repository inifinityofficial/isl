import type { Metadata } from "next";
import "../../src/app/styles/css/bootstrap.min.css";
import "../../src/app/styles/css/style.css";
import ClientPreloader from "./components/ClientPreloader";
import ClientErrorBoundary from "./components/ClientErrorBoundary";
import { dmSans, monaSans, outfit, playfairDisplay } from "./lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.infinitysoftwarelabs.com"),
  title: {
    default: "Infinity Software Labs | Web Development, Software & AI Solutions",
    template: "%s | Infinity Software Labs",
  },
  description:
    "Infinity Software Labs builds professional websites, custom software, web applications, and AI-powered business solutions for modern companies.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Web Development Company",
    "Software Development Company",
    "AI Development Services",
    "Custom Software Development",
    "Web Application Development",
    "E-commerce Development",
    "WordPress Development",
    "UI UX Design",
  ],
  openGraph: {
    title: "Infinity Software Labs | Web Development, Software & AI Solutions",
    description:
      "Professional web development, custom software, and AI solutions designed to support business growth and operational efficiency.",
    url: "https://www.infinitysoftwarelabs.com",
    siteName: "Infinity Software Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Software Labs | Web Development, Software & AI Solutions",
    description:
      "Professional web development, custom software, and AI solutions designed to support business growth and operational efficiency.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${monaSans.variable} ${outfit.variable} ${playfairDisplay.variable}`}>
      <body className="scroll-smooth" suppressHydrationWarning>
        <ClientErrorBoundary>
          <ClientPreloader />
          {children}
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
