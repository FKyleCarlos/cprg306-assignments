import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Card from '@mui/material/Card'
import Link from "next/link";
import { CardContent } from "@mui/material";

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
          <Card sx={{ backgroundColor: "#415A77", color: "white", 
            width: "100%", maxWidth: "200px", minHeight: "10vh", borderRadius: 3, padding: 2, position: "absolute", marginTop: "10px"}}>
                <CardContent>
                  <h1><Link href="/">CPRG306 ASSIGNMENTS</Link></h1>
                </CardContent>
          </Card>
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
        {children}
      </body>
    </html>
  );
}
