/* =========================================================
   WEDDING MESSAGE
   LỜI CẢM ƠN + NHẪN CƯỚI
========================================================= */

import { wedding } from "@/data/wedding";


/* =========================================================
   NHẪN CƯỚI
========================================================= */

function RingDecoration() {

    return (

        <div
            className="
                mx-auto

                flex

                w-full
                max-w-[520px]

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
                    h-[58px]
                    w-full

                    overflow-visible

                    sm:h-[66px]

                    md:h-[74px]
                "
            >

                {/* LEFT DECORATIVE LINE */}

                <path
                    d="
                        M0 70
                        C35 52 58 86 91 69
                        C116 56 121 80 146 68
                        C162 60 170 59 188 63
                    "

                    stroke="#B8A27D"

                    strokeWidth="1.2"

                    opacity="0.55"
                />


                {/* RIGHT DECORATIVE LINE */}

                <path
                    d="
                        M312 63
                        C330 59 338 60 354 68
                        C379 80 384 56 409 69
                        C442 86 465 52 500 70
                    "

                    stroke="#B8A27D"

                    strokeWidth="1.2"

                    opacity="0.55"
                />


                {/* LEFT RING */}

                <ellipse
                    cx="220"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="220"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />


                {/* RIGHT RING */}

                <ellipse
                    cx="280"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="280"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />

            </svg>

        </div>

    );
}


/* =========================================================
   MAIN
========================================================= */

export default function WeddingMessage() {

    const sparkles = [

        {
            left: "8%",
            top: "22%",
            delay: "0s",
            size: 3,
        },

        {
            left: "17%",
            top: "68%",
            delay: "2s",
            size: 2,
        },

        {
            left: "28%",
            top: "15%",
            delay: "4s",
            size: 2,
        },

        {
            left: "39%",
            top: "80%",
            delay: "1s",
            size: 3,
        },

        {
            left: "53%",
            top: "20%",
            delay: "3s",
            size: 2,
        },

        {
            left: "65%",
            top: "72%",
            delay: "5s",
            size: 3,
        },

        {
            left: "78%",
            top: "18%",
            delay: "2.5s",
            size: 2,
        },

        {
            left: "89%",
            top: "64%",
            delay: "4.5s",
            size: 3,
        },

    ];


    return (

        <section
            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#F8F1EE_0%,#F8F1EE_8%,#F3F5EF_46%,#EAF2F5_100%)]

                px-5

                pt-8
                pb-7

                sm:px-6
                sm:pt-10
                sm:pb-9

                md:pt-12
                md:pb-10

                lg:pt-14
                lg:pb-12
            "
        >


            {/* =================================================
                SEAMLESS TOP
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-0
                    top-0

                    h-10
                    w-full

                    bg-gradient-to-b

                    from-[#F8F1EE]
                    via-[#F8F1EE]/70
                    to-transparent

                    sm:h-12

                    md:h-14
                "
            />


            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    wedding-message-glow-left

                    pointer-events-none

                    absolute

                    -left-32
                    top-1/2

                    h-[420px]
                    w-[420px]

                    -translate-y-1/2

                    rounded-full

                    bg-[#8FB4C7]/18

                    blur-[120px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            {/* =================================================
                PINK GLOW
            ================================================= */}

            <div
                className="
                    wedding-message-glow-right

                    pointer-events-none

                    absolute

                    -right-32
                    top-1/2

                    h-[420px]
                    w-[420px]

                    -translate-y-1/2

                    rounded-full

                    bg-[#D9A5AE]/17

                    blur-[120px]

                    md:h-[520px]
                    md:w-[520px]
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

                    h-[420px]
                    w-[70%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#FFFDF8]/55

                    blur-[130px]

                    md:w-[50%]
                "
            />


            {/* =================================================
                LIGHT SWEEP
            ================================================= */}

            <div
                className="
                    wedding-message-light

                    pointer-events-none

                    absolute
                    inset-y-0

                    -left-[40%]

                    w-[35%]

                    rotate-[10deg]

                    bg-gradient-to-r

                    from-transparent
                    via-white/20
                    to-transparent

                    blur-xl
                "
            />


            {/* =================================================
                SPARKLES
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0
                "
            >

                {
                    sparkles.map(
                        (
                            sparkle,
                            index
                        ) => (

                            <span
                                key={
                                    `sparkle-${index}`
                                }

                                className="
                                    wedding-message-sparkle

                                    absolute

                                    rounded-full

                                    bg-[#B8A27D]/70

                                    shadow-[0_0_12px_rgba(184,162,125,0.35)]
                                "

                                style={{

                                    left:
                                        sparkle.left,

                                    top:
                                        sparkle.top,

                                    width:
                                        sparkle.size,

                                    height:
                                        sparkle.size,

                                    animationDelay:
                                        sparkle.delay,

                                }}
                            />

                        )
                    )
                }

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    text-center
                "
            >


                {/* =================================================
                    RING DECORATION
                    ĐƯA GẦN SECTION PHÍA TRÊN HƠN
                ================================================= */}

                <div
                    className="
                        -mt-1
                        mb-0

                        sm:-mt-1
                        sm:mb-1

                        md:-mt-2
                    "
                >

                    <RingDecoration />

                </div>


                {/* =================================================
                    SMALL TITLE
                ================================================= */}

                <p
                    className="
                        text-[10px]
                        font-medium

                        uppercase

                        tracking-[0.36em]

                        text-[#C98792]

                        sm:text-[11px]

                        md:text-[12px]
                    "
                >
                    {
                        wedding
                            .weddingMessageSection
                            .eyebrow
                    }
                </p>


                {/* =================================================
                    QUOTE SYMBOL
                ================================================= */}

                <div
                    className="
                        wedding-message-symbol

                        font-wedding-serif

                        mt-5

                        text-5xl
                        leading-none

                        text-[#7A9CAC]/22

                        sm:mt-6

                        md:mt-7
                        md:text-7xl
                    "
                >
                    “
                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <h2
                    className="
                        font-wedding-serif

                        mx-auto

                        -mt-3

                        max-w-[850px]

                        text-[27px]
                        font-light

                        leading-[1.5]

                        tracking-[-0.015em]

                        text-[#31566B]

                        sm:text-[32px]

                        md:text-[42px]
                        md:leading-[1.45]

                        lg:text-[46px]
                    "
                >

                    {
                        wedding
                            .weddingMessageSection
                            .message
                    }


                    <span
                        className="
                            text-[#587589]
                        "
                    >
                        {" "}

                        {
                            wedding
                                .weddingMessageSection
                                .highlight
                        }

                    </span>

                </h2>


                {/* =================================================
                    NAMES
                ================================================= */}

                <p
                    className="
                        font-wedding

                        mt-7

                        text-[48px]

                        leading-none

                        text-[#587589]

                        sm:text-[54px]

                        md:mt-8
                        md:text-[64px]
                    "
                >

                    {
                        wedding
                            .groom
                            .shortName
                    }


                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            align-middle

                            text-[15px]
                            font-light

                            text-[#C98792]

                            md:text-lg
                        "
                    >
                        &
                    </span>


                    {
                        wedding
                            .bride
                            .shortName
                    }

                </p>


                {/* =================================================
                    BOTTOM TEXT

                    MOBILE:
                    - 1 DÒNG
                    - FONT TỰ CO ĐỂ KHÔNG XUỐNG HÀNG

                    DESKTOP:
                    - GIẢM KHOẢNG CÁCH PHÍA DƯỚI
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-3

                        max-w-none

                        whitespace-nowrap

                        text-[clamp(10px,2.8vw,14px)]
                        font-normal

                        italic

                        leading-6

                        tracking-[0.01em]

                        text-[#61726D]/85

                        sm:mt-4
                        sm:text-[15px]
                        sm:tracking-[0.02em]

                        md:text-[16px]
                        md:tracking-[0.03em]
                    "
                >
                    {
                        wedding
                            .weddingMessageSection
                            .bottomText
                    }
                </p>

            </div>

        </section>

    );
}