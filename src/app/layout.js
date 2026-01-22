import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/layout/Footer";
import NavBar from "@/layout/NavBar";
import ClientI18nProvider from "@/providers/ClientI18nProvider";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "SD Company - Digital Solutions",
  description: "Innovative Digital Solutions for Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <ClientI18nProvider>
          <LanguageProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ClientI18nProvider>
      </body>
    </html>
  );
}
