"use client";

import Image from "next/image";

import {
    useEffect,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


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


export default function Countdown() {

    const [
        time,
        setTime,
    ] =
        useState<TimeLeft>(
            calculateTime()
        );


    useEffect(() => {

        const interval =
            setInterval(
                () => {

                    setTime(
                        calculateTime()
                    );

                },
                1000
            );


        return () =>
            clearInterval(
                interval
            );

    }, []);


    const values = [
        {
            label:
                "Ngày",

            value:
                time.days,
        },

        {
            label:
                "Giờ",

            value:
                time.hours,
        },

        {
            label:
                "Phút",

            value:
                time.minutes,
        },

        {
            label:
                "Giây",

            value:
                time.seconds,
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

                px-5
                py-24

                text-white
            "
        >

            <Image
                src="/images/gallery-03.jpg"

                alt="Đếm ngược ngày cưới"

                fill

                sizes="100vw"

                className="
                    object-cover
                "
            />


            <div
                className="
                    absolute
                    inset-0

                    bg-black/60
                "
            />


            <div
                className="
                    relative
                    z-10

                    mx-auto
                    w-full
                    max-w-5xl

                    text-center
                "
            >

                <p
                    className="
                        text-[9px]

                        uppercase

                        tracking-[0.4em]

                        text-white/60
                    "
                >
                    Đếm ngược đến ngày hạnh phúc
                </p>


                <h2
                    className="
                        font-wedding-serif

                        mt-4

                        text-4xl
                        font-light

                        md:text-6xl
                    "
                >
                    Ngày chúng mình về chung một nhà
                </h2>


                <div
                    className="
                        mt-14

                        grid
                        grid-cols-2

                        gap-8

                        md:grid-cols-4
                    "
                >

                    {values.map(
                        (
                            item
                        ) => (

                            <div
                                key={
                                    item.label
                                }
                            >

                                <strong
                                    className="
                                        font-wedding-serif

                                        block

                                        text-6xl
                                        font-light

                                        md:text-8xl
                                    "
                                >
                                    {String(
                                        item.value
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </strong>


                                <span
                                    className="
                                        mt-3
                                        block

                                        text-[9px]

                                        uppercase

                                        tracking-[0.3em]

                                        text-white/55
                                    "
                                >
                                    {item.label}
                                </span>

                            </div>

                        )
                    )}

                </div>


                <p
                    className="
                        font-wedding-serif

                        mx-auto
                        mt-14

                        max-w-xl

                        text-lg
                        italic

                        text-white/70
                    "
                >
                    Chúng mình đang đếm từng ngày để được cùng những người thân yêu lưu lại một kỷ niệm thật đẹp.
                </p>

            </div>

        </section>
    );
}