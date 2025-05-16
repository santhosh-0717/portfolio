import type React from "react"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import {ThemeProvider} from "@/components/theme-provider"
import {NoiseDemo} from "@/components/wallpaper";
import PageLoader from "@/components/pageLoader";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Santhosh Guttula Portfolio",
    description: "Personal portfolio of Santhosh, a computer science student specializing in AI and web development",
    icons: "https://api.iconify.design/clarity:stack-line.svg"


}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {/* <NoiseDemo/>  */}
            <PageLoader>
                {children}
            </PageLoader>
        </ThemeProvider>
        </body>
        </html>
    )
}

