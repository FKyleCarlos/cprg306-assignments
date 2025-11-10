import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Card from '@mui/material/Card'
import Link from "next/link";
import { CardContent } from "@mui/material";
import { AuthContextProvider } from "./contexts/AuthContext.js";
 
// export default function Layout({ children }) {
//   return <AuthContextProvider>{children}</AuthContextProvider>;
// }

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopping List",
  description: "Don't delay, else you'll go hungrey!",
};

function SiteTitle() {
  return(
        <div className="flex justify-center text-center">
          <div className="bg-slate-600 text-slate-200 w-full max-w-[200px] min-h-[12vh] rounded-lg p-4 pt-8 shadow-lg mt-5 position: absolute">
            <h1><Link href="/">CPRG306 ASSIGNMENTS</Link></h1>
          </div>
        </div>
  )

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <SiteTitle/>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
