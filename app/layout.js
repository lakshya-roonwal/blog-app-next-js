
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({weight: ['100','200','300','400','500','600','700','800','900'], subsets: ["latin"] });

export const metadata = {
  title: "Lakshya Roonwal Blog",
  description: "My Blog Website Where I Share My jouney of Code",
  keywords: ['Next.js', 'React', 'JavaScript','Programming','Journal','Web Development'],
  creator: 'Lakshya Roonwal',
  publisher: 'Lakshya Roonwal',
};

export default function RootLayout({ children }) {
  console.log(inter.style.fontFamily)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
