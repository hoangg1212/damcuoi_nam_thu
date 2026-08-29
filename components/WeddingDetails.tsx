/* =========================================================
   WEDDING DETAILS
   LỊCH CƯỚI + HAI GIA ĐÌNH + TÊN + NGHI LỄ + ĐỊA ĐIỂM
========================================================= */

"use client";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


type WeddingSide =
    "bride" |
    "groom";


type CeremonyData = {
    title: string;
    intro: string;
    time: string;
    weekday: string;
    day: string;
    month: string;
    year: string;
    lunarDate: string;
    venue: string;
    address: string;
    mapUrl: string;
};


/* =========================================================
   THỨ TRONG TUẦN
========================================================= */

const weekDays = [
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "CN",
];


/* =========================================================
   TẠO LỊCH THÁNG
========================================================= */

function buildCalendarDays(
    month: number,
    year: number
) {

    const firstDay =
        new Date(
            year,
            month - 1,
            1
        ).getDay();


    const mondayFirst =
        (
            firstDay + 6
        ) % 7;


    const totalDays =
        new Date(
            year,
            month,
            0
        ).getDate();


    const days:
        Array<number | null> =
        [];


    for (
        let i = 0;
        i < mondayFirst;
        i++
    ) {

        days.push(
            null
        );

    }


    for (
        let day = 1;
        day <= totalDays;
        day++
    ) {

        days.push(
            day
        );

    }


    while (
        days.length % 7 !== 0
    ) {

        days.push(
            null
        );

    }


    return days;
}


/* =========================================================
   NGÀY KHOANH TRÁI TIM
========================================================= */

function HeartDate({
    day,
}: {
    day: number;
}) {

    return (

        <div
            className="
                relative

                flex

                h-[40px]
                w-[44px]

                items-center
                justify-center

                sm:h-[46px]
                sm:w-[50px]

                md:h-[52px]
                md:w-[56px]
            "
        >

            <svg
                viewBox="0 0 64 58"

                fill="none"

                className="
                    absolute
                    inset-0

                    h-full
                    w-full
                "

                aria-hidden="true"
            >

                <path
                    d="
                        M32 52

                        C27 47
                        8 34
                        8 18

                        C8 9
                        14 4
                        22 4

                        C27 4
                        31 7
                        32 11

                        C34 7
                        38 4
                        43 4

                        C51 4
                        57 9
                        57 18

                        C57 34
                        38 47
                        32 52
                    "

                    stroke="#B8A27D"

                    strokeWidth="2"

                    strokeLinecap="round"

                    strokeLinejoin="round"
                />

            </svg>


            <span
                className="
                    relative

                    -translate-y-[2px]

                    font-wedding-serif

                    text-[16px]
                    font-medium

                    text-[#31566B]

                    sm:text-[19px]

                    md:text-[21px]
                "
            >
                {day}
            </span>

        </div>

    );
}


/* =========================================================
   LỊCH CƯỚI
========================================================= */

function WeddingCalendar({
    party,
    ceremony,
}: {
    party: CeremonyData;
    ceremony: CeremonyData;
}) {

    const month =
        Number(
            ceremony.month
        );


    const year =
        Number(
            ceremony.year
        );


    const partyDay =
        Number(
            party.day
        );


    const ceremonyDay =
        Number(
            ceremony.day
        );


    const calendarDays =
        useMemo(
            () =>
                buildCalendarDays(
                    month,
                    year
                ),
            [
                month,
                year,
            ]
        );


    return (

        <div
            className="
                relative

                mx-auto

                min-h-[410px]

                w-full
                max-w-[980px]

                overflow-hidden

                sm:min-h-[450px]

                md:min-h-[500px]
            "
        >

            {/* ẢNH CẶP ĐÔI CHÌM */}

            <div
                className="
                    absolute
                    inset-0
                "

                style={{
                    backgroundImage:
                        "url('/images/wedding-details-calendar-bg.jpg')",

                    backgroundSize:
                        "cover",

                    backgroundPosition:
                        "center",
                }}
            />


            {/* LỚP PHỦ MỜ */}

            <div
                className="
                    absolute
                    inset-0

                    bg-[#FFFDF8]/68
                "
            />


            {/* BLUE MIST */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-24
                    top-[10%]

                    h-[280px]
                    w-[280px]

                    rounded-full

                    bg-[#8FB4C7]/13

                    blur-[90px]
                "
            />


            {/* ROSE MIST */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-24
                    bottom-[5%]

                    h-[280px]
                    w-[280px]

                    rounded-full

                    bg-[#D9A5AE]/12

                    blur-[95px]
                "
            />


            {/* FADE */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[linear-gradient(to_bottom,#EEF4F6_0%,rgba(238,244,246,0.10)_14%,rgba(255,253,248,0.06)_76%,#F6F6ED_100%)]
                "
            />


            {/* CONTENT */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    flex
                    min-h-[410px]

                    max-w-[760px]

                    flex-col
                    justify-center

                    px-3
                    py-7

                    sm:min-h-[450px]
                    sm:px-8
                    sm:py-8

                    md:min-h-[500px]
                    md:px-10
                    md:py-9
                "
            >

                {/* THÁNG */}

                <div
                    className="
                        text-center
                    "
                >

                    <p
                        className="
                            font-wedding

                            text-[50px]

                            leading-none

                            text-[#587589]

                            drop-shadow-[0_2px_8px_rgba(255,253,248,0.7)]

                            sm:text-[64px]

                            md:text-[76px]
                        "
                    >
                        Tháng {month}
                    </p>


                    <p
                        className="
        font-wedding-serif

        mt-2

        text-[14px]
        font-medium

        uppercase

        tracking-[0.24em]

        text-[#C98792]

        sm:text-[16px]

        md:text-[18px]
    "
                    >
                        {year}
                    </p>

                </div>


                {/* LỊCH */}

                <div
                    className="
                        mx-auto

                        mt-5

                        w-full
                        max-w-[650px]

                        sm:mt-6

                        md:mt-7
                    "
                >

                    {/* THỨ */}

                    <div
                        className="
                            grid
                            grid-cols-7
                        "
                    >

                        {
                            weekDays.map(
                                (
                                    day
                                ) => (

                                    <div
                                        key={
                                            day
                                        }

                                        className="
                                            text-center
                                        "
                                    >

                                        <span
                                            className="
                                                font-wedding-serif

                                                text-[11px]
                                                font-medium

                                                tracking-[0.08em]

                                                text-[#587589]

                                                sm:text-[13px]

                                                md:text-[15px]
                                            "
                                        >
                                            {day}
                                        </span>

                                    </div>

                                )
                            )
                        }

                    </div>


                    {/* NGÀY */}

                    <div
                        className="
                            mt-2

                            grid
                            grid-cols-7

                            gap-y-0

                            sm:mt-3
                            sm:gap-y-1
                        "
                    >

                        {
                            calendarDays.map(
                                (
                                    day,
                                    index
                                ) => {

                                    if (
                                        day === null
                                    ) {

                                        return (

                                            <div
                                                key={
                                                    `empty-${index}`
                                                }

                                                className="
                                                    h-[40px]

                                                    sm:h-[46px]

                                                    md:h-[52px]
                                                "
                                            />

                                        );

                                    }


                                    const isSpecial =
                                        day ===
                                        partyDay ||
                                        day ===
                                        ceremonyDay;


                                    return (

                                        <div
                                            key={
                                                day
                                            }

                                            className="
                                                flex

                                                h-[40px]

                                                items-center
                                                justify-center

                                                sm:h-[46px]

                                                md:h-[52px]
                                            "
                                        >

                                            {
                                                isSpecial ? (

                                                    <HeartDate
                                                        day={
                                                            day
                                                        }
                                                    />

                                                ) : (

                                                    <span
                                                        className="
                                                            font-wedding-serif

                                                            text-[15px]

                                                            text-[#61726D]

                                                            sm:text-[18px]

                                                            md:text-[20px]
                                                        "
                                                    >
                                                        {day}
                                                    </span>

                                                )
                                            }

                                        </div>

                                    );

                                }
                            )
                        }

                    </div>

                </div>


                {/* CHÚ THÍCH */}

                {/* =================================================
    CHÚ THÍCH NGÀY CƯỚI
================================================= */}

                <div
                    className="
        mx-auto

        mt-5

        flex

        max-w-[620px]

        flex-col

        items-center
        justify-center

        gap-1.5

        text-center

        sm:mt-6
        sm:flex-row
        sm:gap-6
    "
                >

                    <span
                        className="
            font-wedding-serif

            text-[15px]
            font-medium

            italic

            leading-6

            text-[#587589]

            sm:text-[17px]

            md:text-[19px]
        "
                    >
                        {party.day} · Bữa tiệc chung vui
                    </span>


                    <span
                        className="
            hidden

            h-1.5
            w-1.5

            rounded-full

            bg-[#C98792]/75

            sm:block
        "
                    />


                    <span
                        className="
            font-wedding-serif

            text-[15px]
            font-medium

            italic

            leading-6

            text-[#587589]

            sm:text-[17px]

            md:text-[19px]
        "
                    >
                        {ceremony.day} · {ceremony.title}
                    </span>

                </div>

            </div>

        </div>

    );
}


/* =========================================================
   THÔNG TIN GIA ĐÌNH
========================================================= */

function FamilyItem({
    label,
    fatherPrefix,
    father,
    motherPrefix,
    mother,
    address,
}: {
    label: string;
    fatherPrefix: string;
    father: string;
    motherPrefix: string;
    mother: string;
    address: string;
}) {

    return (

        <div
            className="
                min-w-0
                flex-1

                px-2

                text-center

                sm:px-5

                md:px-10
            "
        >

            {/* NHÀ TRAI / NHÀ GÁI */}

            <p
                className="
                    font-wedding-serif

                    text-[16px]
                    font-medium

                    uppercase

                    tracking-[0.12em]

                    text-[#587589]

                    sm:text-[19px]

                    md:text-[22px]

                    lg:text-[24px]
                "
            >
                {label}
            </p>


            {/* CHA MẸ */}

            <div
                className="
                    font-wedding-serif

                    mt-3

                    space-y-0.5

                    text-[14px]

                    leading-6

                    text-[#61726D]

                    sm:text-[17px]
                    sm:leading-7

                    md:text-[20px]
                    md:leading-8

                    lg:text-[22px]
                "
            >

                <p>
                    {fatherPrefix}. {father}
                </p>


                <p>
                    {motherPrefix}. {mother}
                </p>

            </div>


            {/* ĐƯỜNG KẺ */}

            <div
                className="
                    mx-auto

                    my-3

                    h-px
                    w-10

                    bg-gradient-to-r

                    from-transparent
                    via-[#B8A27D]/55
                    to-transparent

                    sm:w-14
                "
            />


            {/* ĐỊA CHỈ NHÀ */}

            <p
                className="
                    font-wedding-serif

                    mx-auto

                    max-w-[240px]

                    text-[12px]

                    italic

                    leading-5

                    text-[#587589]/75

                    sm:max-w-[300px]
                    sm:text-[14px]
                    sm:leading-6

                    md:text-[16px]
                    md:leading-7
                "
            >
                {address}
            </p>

        </div>

    );
}


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

                py-1
            "
            aria-hidden="true"
        >

            <svg
                viewBox="0 0 500 100"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="
                    h-[76px]
                    w-full

                    overflow-visible

                    md:h-[88px]
                "
            >

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
   THÔNG TIN NGHI LỄ
   KHÔNG HIỂN THỊ ĐỊA CHỈ / MAP Ở ĐÂY
========================================================= */

function CeremonyBlock({
    data,
    showRings = false,
}: {
    data: CeremonyData;
    showRings?: boolean;
}) {

    return (

        <div
            className="
                mx-auto

                max-w-[860px]

                text-center
            "
        >

            {
                showRings && (

                    <RingDecoration />

                )
            }


            {/* TÊN LỄ */}

            <p
                className="
                    font-wedding-serif

                    text-[25px]
                    font-medium

                    uppercase

                    tracking-[0.05em]

                    text-[#587589]

                    sm:text-[30px]

                    md:text-[36px]

                    lg:text-[40px]
                "
            >
                {data.title}
            </p>


            {/* GIỜ */}

            <p
                className="
                    font-wedding-serif

                    mt-3

                    text-[16px]

                    uppercase

                    leading-7

                    tracking-[0.02em]

                    text-[#61726D]

                    sm:text-[19px]
                    sm:leading-8

                    md:text-[22px]
                "
            >

                {data.intro}{" "}


                <span
                    className="
                        font-medium

                        text-[#31566B]
                    "
                >
                    {data.time}
                </span>


                , {data.weekday}

            </p>


            {/* NGÀY THÁNG */}

            <div
                className="
                    mx-auto

                    mt-6

                    grid

                    max-w-[650px]

                    grid-cols-[1fr_auto_1fr]

                    items-center

                    gap-3

                    sm:gap-7

                    md:mt-7
                "
            >

                {/* THÁNG */}

                <div
                    className="
                        border-y
                        border-[#B8A27D]/60

                        py-2

                        sm:py-2.5
                    "
                >

                    <p
                        className="
                            font-wedding-serif

                            text-[13px]

                            uppercase

                            tracking-[0.08em]

                            text-[#587589]

                            sm:text-[16px]

                            md:text-[18px]
                        "
                    >
                        Tháng {data.month}
                    </p>

                </div>


                {/* NGÀY */}

                <p
                    className="
                        font-wedding-serif

                        min-w-[88px]

                        text-[74px]
                        font-light

                        leading-none

                        text-[#31566B]

                        sm:min-w-[110px]
                        sm:text-[92px]

                        md:min-w-[130px]
                        md:text-[104px]
                    "
                >
                    {data.day}
                </p>


                {/* NĂM */}

                <div
                    className="
                        border-y
                        border-[#B8A27D]/60

                        py-2

                        sm:py-2.5
                    "
                >

                    <p
                        className="
                            font-wedding-serif

                            text-[13px]

                            uppercase

                            tracking-[0.08em]

                            text-[#587589]

                            sm:text-[16px]

                            md:text-[18px]
                        "
                    >
                        Năm {data.year}
                    </p>

                </div>

            </div>


            {/* ÂM LỊCH */}

            <p
                className="
                    font-wedding-serif

                    mt-3

                    text-[15px]

                    italic

                    text-[#61726D]/80

                    sm:text-[17px]

                    md:text-[18px]
                "
            >
                ({data.lunarDate})
            </p>

        </div>

    );
}


/* =========================================================
   ĐỊA ĐIỂM
   CHỈ HIỂN THỊ DUY NHẤT 1 LẦN
========================================================= */

function LocationBlock({
    data,
}: {
    data: CeremonyData;
}) {

    return (

        <div
            className="
                mx-auto

                mt-8

                max-w-[760px]

                text-center

                sm:mt-9

                md:mt-10
            "
        >

            {/* DECORATION */}

            <div
                className="
                    mx-auto

                    mb-5

                    flex

                    max-w-[420px]

                    items-center
                    justify-center

                    gap-4
                "
            >

                <span
                    className="
                        h-px
                        flex-1

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />


                <span
                    className="
                        text-[10px]

                        text-[#C98792]
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        flex-1

                        bg-gradient-to-l

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />

            </div>


            {/* TƯ GIA */}

            <p
                className="
                    font-wedding-serif

                    text-[18px]
                    font-medium

                    uppercase

                    tracking-[0.06em]

                    text-[#587589]

                    sm:text-[21px]

                    md:text-[24px]

                    lg:text-[26px]
                "
            >
                {data.venue}
            </p>


            {/* ĐỊA CHỈ */}

            <p
                className="
                    font-wedding-serif

                    mx-auto

                    mt-2

                    max-w-[680px]

                    text-[16px]

                    leading-7

                    text-[#61726D]

                    sm:text-[18px]
                    sm:leading-8

                    md:text-[20px]
                "
            >
                {data.address}
            </p>


            {/* MAP */}

            <a
                href={
                    data.mapUrl
                }

                target="_blank"

                rel="noreferrer"

                className="
                    mt-5

                    inline-flex

                    min-h-[50px]
                    min-w-[200px]

                    items-center
                    justify-center

                    rounded-full

                    bg-[#31566B]

                    px-9

                    text-[11px]
                    font-medium

                    uppercase

                    tracking-[0.16em]

                    text-white

                    shadow-[0_12px_30px_rgba(49,86,107,0.14)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5

                    hover:bg-[#587589]

                    hover:shadow-[0_16px_35px_rgba(49,86,107,0.18)]

                    sm:min-h-[54px]
                    sm:min-w-[220px]
                "
            >
                Xem chỉ đường
            </a>

        </div>

    );
}


/* =========================================================
   MAIN
========================================================= */

export default function WeddingDetails() {

    const [
        side,
        setSide,
    ] =
        useState<WeddingSide>(
            "groom"
        );


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


    const party =
        wedding
            .ceremonies
            .party[
        side
        ];


    const ceremony =
        wedding
            .ceremonies
            .ceremony[
        side
        ];


    return (

        <section
            id="event"

            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#EEF4F6_0%,#F6F6ED_27%,#FAF4EF_62%,#EEF4F6_100%)]

                px-5
                py-14

                sm:px-6
                sm:py-16

                md:px-8
                md:py-20

                lg:py-24
            "
        >


            {/* BLUE GLOW */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-40
                    top-[12%]

                    h-[430px]
                    w-[430px]

                    rounded-full

                    bg-[#8FB4C7]/16

                    blur-[130px]
                "
            />


            {/* ROSE GLOW */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    top-[50%]

                    h-[450px]
                    w-[450px]

                    rounded-full

                    bg-[#D9A5AE]/15

                    blur-[140px]
                "
            />


            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1200px]
                "
            >


                {/* =================================================
                    1. LỊCH
                ================================================= */}

                <WeddingCalendar
                    party={
                        party
                    }

                    ceremony={
                        ceremony
                    }
                />


                {/* DIVIDER */}

                <div
                    className="
                        mx-auto

                        my-9

                        flex

                        max-w-[680px]

                        items-center
                        justify-center

                        gap-4

                        md:my-12
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#B8A27D]/40
                        "
                    />


                    <span
                        className="
                            text-[10px]

                            text-[#C98792]
                        "
                    >
                        ♡
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/40
                        "
                    />

                </div>


                {/* =================================================
                    2. NHÀ TRAI / NHÀ GÁI
                ================================================= */}

                <div
                    className="
                        mx-auto

                        max-w-[980px]
                    "
                >

                    <div
                        className="
                            flex

                            items-start
                            justify-center
                        "
                    >

                        {/* NHÀ TRAI */}

                        <FamilyItem
                            label={
                                wedding
                                    .families
                                    .groom
                                    .label
                            }

                            fatherPrefix={
                                wedding
                                    .families
                                    .groom
                                    .fatherPrefix
                            }

                            father={
                                wedding
                                    .families
                                    .groom
                                    .father
                            }

                            motherPrefix={
                                wedding
                                    .families
                                    .groom
                                    .motherPrefix
                            }

                            mother={
                                wedding
                                    .families
                                    .groom
                                    .mother
                            }

                            address={
                                wedding
                                    .families
                                    .groom
                                    .address
                            }
                        />


                        {/* CENTER LINE */}

                        <span
                            className="
                                mt-1

                                h-[135px]
                                w-px

                                bg-gradient-to-b

                                from-transparent
                                via-[#B8A27D]/50
                                to-transparent

                                sm:h-[150px]

                                md:h-[170px]
                            "
                        />


                        {/* NHÀ GÁI */}

                        <FamilyItem
                            label={
                                wedding
                                    .families
                                    .bride
                                    .label
                            }

                            fatherPrefix={
                                wedding
                                    .families
                                    .bride
                                    .fatherPrefix
                            }

                            father={
                                wedding
                                    .families
                                    .bride
                                    .father
                            }

                            motherPrefix={
                                wedding
                                    .families
                                    .bride
                                    .motherPrefix
                            }

                            mother={
                                wedding
                                    .families
                                    .bride
                                    .mother
                            }

                            address={
                                wedding
                                    .families
                                    .bride
                                    .address
                            }
                        />

                    </div>


                    {/* =================================================
                        3. TÊN CÔ DÂU / CHÚ RỂ
                    ================================================= */}

                    <div
                        className="
                            mt-8

                            text-center

                            sm:mt-9

                            md:mt-10
                        "
                    >


                        {/* TRƯỞNG NAM */}

                        <p
                            className="
                                font-wedding-serif

                                text-[11px]
                                font-medium

                                uppercase

                                tracking-[0.28em]

                                text-[#C98792]

                                sm:text-[13px]

                                md:text-[14px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .subTitle
                            }
                        </p>


                        {/* CHÚ RỂ */}

                        <p
                            className="
                                font-wedding

                                mt-1

                                text-[64px]

                                leading-[0.9]

                                text-[#31566B]

                                sm:text-[80px]

                                md:text-[100px]

                                lg:text-[112px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .fullName
                            }
                        </p>


                        {/* & */}

                        <div
                            className="
                                my-2

                                flex

                                items-center
                                justify-center

                                gap-4

                                md:my-3
                            "
                        >

                            <span
                                className="
                                    h-px
                                    w-12

                                    bg-gradient-to-r

                                    from-transparent
                                    to-[#B8A27D]/45
                                "
                            />


                            <span
                                className="
                                    font-wedding-serif

                                    text-[25px]

                                    italic

                                    text-[#C98792]

                                    md:text-[32px]
                                "
                            >
                                &
                            </span>


                            <span
                                className="
                                    h-px
                                    w-12

                                    bg-gradient-to-l

                                    from-transparent
                                    to-[#B8A27D]/45
                                "
                            />

                        </div>


                        {/* TRƯỞNG NỮ */}

                        <p
                            className="
                                font-wedding-serif

                                text-[11px]
                                font-medium

                                uppercase

                                tracking-[0.28em]

                                text-[#C98792]

                                sm:text-[13px]

                                md:text-[14px]
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .subTitle
                            }
                        </p>


                        {/* CÔ DÂU */}

                        <p
                            className="
                                font-wedding

                                mt-1

                                text-[64px]

                                leading-[0.9]

                                text-[#31566B]

                                sm:text-[80px]

                                md:text-[100px]

                                lg:text-[112px]
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .fullName
                            }
                        </p>

                    </div>

                </div>


                {/* DIVIDER */}

                <div
                    className="
                        mx-auto

                        my-11

                        flex

                        max-w-[700px]

                        items-center
                        justify-center

                        gap-4

                        md:my-14
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#B8A27D]/45
                        "
                    />


                    <span
                        className="
                            text-[9px]

                            text-[#C98792]
                        "
                    >
                        ♥
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/45
                        "
                    />

                </div>


                {/* =================================================
                    4. BỮA TIỆC CHUNG VUI
                ================================================= */}

                <CeremonyBlock
                    data={
                        party
                    }
                />


                {/* =================================================
                    5. LỄ THÀNH HÔN / LỄ VU QUY
                ================================================= */}

                <CeremonyBlock
                    data={
                        ceremony
                    }

                    showRings
                />


                {/* =================================================
                    6. ĐỊA ĐIỂM
                    CHỈ HIỂN THỊ 1 LẦN
                ================================================= */}

                <LocationBlock
                    data={
                        ceremony
                    }
                />


                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-11

                        flex

                        max-w-[620px]

                        items-center
                        justify-center

                        gap-4

                        sm:mt-12

                        md:mt-14
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

                            max-w-[340px]

                            text-center

                            text-[14px]

                            italic

                            leading-7

                            text-[#587589]/85

                            sm:text-[17px]

                            md:text-[18px]
                        "
                    >
                        {
                            wedding
                                .weddingDetailsSection
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