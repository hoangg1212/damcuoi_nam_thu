"use client";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


const links = [

    {
        href: "#home",
        label: "Trang chủ",
    },

    {
        href: "#couple",
        label: "Chúng mình",
    },

    {
        href: "#story",
        label: "Hành trình",
    },

    {
        href: "#gallery",
        label: "Khoảnh khắc",
    },

    {
        href: "#event",
        label: "Ngày chung đôi",
    },

    {
        href: "#wishes",
        label: "Lời chúc",
    },
];


export default function Header() {

    const [
        scrolled,
        setScrolled,
    ] =
        useState(false);


    const [
        menuOpen,
        setMenuOpen,
    ] =
        useState(false);


    /* =========================================================
       HANDLE SCROLL
    ========================================================= */

    useEffect(() => {

        const updateScroll =
            () => {

                setScrolled(
                    window.scrollY > 40
                );

            };


        const frame =
            requestAnimationFrame(
                updateScroll
            );


        window.addEventListener(
            "scroll",
            updateScroll,
            {
                passive: true,
            }
        );


        return () => {

            cancelAnimationFrame(
                frame
            );


            window.removeEventListener(
                "scroll",
                updateScroll
            );

        };

    }, []);


    /* =========================================================
       LOCK BODY WHEN MOBILE MENU OPEN
    ========================================================= */

    useEffect(() => {

        if (
            !menuOpen
        ) {

            return;

        }


        document
            .body
            .style
            .overflow =
            "hidden";


        return () => {

            document
                .body
                .style
                .overflow =
                "";

        };

    }, [menuOpen]);


    return (

        <>

            {/* =================================================
                HEADER
            ================================================= */}

            <header
                className={`
                    fixed
                    left-0
                    top-0

                    z-[100]

                    w-full

                    transition-all
                    duration-500

                    ${
                        scrolled

                            ? `
                                border-b
                                border-[#7A9CAC]/12

                                bg-[#F8F7EE]/90

                                text-[#31566B]

                                shadow-[0_10px_35px_rgba(49,86,107,0.06)]

                                backdrop-blur-xl
                              `

                            : `
                                bg-gradient-to-b

                                from-[#163846]/25
                                via-[#163846]/8
                                to-transparent

                                text-white
                              `
                    }
                `}
            >


                {/* =================================================
                    TOP CHAMPAGNE LINE
                ================================================= */}

                <div
                    className={`
                        absolute
                        left-0
                        top-0

                        h-px
                        w-full

                        transition-opacity
                        duration-500

                        ${
                            scrolled
                                ? "opacity-100"
                                : "opacity-55"
                        }
                    `}
                >

                    <div
                        className="
                            mx-auto

                            h-full
                            w-[70%]

                            bg-gradient-to-r

                            from-transparent
                            via-[#B8A27D]/55
                            to-transparent
                        "
                    />

                </div>


                {/* =================================================
                    HEADER INNER
                ================================================= */}

                <div
                    className="
                        mx-auto

                        flex

                        h-[76px]
                        max-w-[1320px]

                        items-center
                        justify-between

                        px-5

                        sm:px-6

                        md:h-[88px]
                        md:px-8
                    "
                >


                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <a
                        href="#home"

                        aria-label={`${wedding.groom.shortName} và ${wedding.bride.shortName}`}

                        className="
                            group

                            relative

                            flex

                            items-center

                            gap-2

                            transition-transform
                            duration-300

                            hover:scale-[1.02]
                        "
                    >


                        {/* GROOM NAME */}

                        <span
                            className="
                                font-wedding

                                text-[36px]

                                leading-none

                                sm:text-[40px]

                                md:text-[46px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        {/* =================================================
                            HEART
                        ================================================= */}

                        <span
                            className={`
                                relative

                                flex

                                h-7
                                w-7

                                items-center
                                justify-center

                                rounded-full

                                border

                                font-wedding-serif

                                text-[8px]

                                transition-all
                                duration-500

                                ${
                                    scrolled

                                        ? `
                                            border-[#C98792]/25

                                            bg-[#FFFDF8]/65

                                            text-[#C98792]

                                            shadow-[0_5px_16px_rgba(49,86,107,0.06)]
                                          `

                                        : `
                                            border-white/30

                                            bg-white/10

                                            text-[#F2C6CD]

                                            backdrop-blur-md
                                          `
                                }
                            `}
                        >

                            <span
                                className="
                                    absolute
                                    inset-[3px]

                                    rounded-full

                                    border
                                    border-[#B8A27D]/15
                                "
                            />

                            <span
                                className="
                                    relative
                                    z-10
                                "
                            >
                                ♥
                            </span>

                        </span>


                        {/* BRIDE NAME */}

                        <span
                            className="
                                font-wedding

                                text-[36px]

                                leading-none

                                sm:text-[40px]

                                md:text-[46px]
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </a>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav
                        className="
                            hidden

                            items-center

                            gap-6

                            lg:flex

                            xl:gap-8
                        "
                    >

                        {links.map(
                            (
                                link
                            ) => (

                                <a
                                    key={
                                        link.href
                                    }

                                    href={
                                        link.href
                                    }

                                    className="
                                        group

                                        relative

                                        py-3

                                        text-[10px]
                                        font-medium

                                        uppercase

                                        tracking-[0.16em]

                                        opacity-90

                                        transition-all
                                        duration-300

                                        hover:opacity-100

                                        xl:text-[11px]
                                    "
                                >

                                    {
                                        link.label
                                    }


                                    {/* UNDERLINE */}

                                    <span
                                        className="
                                            absolute

                                            -bottom-0.5
                                            left-1/2

                                            h-px
                                            w-0

                                            -translate-x-1/2

                                            bg-current

                                            opacity-45

                                            transition-all
                                            duration-300

                                            group-hover:w-full
                                        "
                                    />


                                    {/* SMALL ROSE DOT */}

                                    <span
                                        className="
                                            absolute

                                            -bottom-[4px]
                                            left-1/2

                                            h-[3px]
                                            w-[3px]

                                            -translate-x-1/2
                                            scale-0

                                            rounded-full

                                            bg-[#C98792]

                                            opacity-0

                                            transition-all
                                            duration-300

                                            group-hover:scale-100
                                            group-hover:opacity-100
                                        "
                                    />

                                </a>

                            )
                        )}

                    </nav>


                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================= */}

                    <button
                        type="button"

                        onClick={
                            () =>
                                setMenuOpen(
                                    true
                                )
                        }

                        aria-label="Mở menu"

                        className={`
                            group

                            flex

                            h-11
                            w-11

                            flex-col

                            items-center
                            justify-center

                            gap-[5px]

                            rounded-full

                            border

                            transition-all
                            duration-300

                            lg:hidden

                            ${
                                scrolled

                                    ? `
                                        border-[#7A9CAC]/20

                                        bg-[#FFFDF8]/50

                                        text-[#31566B]

                                        shadow-[0_6px_20px_rgba(49,86,107,0.05)]
                                      `

                                    : `
                                        border-white/30

                                        bg-white/10

                                        text-white

                                        backdrop-blur-md
                                      `
                            }
                        `}
                    >

                        <span
                            className="
                                h-px
                                w-[19px]

                                bg-current
                            "
                        />


                        <span
                            className="
                                h-px
                                w-[14px]

                                bg-current

                                transition-all
                                duration-300

                                group-hover:w-[19px]
                            "
                        />


                        <span
                            className="
                                h-px
                                w-[19px]

                                bg-current
                            "
                        />

                    </button>

                </div>

            </header>


            {/* =================================================
                MOBILE MENU
            ================================================= */}

            <div
                className={`
                    fixed
                    inset-0

                    z-[500]

                    overflow-hidden

                    transition-all
                    duration-500

                    ${
                        menuOpen

                            ? `
                                visible
                                opacity-100
                              `

                            : `
                                pointer-events-none
                                invisible
                                opacity-0
                              `
                    }
                `}
            >


                {/* =================================================
                    BACKGROUND
                ================================================= */}

                <div
                    className="
                        absolute
                        inset-0

                        bg-[linear-gradient(to_bottom,#F8F7EC_0%,#F3F5EF_48%,#EAF2F5_100%)]
                    "
                />


                {/* =================================================
                    BLUE GLOW
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        -left-28
                        top-10

                        h-[340px]
                        w-[340px]

                        rounded-full

                        bg-[#8FB4C7]/20

                        blur-[105px]
                    "
                />


                {/* =================================================
                    PINK GLOW
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        -bottom-24
                        -right-24

                        h-[370px]
                        w-[370px]

                        rounded-full

                        bg-[#D9A5AE]/18

                        blur-[115px]
                    "
                />


                {/* =================================================
                    CENTER CREAM LIGHT
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-1/2

                        h-[400px]
                        w-[75%]

                        -translate-x-1/2
                        -translate-y-1/2

                        rounded-full

                        bg-[#FFFDF8]/35

                        blur-[110px]
                    "
                />


                {/* =================================================
                    TOP DECORATION
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-7

                        flex

                        -translate-x-1/2

                        items-center
                        justify-center

                        gap-3
                    "
                >

                    <span
                        className="
                            h-px
                            w-9

                            bg-gradient-to-r

                            from-transparent
                            to-[#B8A27D]/40
                        "
                    />


                    <span
                        className="
                            text-[7px]

                            text-[#C98792]/75
                        "
                    >
                        ♥
                    </span>


                    <span
                        className="
                            h-px
                            w-9

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/40
                        "
                    />

                </div>


                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}

                <button
                    type="button"

                    onClick={
                        () =>
                            setMenuOpen(
                                false
                            )
                    }

                    aria-label="Đóng menu"

                    className="
                        absolute

                        right-5
                        top-5

                        z-20

                        flex

                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#7A9CAC]/18

                        bg-[#FFFDF8]/55

                        font-wedding-serif

                        text-[30px]
                        font-light

                        leading-none

                        text-[#31566B]

                        shadow-[0_8px_24px_rgba(49,86,107,0.06)]

                        backdrop-blur-lg

                        transition-all
                        duration-300

                        hover:bg-white
                    "
                >
                    ×
                </button>


                {/* =================================================
                    MOBILE MENU CONTENT
                ================================================= */}

                <div
                    className="
                        relative
                        z-10

                        flex
                        min-h-[100svh]

                        flex-col

                        items-center
                        justify-center

                        px-6

                        text-center
                    "
                >


                    {/* =================================================
                        EYEBROW
                    ================================================= */}

                    <p
                        className="
                            mb-3

                            text-[9px]
                            font-medium

                            uppercase

                            tracking-[0.38em]

                            text-[#C98792]
                        "
                    >
                        Ngày chung đôi
                    </p>


                    {/* =================================================
                        COUPLE NAMES
                    ================================================= */}

                    <div
                        className="
                            flex

                            items-center
                            justify-center

                            gap-3

                            text-[#31566B]
                        "
                    >

                        <span
                            className="
                                font-wedding

                                text-[48px]

                                leading-none
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        <span
                            className="
                                text-[8px]

                                text-[#C98792]
                            "
                        >
                            ♥
                        </span>


                        <span
                            className="
                                font-wedding

                                text-[48px]

                                leading-none
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </div>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div
                        className="
                            my-6

                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-12

                                bg-gradient-to-r

                                from-transparent
                                to-[#7A9CAC]/30
                            "
                        />


                        <span
                            className="
                                text-[7px]

                                text-[#B8A27D]
                            "
                        >
                            ✦
                        </span>


                        <span
                            className="
                                h-px
                                w-12

                                bg-gradient-to-l

                                from-transparent
                                to-[#7A9CAC]/30
                            "
                        />

                    </div>


                    {/* =================================================
                        MOBILE LINKS
                    ================================================= */}

                    <nav
                        className="
                            flex
                            flex-col

                            gap-5
                        "
                    >

                        {links.map(
                            (
                                link,
                                index
                            ) => (

                                <a
                                    key={
                                        link.href
                                    }

                                    href={
                                        link.href
                                    }

                                    onClick={
                                        () =>
                                            setMenuOpen(
                                                false
                                            )
                                    }

                                    className="
                                        group

                                        flex

                                        items-center
                                        justify-center

                                        gap-3

                                        font-wedding-serif

                                        text-[27px]
                                        font-light

                                        text-[#31566B]

                                        transition-all
                                        duration-300

                                        hover:translate-x-1

                                        hover:text-[#587589]

                                        sm:text-3xl
                                    "
                                >

                                    {/* NUMBER */}

                                    <span
                                        className="
                                            text-[7px]
                                            font-medium

                                            tracking-[0.1em]

                                            text-[#C98792]/50

                                            transition-opacity

                                            group-hover:opacity-100
                                        "
                                    >
                                        {String(
                                            index + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>


                                    {
                                        link.label
                                    }

                                </a>

                            )
                        )}

                    </nav>


                    {/* =================================================
                        DATE
                    ================================================= */}

                    <div
                        className="
                            mt-9

                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-8

                                bg-gradient-to-r

                                from-transparent
                                to-[#B8A27D]/35
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[10px]
                                font-medium

                                tracking-[0.2em]

                                text-[#587589]/75
                            "
                        >
                            {
                                wedding
                                    .displayDate
                            }
                        </p>


                        <span
                            className="
                                h-px
                                w-8

                                bg-gradient-to-l

                                from-transparent
                                to-[#B8A27D]/35
                            "
                        />

                    </div>

                </div>

            </div>

        </>

    );
}