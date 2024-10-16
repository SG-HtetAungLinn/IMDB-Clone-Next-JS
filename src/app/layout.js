import localFont from "next/font/local";
import Header from "@/components/Header";
import Navebar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Movie App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <Header />
                    <Navebar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
