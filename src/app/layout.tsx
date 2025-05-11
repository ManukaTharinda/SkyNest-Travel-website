import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Home/Navbar/Nav";
import Responsivenavbar from "../../components/Home/Navbar/Responsivenavbar";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ["latin"],
});

// Commented out Geist font imports
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Sky Nest Camp@Ella",
  description: "CodeScape labs & Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
<Responsivenavbar/>
        {children}
       
      </body>
    </html>
  );
}