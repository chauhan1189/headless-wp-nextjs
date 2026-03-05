import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "../lib/config";

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}