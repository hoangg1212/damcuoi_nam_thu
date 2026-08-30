"use client";

import Image from "next/image";

import { wedding } from "@/data/wedding";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


/* =========================================================
   RING DECORATION
========================================================= */

function RingDecoration() {

    return (

        <div
            className="
                mx-auto

                flex

                w-full
                max-w-[420px]

                items-center
                justify-center
            "
            aria-hidden="true"
        >

            <svg
                viewBox="0 0 500 100"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="
                    h-[56px]
                    w-full

                    overflow-visible

                    sm:h-[62px]

                    md:h-[70px]

                    lg:h-[74px]
                "
            >


                {/* =================================================
                    LEFT DECORATIVE LINE
                ================================================= */}

                <path
                    d="
                        M0 64
                        C34 51 60 76 92 64
                        C116 55 128 68 150 62
                        C165 58 177 57 190 61
                    "

                    stroke="#B89A70"

                    strokeWidth="1.1"

                    strokeLinecap="round"

                    opacity="0.48"
                />


                {/* =================================================
                    RIGHT DECORATIVE LINE
                ================================================= */}

                <path
                    d="
                        M310 61
                        C323 57 335 58 350 62
                        C372 68 384 55 408 64
                        C440 76 466 51 500 64
                    "

                    stroke="#B89A70"

                    strokeWidth="1.1"

                    strokeLinecap="round"

                    opacity="0.48"
                />


                {/* =================================================
                    LEFT RING
                ================================================= */}

                <ellipse
                    cx="220"
                    cy="49"

                    rx="47"
                    ry="24"

                    transform="rotate(-12 220 49)"

                    stroke="#B89A70"

                    strokeWidth="1.55"
                />


                <ellipse
                    cx="220"
                    cy="49"

                    rx="38"
                    ry="17"

                    transform="rotate(-12 220 49)"

                    stroke="#B89A70"

                    strokeWidth="0.9"

                    opacity="0.55"
                />


                {/* =================================================
                    RIGHT RING
                ================================================= */}

                <ellipse
                    cx="280"
                    cy="49"

                    rx="47"
                    ry="24"

                    transform="rotate(12 280 49)"

                    stroke="#B89A70"

                    strokeWidth="1.55"
                />


                <ellipse
                    cx="280"
                    cy="49"

                    rx="38"
                    ry="17"

                    transform="rotate(12 280 49)"

                    stroke="#B89A70"

                    strokeWidth="0.9"

                    opacity="0.55"
                />


                {/* =================================================
                    SMALL DETAILS
                ================================================= */}

                <circle
                    cx="250"
                    cy="24"

                    r="2"

                    fill="#B97882"

                    opacity="0.65"
                />


                <circle
                    cx="250"
                    cy="75"

                    r="1.4"

                    fill="#B89A70"

                    opacity="0.55"
                />

            </svg>

        </div>

    );
}


/* =========================================================
   HERO
========================================================= */

export default function Hero() {

    const {
        invitationOpened,
    } =
        useWedding();


    const hero =
        wedding.heroSection;


    return (

        <section
            id="home"

            className="
                relative

                min-h-[100svh]

                overflow-hidden

                bg-[#F3F4E8]
            "
        >


            {/* =================================================
                MOBILE BACKGROUND
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    md:hidden
                "
            >

                <Image
                    src={
                        hero.mobileBackground
                    }

                    alt={
                        hero.backgroundAlt
                    }

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* =================================================
                DESKTOP BACKGROUND
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    hidden

                    md:block
                "
            >

                <Image
                    src={
                        hero.desktopBackground
                    }

                    alt={
                        hero.backgroundAlt
                    }

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* =================================================
                SOFT COLOR OVERLAY
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[linear-gradient(to_bottom,rgba(255,253,248,0.16)_0%,rgba(255,253,248,0.02)_42%,rgba(220,229,216,0.24)_100%)]
                "
            />


            {/* =================================================
                CENTER IVORY LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[48%]

                    h-[540px]
                    w-[96%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#FFFDF8]/54

                    blur-[90px]

                    sm:w-[82%]

                    md:h-[620px]
                    md:w-[58%]

                    lg:h-[670px]
                    lg:w-[49%]

                    xl:w-[43%]
                "
            />


            {/* =================================================
                CENTER WHITE MIST
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[50%]

                    h-[72%]
                    w-[86%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-[50%]

                    bg-white/10

                    blur-[65px]

                    md:w-[50%]
                "
            />


            {/* =================================================
                BLUE SIDE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-36
                    top-[24%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#8FB4C7]/10

                    blur-[120px]

                    md:h-[460px]
                    md:w-[460px]
                "
            />


            {/* =================================================
                ROSE SIDE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-36
                    bottom-[12%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#D9A5AE]/11

                    blur-[125px]

                    md:h-[460px]
                    md:w-[460px]
                "
            />


            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    flex

                    min-h-[100svh]

                    w-full
                    max-w-[1440px]

                    items-center
                    justify-center

                    px-5

                    pb-12
                    pt-20

                    text-center

                    transition-all
                    duration-1000

                    sm:px-6
                    sm:pb-14

                    md:px-8
                    md:pb-16
                    md:pt-24

                    ${
                        invitationOpened
                            ? `
                                translate-y-0
                                opacity-100
                              `
                            : `
                                translate-y-8
                                opacity-0
                              `
                    }
                `}
            >


                {/* =================================================
                    CENTER CONTENT
                ================================================= */}

                <div
                    className="
                        mx-auto

                        w-full
                        max-w-[590px]

                        sm:max-w-[640px]

                        md:max-w-[690px]

                        lg:max-w-[740px]
                    "
                >


                    {/* =================================================
                        EYEBROW
                    ================================================= */}

                    <div
                        className="
                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-6

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-9

                                md:w-11
                            "
                        />


                        <span
                            className="
                                h-[3px]
                                w-[3px]

                                rounded-full

                                bg-[#B97882]/70
                            "
                        />


                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.25em]

                                text-[#607568]

                                sm:text-[10px]
                                sm:tracking-[0.30em]

                                md:text-[11px]
                                md:tracking-[0.34em]
                            "
                        >
                            {
                                hero.eyebrow
                            }
                        </p>


                        <span
                            className="
                                h-[3px]
                                w-[3px]

                                rounded-full

                                bg-[#B97882]/70
                            "
                        />


                        <span
                            className="
                                h-px
                                w-6

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-9

                                md:w-11
                            "
                        />

                    </div>


                    {/* =================================================
                        RING DECORATION
                    ================================================= */}

                    <div
                        className="
                            mt-3

                            sm:mt-4

                            md:mt-5
                        "
                    >

                        <RingDecoration />

                    </div>


                    {/* =================================================
                        COUPLE NAMES
                    ================================================= */}

                    <h1
                        className="
                            font-wedding

                            -mt-1

                            flex
                            flex-wrap

                            items-center
                            justify-center

                            gap-x-3
                            gap-y-1

                            text-[58px]

                            leading-[0.92]

                            text-[#3F5147]

                            drop-shadow-[0_2px_8px_rgba(255,253,248,0.65)]

                            sm:text-[74px]

                            md:gap-x-4
                            md:text-[90px]

                            lg:text-[102px]

                            xl:text-[110px]
                        "
                    >


                        {/* GROOM */}

                        <span>
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        {/* =================================================
                            &
                        ================================================= */}

                        <span
                            className="
                                relative

                                flex

                                h-10
                                w-10

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[#B89A70]/28

                                bg-[#FFFDF8]/68

                                font-wedding-serif

                                text-[13px]
                                font-normal

                                italic

                                text-[#B89A70]

                                shadow-[0_8px_25px_rgba(63,81,71,0.07)]

                                backdrop-blur-md

                                sm:h-11
                                sm:w-11
                                sm:text-sm

                                md:h-12
                                md:w-12
                                md:text-base
                            "
                        >

                            <span
                                className="
                                    absolute

                                    inset-[4px]

                                    rounded-full

                                    border
                                    border-[#C98792]/12
                                "
                            />


                            <span
                                className="
                                    relative
                                    z-10
                                "
                            >
                                &
                            </span>

                        </span>


                        {/* BRIDE */}

                        <span>
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </h1>


                    {/* =================================================
                        MINIMAL DECORATION
                    ================================================= */}

                    <div
                        className="
                            mx-auto

                            mt-4

                            flex

                            max-w-[180px]

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/45
                            "
                        />


                        <span
                            className="
                                h-[4px]
                                w-[4px]

                                rotate-45

                                border
                                border-[#B97882]/60
                            "
                        />


                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/45
                            "
                        />

                    </div>


                    {/* =================================================
                        QUOTE
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-4

                            max-w-[515px]

                            text-[16px]
                            font-normal

                            italic

                            leading-7

                            text-[#56685D]

                            drop-shadow-[0_1px_5px_rgba(255,253,248,0.65)]

                            sm:text-lg
                            sm:leading-8

                            md:mt-5
                            md:max-w-[570px]
                            md:text-xl
                            md:leading-9
                        "
                    >
                        “
                        {
                            hero.quote
                        }
                        ”
                    </p>


                    {/* =================================================
                        DATE
                    ================================================= */}

                    <div
                        className="
                            mx-auto

                            my-5

                            flex

                            max-w-[340px]

                            items-center
                            justify-center

                            gap-3

                            sm:my-6
                            sm:gap-4

                            md:my-7
                        "
                    >

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/45
                            "
                        />


                        <div
                            className="
                                rounded-full

                                border
                                border-[#B89A70]/20

                                bg-[#FFFDF8]/52

                                px-4
                                py-2

                                shadow-[0_7px_25px_rgba(63,81,71,0.05)]

                                backdrop-blur-md

                                sm:px-5
                            "
                        >

                            <p
                                className="
                                    font-wedding-serif

                                    whitespace-nowrap

                                    text-[12px]
                                    font-medium

                                    tracking-[0.18em]

                                    text-[#465A4E]

                                    sm:text-[13px]
                                    sm:tracking-[0.22em]

                                    md:text-[14px]
                                    md:tracking-[0.25em]
                                "
                            >
                                {
                                    wedding
                                        .displayDate
                                }
                            </p>

                        </div>


                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/45
                            "
                        />

                    </div>


                    {/* =================================================
                        CTA
                    ================================================= */}

                    <a
                        href={
                            hero.ctaHref
                        }

                        className="
                            group

                            inline-flex

                            min-h-[48px]

                            items-center
                            justify-center

                            gap-3

                            rounded-full

                            border
                            border-[#607568]/26

                            bg-[#FFFDF8]/72

                            px-6
                            py-3

                            text-[9px]
                            font-medium

                            uppercase

                            tracking-[0.16em]

                            text-[#3F5147]

                            shadow-[0_12px_32px_rgba(63,81,71,0.09)]

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#B97882]

                            hover:bg-[#B97882]

                            hover:text-white

                            hover:shadow-[0_16px_40px_rgba(185,120,130,0.16)]

                            sm:min-h-[50px]
                            sm:px-7
                            sm:text-[10px]

                            md:px-8
                            md:text-[11px]
                        "
                    >

                        <span>
                            {
                                hero.ctaText
                            }
                        </span>


                        <span
                            className="
                                text-[15px]

                                transition-transform
                                duration-300

                                group-hover:translate-y-1
                            "
                        >
                            ↓
                        </span>

                    </a>

                </div>

            </div>


            {/* =================================================
                BOTTOM TRANSITION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    bottom-0
                    left-0

                    z-[5]

                    h-16
                    w-full

                    bg-gradient-to-t

                    from-[#F9F8EE]/58
                    to-transparent

                    md:h-20
                "
            />

        </section>

    );
}