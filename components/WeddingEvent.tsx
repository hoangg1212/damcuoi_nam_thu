"use client";

import Image from "next/image";

import { wedding } from "@/data/wedding";


function toICSDate(
    iso: string
) {

    return new Date(
        iso
    )
        .toISOString()
        .replace(
            /[-:]/g,
            ""
        )
        .replace(
            /\.\d{3}Z$/,
            "Z"
        );
}


export default function WeddingEvent() {

    function addCalendar() {

        const start =
            toICSDate(
                wedding.event.startISO
            );


        const end =
            toICSDate(
                wedding.event.endISO
            );


        const content =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//NamThuWedding//VN
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTSTART:${start}
DTEND:${end}
SUMMARY:${wedding.event.title}
LOCATION:${wedding.event.address}
DESCRIPTION:Trân trọng kính mời bạn đến chung vui cùng Nguyễn Nam và Huỳnh Thư.
END:VEVENT
END:VCALENDAR`;


        const blob =
            new Blob(
                [content],
                {
                    type:
                        "text/calendar;charset=utf-8",
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const anchor =
            document.createElement(
                "a"
            );


        anchor.href =
            url;


        anchor.download =
            "ngay-cuoi-nam-thu.ics";


        anchor.click();


        URL.revokeObjectURL(
            url
        );

    }


    return (

        <section
            id="event"

            className="
                relative
                overflow-hidden

                bg-gradient-to-b

                from-[#fffaf7]
                via-[#faf2ed]
                to-[#f7ebe5]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
            "
        >


            {/* ====================================== */}
            {/* BACKGROUND DECORATION */}
            {/* ====================================== */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-40
                    top-[15%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#e7b8ad]/18

                    blur-[120px]

                    md:h-[480px]
                    md:w-[480px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-[10%]

                    h-[400px]
                    w-[400px]

                    rounded-full

                    bg-[#ddc2a3]/20

                    blur-[130px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* TOP DECORATION */}

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
                        w-8

                        bg-gradient-to-r

                        from-transparent
                        to-[#b98777]/45
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#b77969]/70
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
                        to-[#b98777]/45
                    "
                />

            </div>


            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1200px]
                "
            >


                {/* ====================================== */}
                {/* HEADING */}
                {/* ====================================== */}

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
                            text-[11px]
                            font-semibold

                            uppercase

                            tracking-[0.28em]

                            text-[#9d6f63]

                            sm:text-xs
                            sm:tracking-[0.32em]
                        "
                    >
                        Trân trọng kính mời
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            mt-4

                            text-[42px]
                            font-light

                            leading-tight

                            text-[#4d3d37]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-7xl
                        "
                    >
                        Ngày chung đôi
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
                                w-10

                                bg-[#c79b8d]/45

                                sm:w-14
                            "
                        />


                        <span
                            className="
                                text-[9px]

                                text-[#b77969]
                            "
                        >
                            ♡
                        </span>


                        <span
                            className="
                                h-px
                                w-10

                                bg-[#c79b8d]/45

                                sm:w-14
                            "
                        />

                    </div>


                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-6

                            max-w-2xl

                            text-[16px]

                            leading-7

                            text-[#64534c]

                            sm:text-lg
                            sm:leading-8

                            md:text-xl
                            md:leading-9
                        "
                    >
                        Trong ngày ý nghĩa nhất của cuộc đời,
                        Nam và Thư sẽ thật hạnh phúc khi được đón bạn
                        đến chung vui và cùng lưu lại những khoảnh khắc đáng nhớ.
                    </p>

                </div>


                {/* ====================================== */}
                {/* MAIN EVENT */}
                {/* ====================================== */}

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


                    {/* ====================================== */}
                    {/* EVENT CARD */}
                    {/* ====================================== */}

                    <article
                        className="
                            relative

                            overflow-hidden

                            rounded-[30px]

                            border
                            border-white/80

                            bg-white/55

                            px-6
                            py-10

                            text-center

                            shadow-[0_30px_80px_rgba(102,68,57,0.10)]

                            backdrop-blur-sm

                            sm:px-8
                            sm:py-12

                            md:rounded-[36px]
                            md:px-10
                            md:py-14

                            lg:px-10
                            lg:py-16
                        "
                    >


                        {/* CARD GLOW */}

                        <div
                            className="
                                pointer-events-none

                                absolute

                                -right-24
                                -top-24

                                h-[220px]
                                w-[220px]

                                rounded-full

                                bg-[#efc9be]/25

                                blur-[80px]
                            "
                        />


                        <div
                            className="
                                pointer-events-none

                                absolute

                                -bottom-28
                                -left-28

                                h-[240px]
                                w-[240px]

                                rounded-full

                                bg-[#e6cfad]/25

                                blur-[90px]
                            "
                        />


                        <div
                            className="
                                relative
                                z-10
                            "
                        >


                            {/* HEART */}

                            <div
                                className="
                                    mx-auto

                                    flex

                                    h-14
                                    w-14

                                    items-center
                                    justify-center

                                    rounded-full

                                    border
                                    border-[#c69a8c]/35

                                    bg-[#fffaf7]/70

                                    text-lg

                                    text-[#b77969]

                                    shadow-[0_12px_35px_rgba(133,83,68,0.08)]

                                    sm:h-16
                                    sm:w-16
                                "
                            >
                                ♥
                            </div>


                            {/* EVENT TYPE */}

                            <p
                                className="
                                    mt-5

                                    text-[11px]
                                    font-semibold

                                    uppercase

                                    tracking-[0.3em]

                                    text-[#9a6c60]

                                    sm:text-xs
                                "
                            >
                                Lễ thành hôn
                            </p>


                            {/* VENUE */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mx-auto

                                    mt-4

                                    max-w-md

                                    text-[30px]
                                    font-normal

                                    leading-tight

                                    text-[#493a34]

                                    sm:text-4xl

                                    md:text-[40px]

                                    lg:text-[42px]
                                "
                            >
                                {wedding.event.venue}
                            </h3>


                            {/* SMALL DIVIDER */}

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
                                        w-10

                                        bg-[#c69b8d]/35
                                    "
                                />


                                <span
                                    className="
                                        text-[7px]

                                        text-[#b77969]
                                    "
                                >
                                    ✦
                                </span>


                                <span
                                    className="
                                        h-px
                                        w-10

                                        bg-[#c69b8d]/35
                                    "
                                />

                            </div>


                            {/* ====================================== */}
                            {/* EVENT INFO */}
                            {/* ====================================== */}

                            <div
                                className="
                                    font-wedding-serif

                                    mx-auto

                                    mt-8

                                    max-w-md

                                    space-y-7

                                    text-[#5e4d46]
                                "
                            >


                                {/* DATE */}

                                <div>

                                    <p
                                        className="
                                            text-[11px]
                                            font-semibold

                                            uppercase

                                            tracking-[0.22em]

                                            text-[#98695d]

                                            sm:text-xs
                                        "
                                    >
                                        Chủ Nhật
                                    </p>


                                    <p
                                        className="
                                            mt-2

                                            text-xl

                                            leading-7

                                            text-[#4c3c36]

                                            sm:text-2xl
                                        "
                                    >
                                        {wedding.displayDate}
                                    </p>

                                </div>


                                {/* DIVIDER */}

                                <div
                                    className="
                                        mx-auto

                                        h-px
                                        w-16

                                        bg-[#c69c8f]/25
                                    "
                                />


                                {/* TIME */}

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
                                                text-[11px]
                                                font-semibold

                                                uppercase

                                                tracking-[0.18em]

                                                text-[#98695d]

                                                sm:text-xs
                                            "
                                        >
                                            Đón khách
                                        </p>


                                        <p
                                            className="
                                                mt-2

                                                text-xl

                                                text-[#4c3c36]

                                                sm:text-2xl
                                            "
                                        >
                                            {
                                                wedding
                                                    .event
                                                    .receptionTime
                                            }
                                        </p>

                                    </div>


                                    <div>

                                        <p
                                            className="
                                                text-[11px]
                                                font-semibold

                                                uppercase

                                                tracking-[0.18em]

                                                text-[#98695d]

                                                sm:text-xs
                                            "
                                        >
                                            Khai tiệc
                                        </p>


                                        <p
                                            className="
                                                mt-2

                                                text-xl

                                                text-[#4c3c36]

                                                sm:text-2xl
                                            "
                                        >
                                            {
                                                wedding
                                                    .event
                                                    .partyTime
                                            }
                                        </p>

                                    </div>

                                </div>


                                {/* DIVIDER */}

                                <div
                                    className="
                                        mx-auto

                                        h-px
                                        w-16

                                        bg-[#c69c8f]/25
                                    "
                                />


                                {/* ADDRESS */}

                                <div>

                                    <p
                                        className="
                                            text-[11px]
                                            font-semibold

                                            uppercase

                                            tracking-[0.2em]

                                            text-[#98695d]

                                            sm:text-xs
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

                                            leading-7

                                            text-[#594841]

                                            sm:text-[17px]
                                            sm:leading-8
                                        "
                                    >
                                        {
                                            wedding
                                                .event
                                                .address
                                        }
                                    </p>

                                </div>

                            </div>


                            {/* ====================================== */}
                            {/* BUTTONS */}
                            {/* ====================================== */}

                            <div
                                className="
                                    mt-9

                                    flex
                                    flex-col

                                    gap-3

                                    sm:flex-row
                                    sm:justify-center
                                "
                            >


                                <a
                                    href={
                                        wedding
                                            .event
                                            .mapUrl
                                    }

                                    target="_blank"

                                    rel="noreferrer"

                                    className="
                                        inline-flex

                                        min-h-[50px]

                                        items-center
                                        justify-center

                                        rounded-full

                                        bg-[#59443c]

                                        px-7

                                        text-[11px]
                                        font-semibold

                                        uppercase

                                        tracking-[0.15em]

                                        text-white

                                        shadow-[0_12px_30px_rgba(79,55,46,0.15)]

                                        transition-all
                                        duration-300

                                        hover:-translate-y-0.5
                                        hover:bg-[#a66f61]

                                        sm:min-w-[170px]
                                    "
                                >
                                    Xem đường đi
                                </a>


                                <button
                                    type="button"

                                    onClick={
                                        addCalendar
                                    }

                                    className="
                                        inline-flex

                                        min-h-[50px]

                                        items-center
                                        justify-center

                                        rounded-full

                                        border
                                        border-[#b98576]/45

                                        bg-white/40

                                        px-7

                                        text-[11px]
                                        font-semibold

                                        uppercase

                                        tracking-[0.15em]

                                        text-[#8e6257]

                                        transition-all
                                        duration-300

                                        hover:-translate-y-0.5

                                        hover:border-[#a66f61]
                                        hover:bg-[#a66f61]
                                        hover:text-white

                                        sm:min-w-[170px]
                                    "
                                >
                                    Lưu ngày cưới
                                </button>

                            </div>

                        </div>

                    </article>


                    {/* ====================================== */}
                    {/* EVENT IMAGE */}
                    {/* ====================================== */}

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
                            border-white/80

                            bg-[#eee4de]

                            p-[6px]

                            shadow-[0_30px_80px_rgba(73,51,43,0.12)]

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
                                src="/images/event.png"

                                alt="Ngày chung đôi của Nam và Thư"

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


                            {/* IMAGE LIGHT */}

                            <div
                                className="
                                    pointer-events-none

                                    absolute
                                    inset-0

                                    bg-gradient-to-t

                                    from-[#362720]/25
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

                                    bg-black/15

                                    px-5
                                    py-2.5

                                    font-wedding-serif

                                    text-sm

                                    text-white/90

                                    shadow-lg

                                    backdrop-blur-md

                                    sm:bottom-6
                                    sm:text-base
                                "
                            >
                                Nam ♥ Thư
                            </div>

                        </div>

                    </div>

                </div>


                {/* ====================================== */}
                {/* BOTTOM DECORATION */}
                {/* ====================================== */}

                <div
                    className="
                        mx-auto

                        mt-16

                        flex

                        max-w-[270px]

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
                            to-[#b98777]/35
                        "
                    />


                    <span
                        className="
                            font-wedding-serif

                            whitespace-nowrap

                            text-[11px]
                            italic

                            text-[#86655b]/75

                            sm:text-xs
                        "
                    >
                        Hẹn gặp bạn trong ngày vui
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#b98777]/35
                        "
                    />

                </div>

            </div>

        </section>

    );
}