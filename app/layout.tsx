
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";
// import ComingSoon from "@/components/ComingSoon";

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Antriview",
    description: "An AI-powered platform for preparing for mock interviews by AI Agents.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Check if coming soon mode is enabled
    // const isComingSoon = process.env.NEXT_PUBLIC_COMING_SOON === 'true';
    
    return (
        <html lang="en" className="dark">
            <body className={`${monaSans.className} antialiased pattern`}>
                {children}
                {/* {isComingSoon ? <ComingSoon /> : children} */}

                <Toaster />
            </body>
        </html>
    );
}