"use client";

/* =========================================================
   HEADER
========================================================= */

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


/* =========================================================
   NAVIGATION
========================================================= */

const links = [

    {
        href: "#home",
        id: "home",
        label: "Trang chủ",
    },

    {
        href: "#couple",
        id: "couple",
        label: "Chúng mình",
    },

    {
        href: "#event",
        id: "event",
        label: "Ngày chung đôi",
    },

    {
        href: "#story",
        id: "story",
        label: "Hành trình",
    },

    {
        href: "#gallery",
        id: "gallery",
        label: "Khoảnh khắc",
    },

    {
        href: "#wishes",
        id: "wishes",
        label: "Lời chúc",
    },

];


/* =========================================================
   HEADER
========================================================= */

export default function Header() {

    const [
        scrolled,
        setScrolled,
    ] = useState(false);


    const [
        menuOpen,
        setMenuOpen,
    ] = useState(false);


    const [
        activeSection,
        setActiveSection,
    ] = useState("home");


    /* =========================================================
       HANDLE SCROLL
    ========================================================= */

    useEffect(() => {

        const updateScroll = () => {

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
       ACTIVE SECTION
    ========================================================= */

    useEffect(() => {

        const sections =
            links
                .map(
                    (link) =>
                        document.getElementById(
                            link.id
                        )
                )
                .filter(
                    (
                        section
                    ): section is HTMLElement =>
                        section !== null
                );


        if (
            sections.length === 0
        ) {

            return;

        }


        const observer =
            new IntersectionObserver(

                (entries) => {

                    const visible =
                        entries
                            .filter(
                                (entry) =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (
                                    a,
                                    b
                                ) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );


                    if (
                        visible.length > 0
                    ) {

                        setActiveSection(
                            visible[0]
                                .target
                                .id
                        );

                    }

                },

                {
                    root: null,

                    rootMargin:
                        "-28% 0px -58% 0px",

                    threshold: [
                        0,
                        0.1,
                        0.25,
                        0.5,
                    ],
                }

            );


        sections.forEach(
            (section) =>
                observer.observe(
                    section
                )
        );


        return () => {

            observer.disconnect();

        };

    }, []);


    /* =========================================================
       LOCK BODY WHEN MENU OPEN
    ========================================================= */

    useEffect(() => {

        if (
            !menuOpen
        ) {

            return;

        }


        const previousOverflow =
            document
                .body
                .style
                .overflow;


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
                previousOverflow;

        };

    }, [menuOpen]);


    /* =========================================================
       ESC CLOSE MENU
    ========================================================= */

    useEffect(() => {

        if (
            !menuOpen
        ) {

            return;

        }


        const handleKeyDown =
            (
                event: KeyboardEvent
            ) => {

                if (
                    event.key === "Escape"
                ) {

                    setMenuOpen(
                        false
                    );

                }

            };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [menuOpen]);


    /* =========================================================
       SCROLL TO SECTION
    ========================================================= */

    function handleLinkClick(
        sectionId: string
    ) {

        setMenuOpen(
            false
        );


        setActiveSection(
            sectionId
        );

    }


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
                                border-[#7A9CAC]/10

                                bg-[#F8F7EE]/92

                                text-[#31566B]

                                shadow-[0_8px_30px_rgba(49,86,107,0.055)]

                                backdrop-blur-xl
                              `

                            : `
                                bg-gradient-to-b

                                from-[#183B4A]/28
                                via-[#183B4A]/10
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
                        pointer-events-none

                        absolute

                        left-1/2
                        top-0

                        h-px

                        -translate-x-1/2

                        transition-all
                        duration-500

                        ${
                            scrolled

                                ? `
                                    w-[72%]
                                    opacity-100
                                  `

                                : `
                                    w-[58%]
                                    opacity-50
                                  `
                        }
                    `}
                >

                    <div
                        className="
                            h-full
                            w-full

                            bg-gradient-to-r

                            from-transparent

                            via-[#B8A27D]/60

                            to-transparent
                        "
                    />

                </div>


                {/* =================================================
                    INNER
                ================================================= */}

                <div
                    className="
                        mx-auto

                        flex

                        h-[70px]
                        max-w-[1320px]

                        items-center
                        justify-between

                        px-4

                        sm:h-[74px]
                        sm:px-6

                        md:h-[82px]
                        md:px-8
                    "
                >


                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <a
                        href="#home"

                        onClick={
                            () =>
                                setActiveSection(
                                    "home"
                                )
                        }

                        aria-label={`${wedding.groom.shortName} và ${wedding.bride.shortName}`}

                        className="
                            group

                            relative

                            flex

                            items-center
                            justify-center

                            gap-2

                            transition-transform
                            duration-300

                            hover:scale-[1.015]
                        "
                    >


                        {/* GROOM */}

                        <span
                            className="
                                font-wedding

                                text-[34px]

                                leading-none

                                sm:text-[38px]

                                md:text-[44px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        {/* HEART */}

                        <span
                            className={`
                                relative

                                flex

                                h-[27px]
                                w-[27px]

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

                                            bg-[#FFFDF8]/75

                                            text-[#C98792]

                                            shadow-[0_5px_16px_rgba(49,86,107,0.055)]
                                          `

                                        : `
                                            border-white/30

                                            bg-white/10

                                            text-[#F4CCD2]

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
                                    border-[#B8A27D]/17
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


                        {/* BRIDE */}

                        <span
                            className="
                                font-wedding

                                text-[34px]

                                leading-none

                                sm:text-[38px]

                                md:text-[44px]
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

                            gap-5

                            lg:flex

                            xl:gap-7
                        "
                    >

                        {
                            links.map(
                                (
                                    link
                                ) => {

                                    const active =
                                        activeSection ===
                                        link.id;


                                    return (

                                        <a
                                            key={
                                                link.href
                                            }

                                            href={
                                                link.href
                                            }

                                            onClick={
                                                () =>
                                                    handleLinkClick(
                                                        link.id
                                                    )
                                            }

                                            className={`
                                                group

                                                relative

                                                flex

                                                items-center
                                                justify-center

                                                py-3

                                                text-[10px]
                                                font-medium

                                                uppercase

                                                tracking-[0.14em]

                                                transition-all
                                                duration-300

                                                xl:text-[11px]

                                                ${
                                                    active

                                                        ? `
                                                            opacity-100
                                                          `

                                                        : `
                                                            opacity-75

                                                            hover:opacity-100
                                                          `
                                                }
                                            `}
                                        >

                                            {
                                                link.label
                                            }


                                            {/* ACTIVE LINE */}

                                            <span
                                                className={`
                                                    absolute

                                                    bottom-[4px]
                                                    left-1/2

                                                    h-px

                                                    -translate-x-1/2

                                                    bg-[#B8A27D]

                                                    transition-all
                                                    duration-300

                                                    ${
                                                        active

                                                            ? `
                                                                w-6
                                                                opacity-80
                                                              `

                                                            : `
                                                                w-0
                                                                opacity-0

                                                                group-hover:w-4
                                                                group-hover:opacity-50
                                                              `
                                                    }
                                                `}
                                            />


                                            {/* ACTIVE DOT */}

                                            <span
                                                className={`
                                                    absolute

                                                    -bottom-[1px]
                                                    left-1/2

                                                    h-[3px]
                                                    w-[3px]

                                                    -translate-x-1/2

                                                    rounded-full

                                                    bg-[#C98792]

                                                    transition-all
                                                    duration-300

                                                    ${
                                                        active

                                                            ? `
                                                                scale-100
                                                                opacity-100
                                                              `

                                                            : `
                                                                scale-0
                                                                opacity-0
                                                              `
                                                    }
                                                `}
                                            />

                                        </a>

                                    );

                                }
                            )
                        }

                    </nav>


                    {/* =================================================
                        MOBILE BUTTON
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

                        aria-expanded={
                            menuOpen
                        }

                        className={`
                            group

                            flex

                            h-10
                            w-10

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

                                        bg-[#FFFDF8]/60

                                        text-[#31566B]

                                        shadow-[0_6px_18px_rgba(49,86,107,0.05)]
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
                                w-[18px]

                                bg-current

                                transition-all
                                duration-300
                            "
                        />


                        <span
                            className="
                                h-px
                                w-[13px]

                                bg-current

                                transition-all
                                duration-300

                                group-hover:w-[18px]
                            "
                        />


                        <span
                            className="
                                h-px
                                w-[18px]

                                bg-current

                                transition-all
                                duration-300
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
                        top-14

                        h-[330px]
                        w-[330px]

                        rounded-full

                        bg-[#8FB4C7]/18

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

                        h-[350px]
                        w-[350px]

                        rounded-full

                        bg-[#D9A5AE]/16

                        blur-[115px]
                    "
                />


                {/* =================================================
                    CENTER LIGHT
                ================================================= */}

                <div
                    className="
                        pointer-events-none

                        absolute

                        left-1/2
                        top-1/2

                        h-[380px]
                        w-[78%]

                        -translate-x-1/2
                        -translate-y-1/2

                        rounded-full

                        bg-[#FFFDF8]/38

                        blur-[110px]
                    "
                />


                {/* =================================================
                    CLOSE
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

                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#7A9CAC]/18

                        bg-[#FFFDF8]/65

                        font-wedding-serif

                        text-[27px]
                        font-light

                        leading-none

                        text-[#31566B]

                        shadow-[0_8px_24px_rgba(49,86,107,0.055)]

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:bg-[#FFFDF8]
                    "
                >
                    ×
                </button>


                {/* =================================================
                    CONTENT
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
                        py-12

                        text-center
                    "
                >


                    {/* =================================================
                        SMALL TITLE
                    ================================================= */}

                    <p
                        className="
                            mb-2

                            text-[9px]
                            font-medium

                            uppercase

                            tracking-[0.34em]

                            text-[#C98792]
                        "
                    >
                        Ngày chung đôi
                    </p>


                    {/* =================================================
                        COUPLE
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

                                text-[47px]

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

                                text-[47px]

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
                        DATE
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-2

                            text-[11px]
                            font-medium

                            tracking-[0.18em]

                            text-[#587589]/75
                        "
                    >
                        {
                            wedding
                                .displayDate
                        }
                    </p>


                    {/* =================================================
                        MOBILE LINKS
                    ================================================= */}

                    <nav
                        className="
                            mt-8

                            flex

                            flex-col

                            gap-4
                        "
                    >

                        {
                            links.map(
                                (
                                    link,
                                    index
                                ) => {

                                    const active =
                                        activeSection ===
                                        link.id;


                                    return (

                                        <a
                                            key={
                                                link.href
                                            }

                                            href={
                                                link.href
                                            }

                                            onClick={
                                                () =>
                                                    handleLinkClick(
                                                        link.id
                                                    )
                                            }

                                            className={`
                                                group

                                                flex

                                                items-center
                                                justify-center

                                                gap-3

                                                font-wedding-serif

                                                text-[25px]
                                                font-light

                                                transition-all
                                                duration-300

                                                sm:text-[28px]

                                                ${
                                                    active

                                                        ? `
                                                            text-[#C98792]
                                                          `

                                                        : `
                                                            text-[#31566B]

                                                            hover:text-[#587589]
                                                          `
                                                }
                                            `}
                                        >

                                            <span
                                                className={`
                                                    text-[7px]
                                                    font-medium

                                                    tracking-[0.1em]

                                                    transition-all
                                                    duration-300

                                                    ${
                                                        active

                                                            ? `
                                                                text-[#C98792]
                                                                opacity-100
                                                              `

                                                            : `
                                                                text-[#B8A27D]/60
                                                                opacity-65
                                                              `
                                                    }
                                                `}
                                            >
                                                {
                                                    String(
                                                        index + 1
                                                    )
                                                        .padStart(
                                                            2,
                                                            "0"
                                                        )
                                                }
                                            </span>


                                            <span>
                                                {
                                                    link.label
                                                }
                                            </span>


                                            {active && (

                                                <span
                                                    className="
                                                        text-[6px]

                                                        text-[#C98792]
                                                    "
                                                >
                                                    ♥
                                                </span>

                                            )}

                                        </a>

                                    );

                                }
                            )
                        }

                    </nav>


                    {/* =================================================
                        BOTTOM TEXT
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-8

                            text-[13px]
                            font-normal

                            italic

                            tracking-[0.03em]

                            text-[#61726D]/75
                        "
                    >
                        cùng nhau, từ hôm nay về sau
                    </p>

                </div>

            </div>

        </>

    );
}