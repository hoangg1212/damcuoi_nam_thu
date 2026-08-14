"use client";

import {
    useEffect,
    useState,
} from "react";


const links = [
    {
        href:
            "#home",

        label:
            "Trang chủ",
    },

    {
        href:
            "#couple",

        label:
            "Chúng mình",
    },

    {
        href:
            "#story",

        label:
            "Chuyện tình yêu",
    },

    {
        href:
            "#gallery",

        label:
            "Khoảnh khắc",
    },

    {
        href:
            "#event",

        label:
            "Ngày chung đôi",
    },

    {
        href:
            "#wishes",

        label:
            "Lời chúc",
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

        function update() {

            setScrolled(
                window.scrollY >
                60
            );

        }


        update();


        window.addEventListener(
            "scroll",
            update,
            {
                passive:
                    true,
            }
        );


        return () => {

            window.removeEventListener(
                "scroll",
                update
            );

        };

    }, []);


    return (
        <>

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
                            ? "border-b border-black/5 bg-[#f9f7f3]/90 text-[#292622] shadow-sm backdrop-blur-xl"
                            : "text-white"
                    }
                `}
            >

                <div
                    className="
                        mx-auto

                        flex
                        h-[74px]
                        max-w-[1240px]

                        items-center
                        justify-between

                        px-5

                        md:h-[88px]
                        md:px-8
                    "
                >

                    <a
                        href="#home"

                        className="
                            font-wedding

                            text-4xl
                        "
                    >
                        N

                        <span
                            className="
                                font-wedding-serif

                                mx-2

                                text-xs

                                text-[#b49a78]
                            "
                        >
                            ♥
                        </span>

                        T
                    </a>


                    {/* DESKTOP */}

                    <nav
                        className="
                            hidden

                            items-center
                            gap-8

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
                                        relative

                                        text-[9px]
                                        font-medium

                                        uppercase

                                        tracking-[0.18em]

                                        after:absolute
                                        after:-bottom-2
                                        after:left-0

                                        after:h-px
                                        after:w-0

                                        after:bg-current

                                        after:transition-all

                                        hover:after:w-full
                                    "
                                >
                                    {link.label}
                                </a>

                            )
                        )}

                    </nav>


                    {/* MOBILE */}

                    <button
                        type="button"

                        onClick={() =>
                            setMenuOpen(
                                true
                            )
                        }

                        aria-label="Mở menu"

                        className="
                            flex
                            h-10
                            w-10

                            flex-col
                            items-center
                            justify-center

                            gap-[6px]

                            lg:hidden
                        "
                    >

                        <span
                            className="
                                h-px
                                w-6

                                bg-current
                            "
                        />

                        <span
                            className="
                                h-px
                                w-6

                                bg-current
                            "
                        />

                        <span
                            className="
                                h-px
                                w-6

                                bg-current
                            "
                        />

                    </button>

                </div>

            </header>


            {/* MOBILE MENU */}

            <div
                className={`
                    fixed
                    inset-0

                    z-[500]

                    flex
                    items-center
                    justify-center

                    bg-[#f9f7f3]/98

                    backdrop-blur-xl

                    transition-all
                    duration-500

                    ${
                        menuOpen
                            ? "visible opacity-100"
                            : "pointer-events-none invisible opacity-0"
                    }
                `}
            >

                <button
                    type="button"

                    onClick={() =>
                        setMenuOpen(
                            false
                        )
                    }

                    className="
                        font-wedding-serif

                        absolute
                        right-7
                        top-5

                        text-5xl
                        font-light

                        text-[#292622]
                    "
                >
                    ×
                </button>


                <nav
                    className="
                        flex
                        flex-col

                        gap-6

                        text-center
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

                                onClick={() =>
                                    setMenuOpen(
                                        false
                                    )
                                }

                                className="
                                    font-wedding-serif

                                    text-4xl

                                    text-[#292622]

                                    transition-colors

                                    hover:text-[#8c7558]
                                "
                            >
                                {link.label}
                            </a>

                        )
                    )}

                </nav>

            </div>

        </>
    );
}