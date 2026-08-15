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
        label: "Chuyện tình yêu",
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


    useEffect(() => {

        const updateScroll =
            () => {

                setScrolled(
                    window.scrollY > 40
                );

            };


        /*
            Chạy sau khi browser đã render
            để tránh setState trực tiếp
            trong effect.
        */

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


    useEffect(() => {

        if (!menuOpen) {
            return;
        }


        document.body.style.overflow =
            "hidden";


        return () => {

            document.body.style.overflow =
                "";

        };

    }, [menuOpen]);


    return (

        <>

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

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
                                border-[#b89975]/15

                                bg-[#fbf7f2]/90

                                text-[#443630]

                                shadow-[0_10px_35px_rgba(83,59,47,0.06)]

                                backdrop-blur-xl
                              `
                            : `
                                bg-gradient-to-b

                                from-black/30
                                via-black/10
                                to-transparent

                                text-white
                              `
                    }
                `}
            >


                {/* GOLD TOP LINE */}

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
                                : "opacity-50"
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
                            via-[#c9a77f]/60
                            to-transparent
                        "
                    />
                </div>


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


                    {/* ================================================= */}
                    {/* LOGO */}
                    {/* ================================================= */}

                    <a
                        href="#home"

                        aria-label="Nam và Thư"

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


                        <span
                            className="
                                font-wedding

                                text-[36px]

                                leading-none

                                sm:text-[40px]

                                md:text-[46px]
                            "
                        >
                            Nam
                        </span>


                        {/* HEART */}

                        <span
                            className={`
                                flex

                                h-7
                                w-7

                                items-center
                                justify-center

                                rounded-full

                                border

                                font-wedding-serif

                                text-[9px]

                                transition-all
                                duration-500

                                ${
                                    scrolled
                                        ? `
                                            border-[#b99372]/30
                                            bg-[#b99372]/5
                                            text-[#b17b69]
                                          `
                                        : `
                                            border-white/30
                                            bg-white/10
                                            text-[#f1d6c2]

                                            backdrop-blur-md
                                          `
                                }
                            `}
                        >
                            ♥
                        </span>


                        <span
                            className="
                                font-wedding

                                text-[36px]

                                leading-none

                                sm:text-[40px]

                                md:text-[46px]
                            "
                        >
                            Thư
                        </span>

                    </a>


                    {/* ================================================= */}
                    {/* DESKTOP NAVIGATION */}
                    {/* ================================================= */}

                    <nav
                        className="
                            hidden

                            items-center

                            gap-6

                            xl:gap-8

                            lg:flex
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

                                        text-[11px]
                                        font-medium

                                        uppercase

                                        tracking-[0.14em]

                                        opacity-90

                                        transition-all
                                        duration-300

                                        hover:opacity-100

                                        xl:text-[12px]
                                    "
                                >

                                    {link.label}


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

                                            opacity-60

                                            transition-all
                                            duration-300

                                            group-hover:w-full
                                        "
                                    />


                                    {/* SMALL DOT */}

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

                                            bg-[#c99b88]

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


                    {/* ================================================= */}
                    {/* MOBILE MENU BUTTON */}
                    {/* ================================================= */}

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
                                        border-[#9f7c66]/20
                                        bg-[#9f7c66]/5
                                      `
                                    : `
                                        border-white/30
                                        bg-black/10

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


            {/* ================================================= */}
            {/* MOBILE MENU */}
            {/* ================================================= */}

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


                {/* BACKGROUND */}

                <div
                    className="
                        absolute
                        inset-0

                        bg-gradient-to-br

                        from-[#fffaf6]
                        via-[#f8ebe5]
                        to-[#ead7cf]
                    "
                />


                {/* GLOW LEFT */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        -left-28
                        top-10

                        h-[320px]
                        w-[320px]

                        rounded-full

                        bg-[#e3b9ac]/25

                        blur-[100px]
                    "
                />


                {/* GLOW RIGHT */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        -bottom-24
                        -right-24

                        h-[350px]
                        w-[350px]

                        rounded-full

                        bg-[#dabf9f]/30

                        blur-[110px]
                    "
                />


                {/* DECORATION TOP */}

                <div
                    className="
                        pointer-events-none

                        absolute
                        left-1/2
                        top-7

                        flex

                        -translate-x-1/2

                        items-center

                        gap-3
                    "
                >

                    <span
                        className="
                            h-px
                            w-8

                            bg-gradient-to-r

                            from-transparent
                            to-[#a87f69]/30
                        "
                    />

                    <span
                        className="
                            text-[7px]

                            text-[#a87f69]/50
                        "
                    >
                        ♥
                    </span>

                    <span
                        className="
                            h-px
                            w-8

                            bg-gradient-to-l

                            from-transparent
                            to-[#a87f69]/30
                        "
                    />

                </div>


                {/* CLOSE BUTTON */}

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
                        border-[#9d7964]/15

                        bg-white/35

                        font-wedding-serif

                        text-[30px]
                        font-light

                        leading-none

                        text-[#624d43]

                        backdrop-blur-lg

                        transition-all

                        hover:bg-white/60
                    "
                >
                    ×
                </button>


                {/* CONTENT */}

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


                    {/* SMALL HEADING */}

                    <p
                        className="
                            mb-3

                            text-[8px]

                            uppercase

                            tracking-[0.35em]

                            text-[#8b7066]/55
                        "
                    >
                        The Wedding Of
                    </p>


                    {/* NAME */}

                    <div
                        className="
                            flex

                            items-center
                            justify-center

                            gap-3

                            text-[#5d463e]
                        "
                    >

                        <span
                            className="
                                font-wedding

                                text-[47px]
                            "
                        >
                            Nam
                        </span>


                        <span
                            className="
                                text-[9px]

                                text-[#b77969]
                            "
                        >
                            ♥
                        </span>


                        <span
                            className="
                                font-wedding

                                text-[47px]
                            "
                        >
                            Thư
                        </span>

                    </div>


                    {/* DIVIDER */}

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

                                bg-[#9d7565]/20
                            "
                        />

                        <span
                            className="
                                text-[7px]

                                text-[#b77c6c]
                            "
                        >
                            ✦
                        </span>

                        <span
                            className="
                                h-px
                                w-12

                                bg-[#9d7565]/20
                            "
                        />

                    </div>


                    {/* LINKS */}

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

                                        text-[#51423c]

                                        transition-all
                                        duration-300

                                        hover:translate-x-1

                                        hover:text-[#ad7465]

                                        sm:text-3xl
                                    "
                                >

                                    <span
                                        className="
                                            text-[7px]

                                            text-[#bb8677]/40

                                            transition-opacity

                                            group-hover:opacity-100
                                        "
                                    >
                                        0{index + 1}
                                    </span>


                                    {link.label}

                                </a>

                            )
                        )}

                    </nav>


                    {/* DATE */}

                    <div
                        className="
                            mt-8

                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-7

                                bg-[#9d7565]/20
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[10px]

                                tracking-[0.18em]

                                text-[#8a6b60]/55
                            "
                        >
                            {wedding.displayDate}
                        </p>


                        <span
                            className="
                                h-px
                                w-7

                                bg-[#9d7565]/20
                            "
                        />

                    </div>

                </div>

            </div>

        </>

    );
}