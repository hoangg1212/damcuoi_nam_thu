import type { Metadata } from "next";

import {
    Cormorant_Garamond,
    Great_Vibes,
    Montserrat,
} from "next/font/google";

import "./globals.css";


/* =========================================
   FONT - MONTSERRAT
========================================= */

const montserrat =
    Montserrat({
        subsets: [
            "latin",
        ],

        weight: [
            "300",
            "400",
            "500",
            "600",
        ],

        variable:
            "--font-montserrat",

        display:
            "swap",
    });


/* =========================================
   FONT - CORMORANT GARAMOND
========================================= */

const cormorant =
    Cormorant_Garamond({
        subsets: [
            "latin",
        ],

        weight: [
            "300",
            "400",
            "500",
            "600",
        ],

        variable:
            "--font-cormorant",

        display:
            "swap",
    });


/* =========================================
   FONT - GREAT VIBES
========================================= */

const greatVibes =
    Great_Vibes({
        subsets: [
            "latin",
        ],

        weight:
            "400",

        variable:
            "--font-great-vibes",

        display:
            "swap",
    });


/* =========================================
   METADATA
========================================= */

export const metadata: Metadata = {

    title:
        "Nguyễn Nam ♥ Huỳnh Thư | Ngày chung đôi",

    description:
        "Câu chuyện tình yêu và ngày chung đôi của Nguyễn Nam & Huỳnh Thư.",

};


/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({
    children,
}: Readonly<{
    children:
        React.ReactNode;
}>) {

    return (

        <html
            lang="vi"
        >

            <body
                suppressHydrationWarning

                className={`
                    ${montserrat.variable}
                    ${cormorant.variable}
                    ${greatVibes.variable}

                    min-h-screen

                    bg-[#fffaf7]

                    text-[#4d3d37]

                    antialiased
                `}
            >

                {children}

            </body>

        </html>

    );
}