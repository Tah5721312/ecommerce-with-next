// app/layout.js
import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: '400',
});



export const metadata = {
  title: "Home Page",
  description: "Description For Home Page",
  icons: {
    icon: "./images/bag-shopping-solid.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} `}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        <main
          style={{
            flex: 1,
            paddingTop: "4rem",     // 🧠 علشان الهيدر المثبت
            paddingBottom: "4rem",  // 🧠 علشان الفوتر المثبت
            paddingInline: "1.5rem"
          }}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
