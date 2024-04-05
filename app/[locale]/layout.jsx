import { Inter } from "next/font/google";
import "./Font.css";
import "./globals.css";
import SiteConfig from "@/app/[locale]/config/site"
import { useLocale } from "next-intl";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children , params }) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}  dir={locale === 'fa' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
