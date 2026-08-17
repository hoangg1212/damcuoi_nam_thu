import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


/* =========================================================
   BUBBLE CONFIG

   GIỮ NGUYÊN HIỆU ỨNG CŨ
========================================================= */

const bubbles = [

    {
        left: "5%",
        size: 22,
        delay: "0s",
        duration: "11s",
    },

    {
        left: "14%",
        size: 42,
        delay: "2s",
        duration: "14s",
    },

    {
        left: "24%",
        size: 28,
        delay: "5s",
        duration: "12s",
    },

    {
        left: "36%",
        size: 52,
        delay: "1s",
        duration: "16s",
    },

    {
        left: "48%",
        size: 20,
        delay: "7s",
        duration: "11s",
    },

    {
        left: "61%",
        size: 38,
        delay: "4s",
        duration: "15s",
    },

    {
        left: "72%",
        size: 26,
        delay: "2.5s",
        duration: "12s",
    },

    {
        left: "82%",
        size: 48,
        delay: "6s",
        duration: "16s",
    },

    {
        left: "93%",
        size: 24,
        delay: "3s",
        duration: "13s",
    },
];


/* =========================================================
   HEART CONFIG

   GIỮ NGUYÊN HIỆU ỨNG TRÁI TIM BAY
========================================================= */

const hearts = [

    {
        left: "9%",
        delay: "1s",
        duration: "13s",
        size: 12,
    },

    {
        left: "20%",
        delay: "6s",
        duration: "16s",
        size: 15,
    },

    {
        left: "31%",
        delay: "3s",
        duration: "14s",
        size: 10,
    },

    {
        left: "43%",
        delay: "8s",
        duration: "18s",
        size: 16,
    },

    {
        left: "57%",
        delay: "2s",
        duration: "15s",
        size: 11,
    },

    {
        left: "69%",
        delay: "7s",
        duration: "17s",
        size: 15,
    },

    {
        left: "79%",
        delay: "4s",
        duration: "13s",
        size: 10,
    },

    {
        left: "91%",
        delay: "9s",
        duration: "18s",
        size: 14,
    },
];


/* =========================================================
   LOVE QUOTE
========================================================= */

export default function LoveQuote() {

    return (

        <section
            className="
        relative

        -mt-px

        flex
        min-h-[580px]

        items-center

        overflow-hidden

        bg-[linear-gradient(to_bottom,#EEF4F6_0%,#EEF4F6_12%,#F4F6EF_55%,#F8F1EE_100%)]

        px-5
        py-24

        sm:px-6

        md:min-h-[650px]
        md:px-8
        md:py-28
    "
        >


            {/* =================================================
                BLUE GLOW

                Nối tiếp xanh nước biển nhạt
                từ Couple section phía trên.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    -left-28
                    top-8

                    h-[320px]
                    w-[320px]

                    rounded-full

                    bg-[#8FB4C7]/20

                    blur-[110px]

                    md:h-[420px]
                    md:w-[420px]
                "
            />


            {/* =================================================
                DUSTY ROSE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    -right-24
                    bottom-0

                    h-[330px]
                    w-[330px]

                    rounded-full

                    bg-[#D9A5AE]/18

                    blur-[115px]

                    md:h-[430px]
                    md:w-[430px]
                "
            />


            {/* =================================================
                SAGE / CREAM CENTER LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[470px]
                    w-[80%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#F8F7EC]/50

                    blur-[100px]

                    md:w-[56%]
                "
            />


            {/* =================================================
                BUBBLES

                GIỮ NGUYÊN HIỆU ỨNG
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {bubbles.map(
                    (
                        bubble,
                        index
                    ) => (

                        <span
                            key={
                                index
                            }

                            className="
                                love-bubble

                                absolute
                                -bottom-20

                                rounded-full

                                border
                                border-[#FFFFFF]/75

                                bg-[#FFFFFF]/18

                                shadow-[inset_0_0_16px_rgba(255,255,255,0.65)]

                                backdrop-blur-[2px]
                            "

                            style={{
                                left:
                                    bubble.left,

                                width:
                                    bubble.size,

                                height:
                                    bubble.size,

                                animationDelay:
                                    bubble.delay,

                                animationDuration:
                                    bubble.duration,
                            }}
                        />

                    )
                )}

            </div>


            {/* =================================================
                FLOATING HEARTS

                GIỮ NGUYÊN HIỆU ỨNG
                Chỉ đổi màu sang dusty rose.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {hearts.map(
                    (
                        heart,
                        index
                    ) => (

                        <span
                            key={
                                index
                            }

                            className="
                                love-heart

                                absolute

                                -bottom-10

                                text-[#C98792]/42
                            "

                            style={{
                                left:
                                    heart.left,

                                animationDelay:
                                    heart.delay,

                                animationDuration:
                                    heart.duration,

                                fontSize:
                                    heart.size,
                            }}
                        >
                            ♥
                        </span>

                    )
                )}

            </div>


            {/* =================================================
                TOP DECORATION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-12

                    -translate-x-1/2

                    text-[#C98792]/25
                "
            >
                ♡
            </div>


            {/* =================================================
                BOTTOM DECORATION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    bottom-12
                    left-1/2

                    flex

                    -translate-x-1/2

                    items-center
                    justify-center

                    gap-3

                    opacity-50
                "
            >

                <span
                    className="
                        h-px
                        w-12

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/70
                    "
                />


                <span
                    className="
                        text-[9px]

                        text-[#C98792]
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        w-12

                        bg-gradient-to-l

                        from-transparent
                        to-[#B8A27D]/70
                    "
                />

            </div>


            {/* =================================================
                MAIN CONTENT

                GIỮ REVEAL EFFECT
            ================================================= */}

            <Reveal
                className="
                    relative
                    z-10

                    mx-auto

                    w-full
                    max-w-4xl

                    text-center
                "
            >


                {/* =================================================
                    HEART ICON

                    GIỮ NGUYÊN BỐ CỤC ICON TRÁI TIM
                    nhưng đồng bộ màu mới.
                ================================================= */}

                <div
                    className="
                        relative

                        mx-auto

                        flex
                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#C98792]/25

                        bg-[#FFFDF8]/75

                        text-base

                        text-[#C98792]

                        shadow-[0_12px_38px_rgba(49,86,107,0.09)]

                        backdrop-blur-md

                        sm:h-16
                        sm:w-16
                    "
                >

                    {/* INNER RING */}

                    <span
                        className="
                            absolute
                            inset-[5px]

                            rounded-full

                            border
                            border-[#B8A27D]/18
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

                </div>


                {/* =================================================
                    SMALL TITLE
                ================================================= */}

                <p
                    className="
                        mt-6

                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.34em]

                        text-[#C98792]

                        sm:text-[10px]
                    "
                >
                    Một điều chúng mình luôn trân quý
                </p>


                {/* =================================================
                    QUOTE
                ================================================= */}

                <blockquote
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-6

                        max-w-[780px]

                        text-[26px]
                        font-light

                        italic

                        leading-[1.55]

                        tracking-[-0.01em]

                        text-[#31566B]

                        sm:text-[30px]
                        sm:leading-[1.5]

                        md:mt-8
                        md:text-[42px]
                        md:leading-[1.45]

                        lg:text-[46px]
                    "
                >
                    “{wedding.loveQuote}”
                </blockquote>


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div
                    className="
                        mx-auto
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
                            w-10

                            bg-gradient-to-r

                            from-transparent
                            to-[#B8A27D]/55

                            sm:w-12
                        "
                    />


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
                            h-px
                            w-10

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/55

                            sm:w-12
                        "
                    />

                </div>


                {/* =================================================
                    COUPLE NAME
                ================================================= */}

                <p
                    className="
                        font-wedding

                        mt-5

                        text-[44px]

                        leading-none

                        text-[#587589]

                        sm:text-5xl

                        md:text-6xl
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

                            mx-3

                            align-middle

                            text-[15px]
                            font-normal

                            text-[#C98792]

                            sm:mx-4
                            sm:text-base
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
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-4

                        max-w-[520px]

                        text-[14px]
                        font-normal

                        italic

                        leading-6

                        tracking-[0.04em]

                        text-[#61726D]/85

                        sm:text-[15px]

                        md:text-[16px]
                    "
                >
                    {
                        wedding
                            .loveQuoteSection
                            .bottomText
                    }
                </p>

            </Reveal>

        </section>

    );
}