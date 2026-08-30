"use client";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


/* =========================================================
   TYPE
========================================================= */

type TimeLeft = {

    days:
        number;

    hours:
        number;

    minutes:
        number;

    seconds:
        number;
};


/* =========================================================
   CALCULATE COUNTDOWN
========================================================= */

function calculateTime(): TimeLeft {

    const distance =
        new Date(
            wedding.dateISO
        ).getTime() -
        Date.now();


    if (
        distance <= 0
    ) {

        return {

            days:
                0,

            hours:
                0,

            minutes:
                0,

            seconds:
                0,
        };

    }


    return {

        days:
            Math.floor(
                distance /
                86400000
            ),

        hours:
            Math.floor(
                (
                    distance %
                    86400000
                ) /
                3600000
            ),

        minutes:
            Math.floor(
                (
                    distance %
                    3600000
                ) /
                60000
            ),

        seconds:
            Math.floor(
                (
                    distance %
                    60000
                ) /
                1000
            ),
    };
}


/* =========================================================
   FLOATING HEARTS
========================================================= */

const floatingItems = [

    {
        left:
            "5%",

        delay:
            "0s",

        duration:
            "14s",

        size:
            18,

        type:
            "♡",
    },

    {
        left:
            "14%",

        delay:
            "4s",

        duration:
            "17s",

        size:
            11,

        type:
            "♥",
    },

    {
        left:
            "23%",

        delay:
            "7s",

        duration:
            "15s",

        size:
            15,

        type:
            "♡",
    },

    {
        left:
            "35%",

        delay:
            "2s",

        duration:
            "18s",

        size:
            10,

        type:
            "♥",
    },

    {
        left:
            "47%",

        delay:
            "9s",

        duration:
            "16s",

        size:
            16,

        type:
            "♡",
    },

    {
        left:
            "59%",

        delay:
            "5s",

        duration:
            "19s",

        size:
            12,

        type:
            "♥",
    },

    {
        left:
            "70%",

        delay:
            "1s",

        duration:
            "15s",

        size:
            17,

        type:
            "♡",
    },

    {
        left:
            "81%",

        delay:
            "8s",

        duration:
            "17s",

        size:
            11,

        type:
            "♥",
    },

    {
        left:
            "92%",

        delay:
            "3s",

        duration:
            "20s",

        size:
            15,

        type:
            "♡",
    },

];


/* =========================================================
   BUBBLES
========================================================= */

const bubbles = [

    {
        left:
            "8%",

        size:
            34,

        delay:
            "2s",

        duration:
            "17s",
    },

    {
        left:
            "19%",

        size:
            18,

        delay:
            "7s",

        duration:
            "14s",
    },

    {
        left:
            "31%",

        size:
            46,

        delay:
            "4s",

        duration:
            "20s",
    },

    {
        left:
            "44%",

        size:
            25,

        delay:
            "0s",

        duration:
            "16s",
    },

    {
        left:
            "56%",

        size:
            38,

        delay:
            "9s",

        duration:
            "19s",
    },

    {
        left:
            "68%",

        size:
            20,

        delay:
            "5s",

        duration:
            "15s",
    },

    {
        left:
            "79%",

        size:
            42,

        delay:
            "1s",

        duration:
            "21s",
    },

    {
        left:
            "91%",

        size:
            26,

        delay:
            "6s",

        duration:
            "17s",
    },

];


/* =========================================================
   COUNTDOWN COMPONENT
========================================================= */

export default function Countdown() {

    const [
        time,
        setTime,
    ] =
        useState<
            TimeLeft |
            null
        >(null);


    /* =====================================================
       UPDATE TIMER
    ===================================================== */

    useEffect(() => {

        const firstUpdate =
            setTimeout(
                () => {

                    setTime(
                        calculateTime()
                    );

                },
                0
            );


        const interval =
            setInterval(
                () => {

                    setTime(
                        calculateTime()
                    );

                },
                1000
            );


        return () => {

            clearTimeout(
                firstUpdate
            );


            clearInterval(
                interval
            );

        };

    }, []);


    /* =====================================================
       COUNTDOWN VALUES
    ===================================================== */

    const values = [

        {
            label:
                "Ngày",

            value:
                time?.days,
        },

        {
            label:
                "Giờ",

            value:
                time?.hours,
        },

        {
            label:
                "Phút",

            value:
                time?.minutes,
        },

        {
            label:
                "Giây",

            value:
                time?.seconds,
        },

    ];


    return (

        <section
            className="
                relative

                -mt-px

                flex

                min-h-[560px]

                items-center

                overflow-hidden

                bg-[linear-gradient(to_bottom,#EEF4F6_0%,#EEF4F6_8%,#F4F6EF_48%,#F8F1EE_100%)]

                px-5

                pt-14
                pb-10

                sm:px-6
                sm:pt-16
                sm:pb-12

                md:min-h-[620px]

                md:px-8

                md:pt-20
                md:pb-14

                lg:min-h-[650px]
                lg:pt-22
                lg:pb-16
            "
        >


            {/* =================================================
                SEAMLESS TOP TRANSITION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-0
                    top-0

                    h-16
                    w-full

                    bg-gradient-to-b

                    from-[#EEF4F6]
                    via-[#EEF4F6]/75
                    to-transparent

                    md:h-20
                "
            />


            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    countdown-glow-1

                    pointer-events-none

                    absolute

                    -left-32
                    -top-32

                    h-[420px]
                    w-[420px]

                    rounded-full

                    bg-[#8FB4C7]/20

                    blur-[115px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                DUSTY ROSE GLOW
            ================================================= */}

            <div
                className="
                    countdown-glow-2

                    pointer-events-none

                    absolute

                    -bottom-40
                    -right-28

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-[#D9A5AE]/18

                    blur-[130px]

                    md:h-[560px]
                    md:w-[560px]
                "
            />


            {/* =================================================
                CENTER CREAM / SAGE LIGHT
            ================================================= */}

            <div
                className="
                    countdown-glow-3

                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[420px]
                    w-[70%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#F8F7EC]/60

                    blur-[125px]

                    md:w-[52%]
                "
            />


            {/* =================================================
                BUBBLES
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {
                    bubbles.map(
                        (
                            bubble,
                            index
                        ) => (

                            <span
                                key={
                                    `bubble-${index}`
                                }

                                className="
                                    countdown-bubble

                                    absolute

                                    -bottom-20

                                    rounded-full

                                    border
                                    border-[#FFFFFF]/75

                                    bg-[#FFFFFF]/16

                                    shadow-[inset_0_0_18px_rgba(255,255,255,0.7)]

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
                    )
                }

            </div>


            {/* =================================================
                FLOATING HEARTS
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {
                    floatingItems.map(
                        (
                            item,
                            index
                        ) => (

                            <span
                                key={
                                    `heart-${index}`
                                }

                                className="
                                    countdown-heart

                                    absolute

                                    -bottom-10

                                    text-[#C98792]/38
                                "

                                style={{

                                    left:
                                        item.left,

                                    fontSize:
                                        item.size,

                                    animationDelay:
                                        item.delay,

                                    animationDuration:
                                        item.duration,

                                }}
                            >
                                {
                                    item.type
                                }
                            </span>

                        )
                    )
                }

            </div>


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

                    gap-4

                    md:top-9
                "
            >

                <span
                    className="
                        h-px
                        w-10

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />


                <span
                    className="
                        text-[9px]

                        text-[#C98792]/70
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        w-10

                        bg-gradient-to-l

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    w-full
                    max-w-6xl

                    text-center
                "
            >


                {/* =================================================
                    EYEBROW
                ================================================= */}

                <p
                    className="
                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.36em]

                        text-[#C98792]

                        sm:text-[10px]

                        md:text-[11px]
                    "
                >
                    {
                        wedding
                            .countdownSection
                            .eyebrow
                    }
                </p>


                {/* =================================================
                    TITLE
                    MOBILE + DESKTOP: 2 DÒNG
                ================================================= */}

                <h2
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-4

                        max-w-4xl

                        font-light

                        leading-[1.12]

                        tracking-[-0.02em]

                        text-[#31566B]
                    "
                >

                    {/* LINE 1 */}

                    <span
                        className="
                            block

                            whitespace-nowrap

                            text-[clamp(25px,7vw,39px)]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-[66px]
                        "
                    >
                        {
                            wedding
                                .countdownSection
                                .title
                        }
                    </span>


                    {/* LINE 2 */}

                    <span
                        className="
                            mt-1

                            block

                            whitespace-nowrap

                            text-[clamp(22px,6.4vw,38px)]

                            italic

                            text-[#587589]

                            sm:mt-2
                            sm:text-5xl

                            md:text-6xl

                            lg:text-[66px]
                        "
                    >
                        {
                            wedding
                                .countdownSection
                                .highlight
                        }
                    </span>

                </h2>


                {/* =================================================
                    MAIN HEART
                ================================================= */}

                <div
                    className="
                        countdown-main-heart

                        relative

                        mx-auto

                        mt-5

                        flex

                        h-11
                        w-11

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#C98792]/25

                        bg-[#FFFDF8]/75

                        text-[#C98792]

                        shadow-[0_10px_30px_rgba(49,86,107,0.08)]

                        backdrop-blur-md

                        sm:h-12
                        sm:w-12

                        md:mt-6
                    "
                >

                    <span
                        className="
                            absolute

                            inset-[4px]

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
                    COUNTDOWN CARDS
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-9

                        grid

                        max-w-5xl

                        grid-cols-2

                        gap-5

                        sm:mt-10
                        sm:gap-7

                        md:mt-12
                        md:grid-cols-4
                    "
                >

                    {
                        values.map(
                            (
                                item,
                                index
                            ) => (

                                <div
                                    key={
                                        item.label
                                    }

                                    className="
                                        countdown-card

                                        group

                                        relative

                                        mx-auto

                                        flex

                                        aspect-square
                                        w-full
                                        max-w-[155px]

                                        flex-col

                                        items-center
                                        justify-center

                                        overflow-hidden

                                        rounded-full

                                        border
                                        border-[#FFFFFF]/80

                                        bg-[#FFFDF8]/40

                                        shadow-[0_20px_60px_rgba(49,86,107,0.09)]

                                        backdrop-blur-lg

                                        transition-all
                                        duration-500

                                        hover:-translate-y-2

                                        hover:border-[#C98792]/25

                                        hover:bg-[#FFFDF8]/68

                                        hover:shadow-[0_24px_70px_rgba(49,86,107,0.13)]

                                        sm:max-w-[175px]

                                        md:max-w-[200px]
                                    "

                                    style={{
                                        animationDelay:
                                            `${index * 0.25}s`,
                                    }}
                                >


                                    {/* INNER RING */}

                                    <div
                                        className="
                                            pointer-events-none

                                            absolute

                                            inset-2

                                            rounded-full

                                            border
                                            border-[#7A9CAC]/16
                                        "
                                    />


                                    {/* SOFT LIGHT */}

                                    <div
                                        className="
                                            pointer-events-none

                                            absolute

                                            -right-8
                                            -top-8

                                            h-24
                                            w-24

                                            rounded-full

                                            bg-white/55

                                            blur-2xl
                                        "
                                    />


                                    {/* NUMBER */}

                                    <strong
                                        className="
                                            font-wedding-serif

                                            relative
                                            z-10

                                            block

                                            text-5xl
                                            font-light

                                            leading-none

                                            tracking-[-0.03em]

                                            text-[#31566B]

                                            sm:text-6xl

                                            md:text-7xl
                                        "
                                    >
                                        {
                                            item.value ===
                                            undefined

                                                ? "--"

                                                :

                                                String(
                                                    item.value
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )
                                        }
                                    </strong>


                                    {/* LABEL */}

                                    <span
                                        className="
                                            relative
                                            z-10

                                            mt-3

                                            block

                                            text-[8px]
                                            font-medium

                                            uppercase

                                            tracking-[0.32em]

                                            text-[#61726D]/80

                                            sm:text-[9px]
                                        "
                                    >
                                        {
                                            item.label
                                        }
                                    </span>


                                    {/* SMALL HEART */}

                                    <span
                                        className="
                                            absolute

                                            bottom-4

                                            text-[7px]

                                            text-[#C98792]/45
                                        "
                                    >
                                        ♥
                                    </span>

                                </div>

                            )
                        )
                    }

                </div>


                {/* =================================================
                    MESSAGE
                    ĐÂY LÀ PHẦN CUỐI CÙNG
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-9

                        max-w-[610px]

                        text-[15px]
                        font-normal

                        italic

                        leading-7

                        text-[#61726D]/90

                        sm:mt-10
                        sm:text-base
                        sm:leading-8

                        md:mt-12
                        md:text-lg
                    "
                >
                    {
                        wedding
                            .countdownSection
                            .message
                    }
                </p>

            </div>

        </section>

    );
}