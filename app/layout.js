import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componant/Navbar";
import Footer from "./componant/Footer";
import SessionWrapper from "./componant/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund a your projects with chai",
  description: "This website is a crowdfunding platform for creators ",
  icon: 'https://cdn-icons-png.freepik.com/256/2907/2907241.png?semt=ais_hybrid', 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
        <Navbar />
        <div className="text-white min-h-[85vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          {children}
        </div>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
