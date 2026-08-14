"use client";

import Image from "next/image";

import { wedding } from "@/data/wedding";


function toICSDate(
    iso:
        string
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
                bg-[#fffdf9]

                px-5
                py-24

                md:py-36
            "
        >

            <div
                className="
                    mx-auto
                    max-w-[1160px]
                "
            >

                <div
                    className="
                        mx-auto
                        mb-16

                        max-w-2xl

                        text-center
                    "
                >

                    <p
                        className="
                            mb-4

                            text-[9px]

                            uppercase

                            tracking-[0.4em]

                            text-[#8c7558]
                        "
                    >
                        Trân trọng kính mời
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            text-5xl

                            md:text-7xl
                        "
                    >
                        Ngày chung đôi
                    </h2>


                    <p
                        className="
                            font-wedding-serif

                            mt-6

                            text-lg
                            leading-8

                            text-[#746e67]
                        "
                    >
                        Trong ngày ý nghĩa nhất của cuộc đời, Nam và Thư sẽ thật hạnh phúc khi được đón bạn đến chung vui và cùng lưu lại những khoảnh khắc đáng nhớ.
                    </p>

                </div>


                <div
                    className="
                        grid

                        items-center

                        gap-14

                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:gap-20
                    "
                >

                    <article
                        className="
                            border
                            border-black/10

                            bg-[#f3efe9]

                            px-6
                            py-12

                            text-center

                            md:px-12
                            md:py-16
                        "
                    >

                        <span
                            className="
                                font-wedding-serif

                                text-4xl

                                text-[#b49a78]
                            "
                        >
                            ♡
                        </span>


                        <p
                            className="
                                mt-3

                                text-[9px]

                                uppercase

                                tracking-[0.4em]

                                text-[#8c7558]
                            "
                        >
                            Lễ thành hôn
                        </p>


                        <h3
                            className="
                                font-wedding-serif

                                mt-5

                                text-4xl
                            "
                        >
                            {wedding.event.venue}
                        </h3>


                        <div
                            className="
                                font-wedding-serif

                                mt-8

                                space-y-5

                                text-lg

                                text-[#746e67]
                            "
                        >

                            <p>
                                <strong
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        uppercase

                                        tracking-[0.2em]

                                        text-[#292622]
                                    "
                                >
                                    Chủ Nhật
                                </strong>

                                {wedding.displayDate}
                            </p>


                            <p>
                                <strong
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        uppercase

                                        tracking-[0.2em]

                                        text-[#292622]
                                    "
                                >
                                    {wedding.event.receptionTime}
                                </strong>

                                Đón khách
                            </p>


                            <p>
                                <strong
                                    className="
                                        block

                                        text-[9px]
                                        font-medium

                                        uppercase

                                        tracking-[0.2em]

                                        text-[#292622]
                                    "
                                >
                                    {wedding.event.partyTime}
                                </strong>

                                Khai tiệc
                            </p>


                            <p>
                                {wedding.event.address}
                            </p>

                        </div>


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
                                    wedding.event.mapUrl
                                }

                                target="_blank"

                                rel="noreferrer"

                                className="
                                    bg-[#292622]

                                    px-6
                                    py-4

                                    text-[9px]
                                    font-medium

                                    uppercase

                                    tracking-[0.18em]

                                    text-white

                                    transition-colors

                                    hover:bg-[#8c7558]
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
                                    border
                                    border-[#b49a78]

                                    px-6
                                    py-4

                                    text-[9px]
                                    font-medium

                                    uppercase

                                    tracking-[0.18em]

                                    text-[#8c7558]

                                    transition-colors

                                    hover:bg-[#8c7558]
                                    hover:text-white
                                "
                            >
                                Lưu ngày cưới
                            </button>

                        </div>

                    </article>


                    <div
                        className="
                            relative

                            h-[520px]

                            md:h-[680px]
                        "
                    >

                        <Image
                            src="/images/gallery-01.jpg"

                            alt="Ngày chung đôi của Nam và Thư"

                            fill

                            sizes="
                                (max-width:1024px) 100vw,
                                55vw
                            "

                            className="
                                object-cover

                                shadow-[0_30px_80px_rgba(35,30,25,0.12)]
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}