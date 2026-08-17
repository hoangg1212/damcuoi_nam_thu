"use client";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


export default function Preloader() {

    const [
        visible,
        setVisible,
    ] =
        useState(true);


    const [
        leaving,
        setLeaving,
    ] =
        useState(false);


    /* =========================================================
       PRELOADER TIMING
    ========================================================= */

    useEffect(() => {

        const fadeTimer =
            setTimeout(
                () => {

                    setLeaving(
                        true
                    );

                },
                800
            );


        const removeTimer =
            setTimeout(
                () => {

                    setVisible(
                        false
                    );

                },
                1500
            );


        return () => {

            clearTimeout(
                fadeTimer
            );


            clearTimeout(
                removeTimer
            );

        };

    }, []);


    if (
        !visible
    ) {

        return null;

    }


    return (

        <div
            className={`
                fixed
                inset-0

                z-[10000]

                flex

                items-center
                justify-center

                overflow-hidden

                bg-[linear-gradient(145deg,#F8F7EC_0%,#F3F5EF_48%,#EAF2F5_100%)]

                px-5

                transition-all
                duration-700

                ${
                    leaving

                        ? `
                            pointer-events-none
                            scale-[1.015]
                            opacity-0
                          `

                        : `
                            scale-100
                            opacity-100
                          `
                }
            `}
        >


            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-32
                    top-[15%]

                    h-[350px]
                    w-[350px]

                    rounded-full

                    bg-[#8FB4C7]/18

                    blur-[110px]

                    md:h-[450px]
                    md:w-[450px]
                "
            />


            {/* =================================================
                DUSTY ROSE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-32
                    bottom-[10%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#D9A5AE]/16

                    blur-[115px]

                    md:h-[460px]
                    md:w-[460px]
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

                    h-[350px]
                    w-[75%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#FFFDF8]/55

                    blur-[100px]

                    md:w-[45%]
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
                    top-[15%]

                    flex

                    -translate-x-1/2

                    items-center
                    justify-center

                    gap-3

                    opacity-80

                    md:top-[18%]
                "
            >

                <span
                    className="
                        h-px
                        w-10

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/50
                    "
                />


                <span
                    className="
                        text-[7px]

                        text-[#C98792]
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
                        to-[#B8A27D]/50
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

                    text-center
                "
            >


                {/* =================================================
                    SMALL LABEL
                ================================================= */}

                <p
                    className="
                        mb-5

                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.4em]

                        text-[#C98792]/90

                        sm:text-[10px]
                    "
                >
                    Ngày chung đôi
                </p>


                {/* =================================================
                    INITIALS
                ================================================= */}

                <div
                    className="
                        flex

                        items-center
                        justify-center

                        gap-4

                        text-[#31566B]
                    "
                >


                    {/* GROOM INITIAL */}

                    <span
                        className="
                            font-wedding

                            text-[74px]

                            leading-none

                            sm:text-[86px]

                            md:text-[100px]
                        "
                    >
                        {
                            wedding
                                .groom
                                .shortName
                                .charAt(0)
                        }
                    </span>


                    {/* =================================================
                        HEART
                    ================================================= */}

                    <span
                        className="
                            relative

                            flex

                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#C98792]/25

                            bg-[#FFFDF8]/65

                            font-wedding-serif

                            text-[12px]

                            text-[#C98792]

                            shadow-[0_8px_28px_rgba(49,86,107,0.08)]

                            backdrop-blur-md

                            sm:h-12
                            sm:w-12
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

                    </span>


                    {/* BRIDE INITIAL */}

                    <span
                        className="
                            font-wedding

                            text-[74px]

                            leading-none

                            sm:text-[86px]

                            md:text-[100px]
                        "
                    >
                        {
                            wedding
                                .bride
                                .shortName
                                .charAt(0)
                        }
                    </span>

                </div>


                {/* =================================================
                    FULL NAME
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mt-4

                        text-[15px]
                        font-normal

                        tracking-[0.08em]

                        text-[#587589]

                        sm:text-[16px]
                    "
                >
                    {
                        wedding
                            .groom
                            .fullName
                    }


                    <span
                        className="
                            mx-2

                            text-[#C98792]
                        "
                    >
                        &
                    </span>


                    {
                        wedding
                            .bride
                            .fullName
                    }

                </p>


                {/* =================================================
                    SMALL DIVIDER
                ================================================= */}

                <div
                    className="
                        mx-auto
                        mt-5

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
                            to-[#B8A27D]/40
                        "
                    />


                    <span
                        className="
                            text-[6px]

                            text-[#C98792]/70
                        "
                    >
                        ✦
                    </span>


                    <span
                        className="
                            h-px
                            w-8

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/40
                        "
                    />

                </div>


                {/* =================================================
                    LOADING LINE
                ================================================= */}

                <div
                    className="
                        relative

                        mx-auto
                        mt-6

                        h-px
                        w-44

                        overflow-hidden

                        bg-[#7A9CAC]/15

                        sm:w-52
                    "
                >

                    <div
                        className="
                            loader-line

                            h-full
                            w-full

                            bg-gradient-to-r

                            from-transparent
                            via-[#587589]
                            to-transparent
                        "
                    />

                </div>


                {/* =================================================
                    DATE
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mt-5

                        text-[9px]
                        font-medium

                        tracking-[0.3em]

                        text-[#61726D]/65

                        sm:text-[10px]
                    "
                >
                    {
                        wedding
                            .displayDate
                    }
                </p>

            </div>


            {/* =================================================
                BOTTOM DECORATION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    bottom-[12%]
                    left-1/2

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
                        w-8

                        bg-gradient-to-r

                        from-transparent
                        to-[#7A9CAC]/25
                    "
                />


                <span
                    className="
                        text-[7px]

                        text-[#C98792]/50
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
                        to-[#7A9CAC]/25
                    "
                />

            </div>

        </div>

    );
}