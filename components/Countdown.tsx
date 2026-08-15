"use client";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};


function calculateTime(): TimeLeft {

    const distance =
        new Date(
            wedding.dateISO
        ).getTime() -
        Date.now();


    if (distance <= 0) {

        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
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


const floatingItems = [

    {
        left: "5%",
        delay: "0s",
        duration: "14s",
        size: 18,
        type: "♡",
    },

    {
        left: "14%",
        delay: "4s",
        duration: "17s",
        size: 11,
        type: "♥",
    },

    {
        left: "23%",
        delay: "7s",
        duration: "15s",
        size: 15,
        type: "♡",
    },

    {
        left: "35%",
        delay: "2s",
        duration: "18s",
        size: 10,
        type: "♥",
    },

    {
        left: "47%",
        delay: "9s",
        duration: "16s",
        size: 16,
        type: "♡",
    },

    {
        left: "59%",
        delay: "5s",
        duration: "19s",
        size: 12,
        type: "♥",
    },

    {
        left: "70%",
        delay: "1s",
        duration: "15s",
        size: 17,
        type: "♡",
    },

    {
        left: "81%",
        delay: "8s",
        duration: "17s",
        size: 11,
        type: "♥",
    },

    {
        left: "92%",
        delay: "3s",
        duration: "20s",
        size: 15,
        type: "♡",
    },

];


const bubbles = [

    {
        left: "8%",
        size: 34,
        delay: "2s",
        duration: "17s",
    },

    {
        left: "19%",
        size: 18,
        delay: "7s",
        duration: "14s",
    },

    {
        left: "31%",
        size: 46,
        delay: "4s",
        duration: "20s",
    },

    {
        left: "44%",
        size: 25,
        delay: "0s",
        duration: "16s",
    },

    {
        left: "56%",
        size: 38,
        delay: "9s",
        duration: "19s",
    },

    {
        left: "68%",
        size: 20,
        delay: "5s",
        duration: "15s",
    },

    {
        left: "79%",
        size: 42,
        delay: "1s",
        duration: "21s",
    },

    {
        left: "91%",
        size: 26,
        delay: "6s",
        duration: "17s",
    },

];


export default function Countdown() {

    const [
        time,
        setTime,
    ] =
        useState<TimeLeft | null>(
            null
        );


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


    const values = [

        {
            label: "Ngày",
            value:
                time?.days,
        },

        {
            label: "Giờ",
            value:
                time?.hours,
        },

        {
            label: "Phút",
            value:
                time?.minutes,
        },

        {
            label: "Giây",
            value:
                time?.seconds,
        },

    ];


    return (

        <section
            className="
                relative

                flex
                min-h-[650px]

                items-center

                overflow-hidden

                bg-gradient-to-br

                from-[#fff9f6]
                via-[#f9eae4]
                to-[#efd7cf]

                px-5
                py-24

                md:min-h-[720px]
            "
        >


            {/* ================================= */}
            {/* BACKGROUND GLOW */}
            {/* ================================= */}

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

                    bg-[#f4bdb0]/30

                    blur-[110px]
                "
            />


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

                    bg-[#e5c3a6]/35

                    blur-[130px]
                "
            />


            <div
                className="
                    countdown-glow-3

                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[350px]
                    w-[350px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-white/60

                    blur-[120px]
                "
            />


            {/* ================================= */}
            {/* BUBBLES */}
            {/* ================================= */}

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
                                `bubble-${index}`
                            }

                            className="
                                countdown-bubble

                                absolute

                                -bottom-20

                                rounded-full

                                border
                                border-white/70

                                bg-white/15

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
                )}

            </div>


            {/* ================================= */}
            {/* FLOATING HEARTS */}
            {/* ================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {floatingItems.map(
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

                                text-[#c88879]/45
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
                            {item.type}
                        </span>

                    )
                )}

            </div>


            {/* ================================= */}
            {/* DECORATION TOP */}
            {/* ================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-1/2
                    top-12

                    -translate-x-1/2

                    flex
                    items-center

                    gap-4

                    text-[#b98073]/40
                "
            >

                <span
                    className="
                        h-px
                        w-10

                        bg-[#b98073]/30
                    "
                />

                <span>
                    ♡
                </span>

                <span
                    className="
                        h-px
                        w-10

                        bg-[#b98073]/30
                    "
                />

            </div>


            {/* ================================= */}
            {/* MAIN CONTENT */}
            {/* ================================= */}

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


                {/* SMALL TITLE */}

                <p
                    className="
                        text-[8px]

                        font-medium

                        uppercase

                        tracking-[0.42em]

                        text-[#9b756b]/70

                        md:text-[9px]
                    "
                >
                    Đếm ngược đến ngày hạnh phúc
                </p>


                {/* TITLE */}

                <h2
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-5

                        max-w-3xl

                        text-[38px]
                        font-light

                        leading-tight

                        text-[#5b4741]

                        sm:text-5xl

                        md:text-6xl
                    "
                >
                    Ngày chúng mình
                    <br />

                    <span
                        className="
                            italic

                            text-[#b97869]
                        "
                    >
                        về chung một nhà
                    </span>
                </h2>


                {/* HEART */}

                <div
                    className="
                        countdown-main-heart

                        mx-auto
                        mt-6

                        flex

                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#d6aaa0]/40

                        bg-white/40

                        text-[#bd7b6c]

                        shadow-[0_8px_25px_rgba(128,79,67,0.08)]

                        backdrop-blur-md
                    "
                >
                    ♥
                </div>


                {/* ================================= */}
                {/* COUNTDOWN */}
                {/* ================================= */}

                <div
                    className="
                        mx-auto

                        mt-12

                        grid

                        max-w-5xl

                        grid-cols-2

                        gap-5

                        sm:gap-7

                        md:grid-cols-4
                    "
                >

                    {values.map(
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
                                    border-white/70

                                    bg-white/30

                                    shadow-[0_20px_60px_rgba(143,94,80,0.10)]

                                    backdrop-blur-lg

                                    transition-all
                                    duration-500

                                    hover:-translate-y-2

                                    hover:bg-white/50

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
                                        border-[#c99688]/20
                                    "
                                />


                                {/* LIGHT */}

                                <div
                                    className="
                                        pointer-events-none

                                        absolute

                                        -right-8
                                        -top-8

                                        h-24
                                        w-24

                                        rounded-full

                                        bg-white/50

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

                                        text-[#654f48]

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

                                        text-[#92766d]/70

                                        sm:text-[9px]
                                    "
                                >
                                    {item.label}
                                </span>


                                {/* SMALL HEART */}

                                <span
                                    className="
                                        absolute
                                        bottom-4

                                        text-[7px]

                                        text-[#c98d80]/40
                                    "
                                >
                                    ♥
                                </span>

                            </div>

                        )
                    )}

                </div>


                {/* ================================= */}
                {/* MESSAGE */}
                {/* ================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-12

                        max-w-xl

                        text-[15px]

                        italic

                        leading-7

                        text-[#735c55]/70

                        sm:text-base

                        md:mt-14
                        md:text-lg
                    "
                >
                    Chúng mình đang đếm từng ngày để được cùng
                    những người thân yêu lưu lại một kỷ niệm thật đẹp.
                </p>


                {/* NAMES */}

                <p
                    className="
                        font-wedding

                        mt-5

                        text-4xl

                        text-[#b67768]

                        md:text-5xl
                    "
                >
                    Nam & Thư
                </p>

            </div>


            {/* ================================= */}
            {/* BOTTOM DECORATION */}
            {/* ================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    bottom-9
                    left-1/2

                    -translate-x-1/2

                    flex
                    items-center

                    gap-3
                "
            >

                <span
                    className="
                        h-px
                        w-12

                        bg-[#bb897d]/20
                    "
                />

                <span
                    className="
                        text-[8px]

                        text-[#bb897d]/40
                    "
                >
                    ♡
                </span>

                <span
                    className="
                        h-px
                        w-12

                        bg-[#bb897d]/20
                    "
                />

            </div>

        </section>
    );
}