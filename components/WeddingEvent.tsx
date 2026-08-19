"use client";

import Image from "next/image";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


/* =========================================================
   TYPE
========================================================= */

type WeddingSide =
    "bride" |
    "groom";


/* =========================================================
   WEDDING EVENT
========================================================= */

export default function WeddingEvent() {

    /*
        Mặc định:
        Nhà trai

        URL nhà gái:
        ?side=bride

        URL nhà trai:
        ?side=groom
    */

    const [
        side,
        setSide,
    ] =
        useState<WeddingSide>(
            "groom"
        );


    /* =====================================================
       READ SIDE FROM URL
    ===================================================== */

    useEffect(
        () => {

            const frame =
                requestAnimationFrame(
                    () => {

                        const params =
                            new URLSearchParams(
                                window.location.search
                            );


                        const currentSide =
                            params.get(
                                "side"
                            );


                        if (
                            currentSide ===
                            "bride"
                        ) {

                            setSide(
                                "bride"
                            );

                            return;

                        }


                        setSide(
                            "groom"
                        );

                    }
                );


            return () => {

                cancelAnimationFrame(
                    frame
                );

            };

        },
        []
    );


    /* =====================================================
       CURRENT EVENT

       bride => dữ liệu nhà gái
       groom => dữ liệu nhà trai
    ===================================================== */

    const event =
        wedding.events[
            side
        ];


    return (

        <section
            id="event"

            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#EEF4F6_0%,#EEF4F6_8%,#F5F6EE_48%,#F8F1EE_100%)]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
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

                    h-24
                    w-full

                    bg-gradient-to-b

                    from-[#EEF4F6]
                    via-[#EEF4F6]/80
                    to-transparent
                "
            />


            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-40
                    top-[15%]

                    h-[400px]
                    w-[400px]

                    rounded-full

                    bg-[#8FB4C7]/17

                    blur-[125px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                ROSE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-[10%]

                    h-[420px]
                    w-[420px]

                    rounded-full

                    bg-[#D9A5AE]/16

                    blur-[135px]

                    md:h-[520px]
                    md:w-[520px]
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
                    top-8

                    flex

                    -translate-x-1/2

                    items-center
                    justify-center

                    gap-3

                    md:top-12
                "
            >

                <span
                    className="
                        h-px
                        w-9

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/50
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#C98792]/80
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
                        to-[#B8A27D]/50
                    "
                />

            </div>


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1200px]
                "
            >


                {/* =================================================
                    HEADING
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mb-14

                        max-w-3xl

                        text-center

                        sm:mb-16

                        md:mb-20

                        lg:mb-24
                    "
                >


                    <p
                        className="
                            text-[10px]
                            font-medium

                            uppercase

                            tracking-[0.38em]

                            text-[#C98792]

                            sm:text-[11px]
                        "
                    >
                        {
                            wedding
                                .eventSection
                                .eyebrow
                        }
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            mt-4

                            text-[44px]
                            font-light

                            leading-tight

                            tracking-[-0.02em]

                            text-[#31566B]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-[72px]
                        "
                    >
                        {
                            wedding
                                .eventSection
                                .title
                        }
                    </h2>


                    {/* DIVIDER */}

                    <div
                        className="
                            mx-auto
                            mt-6

                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-11

                                bg-gradient-to-r

                                from-transparent
                                to-[#B8A27D]/50

                                sm:w-16
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
                                w-11

                                bg-gradient-to-l

                                from-transparent
                                to-[#B8A27D]/50

                                sm:w-16
                            "
                        />

                    </div>


                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-6

                            max-w-[700px]

                            text-[16px]
                            font-normal

                            leading-7

                            text-[#61726D]

                            sm:text-lg
                            sm:leading-8

                            md:text-xl
                            md:leading-9
                        "
                    >
                        {
                            wedding
                                .eventSection
                                .description
                        }
                    </p>

                </div>


                {/* =================================================
                    CARD + IMAGE
                ================================================= */}

                <div
                    className="
                        grid

                        items-center

                        gap-10

                        md:gap-14

                        lg:grid-cols-[0.95fr_1.05fr]
                        lg:gap-16

                        xl:gap-20
                    "
                >


                    {/* =================================================
                        EVENT CARD
                    ================================================= */}

                    <article
                        className="
                            relative

                            overflow-hidden

                            rounded-[30px]

                            border
                            border-[#FFFDF8]/90

                            bg-[#FFFDF8]/55

                            px-6
                            py-10

                            text-center

                            shadow-[0_30px_80px_rgba(49,86,107,0.10)]

                            backdrop-blur-md

                            sm:px-8
                            sm:py-12

                            md:rounded-[36px]
                            md:px-10
                            md:py-14

                            lg:px-10
                            lg:py-16
                        "
                    >


                        {/* BLUE GLOW */}

                        <div
                            className="
                                pointer-events-none

                                absolute

                                -right-24
                                -top-24

                                h-[230px]
                                w-[230px]

                                rounded-full

                                bg-[#8FB4C7]/18

                                blur-[85px]
                            "
                        />


                        {/* ROSE GLOW */}

                        <div
                            className="
                                pointer-events-none

                                absolute

                                -bottom-28
                                -left-28

                                h-[250px]
                                w-[250px]

                                rounded-full

                                bg-[#D9A5AE]/15

                                blur-[95px]
                            "
                        />


                        <div
                            className="
                                relative
                                z-10
                            "
                        >


                            {/* =================================================
                                HEART
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

                                    text-lg

                                    text-[#C98792]

                                    shadow-[0_12px_35px_rgba(49,86,107,0.08)]

                                    sm:h-16
                                    sm:w-16
                                "
                            >

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
                                NHÀ GÁI / NHÀ TRAI
                            ================================================= */}

                            <p
                                className="
                                    mt-6

                                    text-[10px]
                                    font-medium

                                    uppercase

                                    tracking-[0.34em]

                                    text-[#C98792]

                                    sm:text-[11px]
                                "
                            >
                                {
                                    event
                                        .sideLabel
                                }
                            </p>


                            {/* =================================================
                                VENUE
                            ================================================= */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mx-auto

                                    mt-4

                                    max-w-md

                                    text-[32px]
                                    font-normal

                                    leading-tight

                                    tracking-[-0.015em]

                                    text-[#31566B]

                                    sm:text-4xl

                                    md:text-[40px]

                                    lg:text-[44px]
                                "
                            >
                                {
                                    event
                                        .venue
                                }
                            </h3>


                            {/* DIVIDER */}

                            <div
                                className="
                                    mx-auto
                                    mt-7

                                    flex

                                    items-center
                                    justify-center

                                    gap-3
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-11

                                        bg-gradient-to-r

                                        from-transparent
                                        to-[#B8A27D]/45
                                    "
                                />


                                <span
                                    className="
                                        text-[7px]

                                        text-[#C98792]
                                    "
                                >
                                    ✦
                                </span>


                                <span
                                    className="
                                        h-px
                                        w-11

                                        bg-gradient-to-l

                                        from-transparent
                                        to-[#B8A27D]/45
                                    "
                                />

                            </div>


                            {/* =================================================
                                EVENT INFORMATION
                            ================================================= */}

                            <div
                                className="
                                    font-wedding-serif

                                    mx-auto

                                    mt-8

                                    max-w-md

                                    space-y-7

                                    text-[#61726D]
                                "
                            >


                                {/* DATE */}

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-medium

                                            uppercase

                                            tracking-[0.24em]

                                            text-[#587589]

                                            sm:text-[11px]
                                        "
                                    >
                                        {
                                            event
                                                .dayLabel
                                        }
                                    </p>


                                    <p
                                        className="
                                            mt-2

                                            text-xl
                                            font-normal

                                            leading-7

                                            text-[#31566B]

                                            sm:text-2xl
                                        "
                                    >
                                        {
                                            event
                                                .displayDate
                                        }
                                    </p>

                                </div>


                                <div
                                    className="
                                        mx-auto

                                        h-px
                                        w-16

                                        bg-[#B8A27D]/25
                                    "
                                />


                                {/* =================================================
                                    TIME
                                ================================================= */}

                                <div
                                    className="
                                        grid

                                        grid-cols-2

                                        gap-5
                                    "
                                >


                                    <div>

                                        <p
                                            className="
                                                text-[10px]
                                                font-medium

                                                uppercase

                                                tracking-[0.2em]

                                                text-[#587589]

                                                sm:text-[11px]
                                            "
                                        >
                                            Đón khách
                                        </p>


                                        <p
                                            className="
                                                mt-2

                                                text-xl

                                                text-[#31566B]

                                                sm:text-2xl
                                            "
                                        >
                                            {
                                                event
                                                    .receptionTime
                                            }
                                        </p>

                                    </div>


                                    <div>

                                        <p
                                            className="
                                                text-[10px]
                                                font-medium

                                                uppercase

                                                tracking-[0.2em]

                                                text-[#587589]

                                                sm:text-[11px]
                                            "
                                        >
                                            Khai tiệc
                                        </p>


                                        <p
                                            className="
                                                mt-2

                                                text-xl

                                                text-[#31566B]

                                                sm:text-2xl
                                            "
                                        >
                                            {
                                                event
                                                    .partyTime
                                            }
                                        </p>

                                    </div>

                                </div>


                                <div
                                    className="
                                        mx-auto

                                        h-px
                                        w-16

                                        bg-[#B8A27D]/25
                                    "
                                />


                                {/* =================================================
                                    ADDRESS

                                    Tự thay đổi theo:
                                    bride / groom
                                ================================================= */}

                                <div>

                                    <p
                                        className="
                                            text-[10px]
                                            font-medium

                                            uppercase

                                            tracking-[0.22em]

                                            text-[#587589]

                                            sm:text-[11px]
                                        "
                                    >
                                        Địa điểm
                                    </p>


                                    <p
                                        className="
                                            mx-auto

                                            mt-2

                                            max-w-sm

                                            text-[16px]
                                            font-normal

                                            leading-7

                                            text-[#61726D]

                                            sm:text-[17px]
                                            sm:leading-8
                                        "
                                    >
                                        {
                                            event
                                                .address
                                        }
                                    </p>

                                </div>

                            </div>


                            {/* =================================================
                                MAP BUTTON ONLY
                            ================================================= */}

                            <div
                                className="
                                    mt-9

                                    flex

                                    justify-center
                                "
                            >

                                <a
                                    href={
                                        event
                                            .mapUrl
                                    }

                                    target="_blank"

                                    rel="noreferrer"

                                    className="
                                        inline-flex

                                        min-h-[52px]
                                        min-w-[190px]

                                        items-center
                                        justify-center

                                        rounded-full

                                        bg-[#31566B]

                                        px-8

                                        text-[10px]
                                        font-medium

                                        uppercase

                                        tracking-[0.17em]

                                        text-white

                                        shadow-[0_12px_30px_rgba(49,86,107,0.16)]

                                        transition-all
                                        duration-300

                                        hover:-translate-y-0.5

                                        hover:bg-[#587589]

                                        hover:shadow-[0_16px_38px_rgba(49,86,107,0.20)]

                                        sm:min-w-[200px]
                                    "
                                >
                                    Xem đường đi
                                </a>

                            </div>

                        </div>

                    </article>


                    {/* =================================================
                        EVENT IMAGE
                    ================================================= */}

                    <div
                        className="
                            relative

                            mx-auto

                            h-[420px]
                            w-full

                            max-w-[580px]

                            overflow-hidden

                            rounded-[30px]

                            border
                            border-[#FFFDF8]/90

                            bg-[#F1F3EB]

                            p-[6px]

                            shadow-[0_30px_80px_rgba(49,86,107,0.11)]

                            sm:h-[520px]

                            md:h-[620px]
                            md:rounded-[36px]

                            lg:h-[680px]
                        "
                    >

                        <div
                            className="
                                relative

                                h-full
                                w-full

                                overflow-hidden

                                rounded-[25px]

                                md:rounded-[31px]
                            "
                        >

                            <Image
                                src={
                                    event
                                        .image
                                }

                                alt={`Ngày chung đôi của ${wedding.groom.shortName} và ${wedding.bride.shortName}`}

                                fill

                                sizes="
                                    (max-width: 640px) 92vw,
                                    (max-width: 1024px) 80vw,
                                    52vw
                                "

                                className="
                                    object-cover
                                    object-center

                                    transition-transform
                                    duration-[1600ms]

                                    hover:scale-[1.025]
                                "
                            />


                            {/* IMAGE OVERLAY */}

                            <div
                                className="
                                    pointer-events-none

                                    absolute
                                    inset-0

                                    bg-gradient-to-t

                                    from-[#183747]/28
                                    via-transparent
                                    to-white/5
                                "
                            />


                            {/* IMAGE BADGE */}

                            <div
                                className="
                                    absolute

                                    bottom-5
                                    left-1/2

                                    -translate-x-1/2

                                    whitespace-nowrap

                                    rounded-full

                                    border
                                    border-white/40

                                    bg-[#183747]/18

                                    px-5
                                    py-2.5

                                    font-wedding-serif

                                    text-sm

                                    text-white/95

                                    shadow-lg

                                    backdrop-blur-md

                                    sm:bottom-6
                                    sm:text-base
                                "
                            >

                                {
                                    wedding
                                        .groom
                                        .shortName
                                }


                                <span
                                    className="
                                        mx-2

                                        text-[#F1B8C0]
                                    "
                                >
                                    ♥
                                </span>


                                {
                                    wedding
                                        .bride
                                        .shortName
                                }

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM DECORATION
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-16

                        flex

                        max-w-[380px]

                        items-center
                        justify-center

                        gap-4

                        sm:mt-20

                        md:mt-24
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#7A9CAC]/35
                        "
                    />


                    <span
                        className="
                            font-wedding-serif

                            whitespace-nowrap

                            text-[14px]
                            font-normal

                            italic

                            text-[#587589]/85

                            sm:text-[15px]
                        "
                    >
                        {
                            wedding
                                .eventSection
                                .bottomText
                        }
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#7A9CAC]/35
                        "
                    />

                </div>

            </div>

        </section>

    );
}