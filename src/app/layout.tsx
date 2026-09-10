import type { Metadata } from "next";
import "../../src/app/styles/css/bootstrap.min.css";
import "../../src/app/styles/css/style.css";
import ClientPreloader from "./components/ClientPreloader";
import ClientErrorBoundary from "./components/ClientErrorBoundary";
import { dmSans, monaSans, outfit, playfairDisplay } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Infinity Software Labs",
  description: "Infinity Software Labs",
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
