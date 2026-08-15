"use client";

import Image from "next/image";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


const layouts = [
    "lg:col-span-8 lg:h-[560px]",
    "lg:col-span-4 lg:h-[440px] lg:mt-20",

    "lg:col-span-4 lg:h-[430px]",
    "lg:col-span-8 lg:h-[540px]",

    "lg:col-span-5 lg:h-[600px]",
    "lg:col-span-7 lg:h-[470px] lg:mt-24",
];


export default function Gallery() {

    const [
        selected,
        setSelected,
    ] =
        useState<
            number |
            null
        >(null);


    const touchStart =
        useRef<number>(
            0
        );


    const next =
        useCallback(
            () => {

                setSelected(
                    (
                        current
                    ) => {

                        if (
                            current ===
                            null
                        ) {
                            return null;
                        }


                        return (
                            current +
                            1
                        ) %
                            wedding.gallery.length;

                    }
                );

            },
            []
        );


    const previous =
        useCallback(
            () => {

                setSelected(
                    (
                        current
                    ) => {

                        if (
                            current ===
                            null
                        ) {
                            return null;
                        }


                        return (
                            current -
                            1 +
                            wedding.gallery.length
                        ) %
                            wedding.gallery.length;

                    }
                );

            },
            []
        );


    useEffect(
        () => {

            function keydown(
                event:
                    KeyboardEvent
            ) {

                if (
                    selected ===
                    null
                ) {
                    return;
                }


                if (
                    event.key ===
                    "Escape"
                ) {

                    setSelected(
                        null
                    );

                }


                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    next();

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previous();

                }

            }


            document.addEventListener(
                "keydown",
                keydown
            );


            if (
                selected !==
                null
            ) {

                document.body.style
                    .overflow =
                    "hidden";

            }


            return () => {

                document.removeEventListener(
                    "keydown",
                    keydown
                );


                document.body.style
                    .overflow =
                    "";

            };

        },
        [
            selected,
            next,
            previous,
        ]
    );


    return (

        <section
            id="gallery"

            className="
                relative
                overflow-hidden

                bg-gradient-to-b

                from-[#f8eee8]
                via-[#fffaf7]
                to-[#faf4ef]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
            "
        >


            {/* ======================================= */}
            {/* BACKGROUND DECORATION */}
            {/* ======================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-36
                    top-[15%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#e9beb2]/15

                    blur-[120px]

                    md:h-[460px]
                    md:w-[460px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute

                    -right-36
                    bottom-[15%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#dcc3a5]/20

                    blur-[130px]

                    md:h-[480px]
                    md:w-[480px]
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

                    opacity-50

                    md:top-12
                "
            >

                <span
                    className="
                        h-px
                        w-8

                        bg-gradient-to-r

                        from-transparent
                        to-[#b98777]
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#b77969]
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        w-8

                        bg-gradient-to-l

                        from-transparent
                        to-[#b98777]
                    "
                />

            </div>


            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1240px]
                "
            >


                {/* ======================================= */}
                {/* HEADING */}
                {/* ======================================= */}

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
                        Những khoảnh khắc đáng nhớ
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-4

                            max-w-4xl

                            text-[40px]
                            font-light

                            leading-[1.15]

                            text-[#4c3d37]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-7xl
                        "
                    >
                        Chuyện của chúng mình
                        <br className="hidden sm:block" />

                        <span
                            className="
                                italic

                                text-[#a86f62]
                            "
                        >
                            {" "}
                            qua từng bức ảnh
                        </span>
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

                                bg-[#c89f93]/45

                                sm:w-14
                            "
                        />


                        <span
                            className="
                                text-[9px]

                                text-[#b77969]
                            "
                        >
                            ♥
                        </span>


                        <span
                            className="
                                h-px
                                w-10

                                bg-[#c89f93]/45

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
                        Có những khoảnh khắc chỉ diễn ra một lần,
                        nhưng khi được lưu lại bằng một bức ảnh,
                        chúng sẽ trở thành ký ức để nhớ về thật lâu.
                    </p>

                </div>


                {/* ======================================= */}
                {/* GALLERY */}
                {/* ======================================= */}

                <div
                    className="
                        grid

                        grid-cols-1

                        gap-5

                        sm:grid-cols-2
                        sm:gap-5

                        lg:grid-cols-12
                        lg:gap-6
                    "
                >

                    {wedding.gallery.map(
                        (
                            image,
                            index
                        ) => (

                            <button
                                key={
                                    `${image.src}-${index}`
                                }

                                type="button"

                                onClick={
                                    () =>
                                        setSelected(
                                            index
                                        )
                                }

                                aria-label={
                                    `Xem ảnh ${index + 1}: ${image.alt}`
                                }

                                className={`
                                    group

                                    relative

                                    h-[390px]

                                    overflow-hidden

                                    rounded-[24px]

                                    border
                                    border-white/70

                                    bg-[#eee4de]

                                    p-[5px]

                                    text-left

                                    shadow-[0_24px_60px_rgba(93,63,53,0.10)]

                                    transition-all
                                    duration-500

                                    hover:-translate-y-1

                                    sm:h-[420px]
                                    sm:rounded-[28px]

                                    lg:rounded-[32px]

                                    ${
                                        layouts[
                                            index %
                                            layouts.length
                                        ]
                                    }
                                `}
                            >


                                {/* IMAGE */}

                                <div
                                    className="
                                        relative

                                        h-full
                                        w-full

                                        overflow-hidden

                                        rounded-[20px]

                                        sm:rounded-[24px]

                                        lg:rounded-[28px]
                                    "
                                >

                                    <Image
                                        src={
                                            image.src
                                        }

                                        alt={
                                            image.alt
                                        }

                                        fill

                                        sizes="
                                            (max-width: 639px) 92vw,
                                            (max-width: 1023px) 46vw,
                                            65vw
                                        "

                                        className="
                                            object-cover
                                            object-center

                                            transition-transform
                                            duration-[1400ms]

                                            ease-out

                                            group-hover:scale-[1.045]
                                        "
                                    />


                                    {/* SOFT OVERLAY */}

                                    <div
                                        className="
                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#2d211c]/45
                                            via-transparent
                                            to-transparent

                                            opacity-70

                                            transition-opacity
                                            duration-500

                                            group-hover:opacity-90
                                        "
                                    />


                                    {/* NUMBER */}

                                    <div
                                        className="
                                            absolute
                                            left-4
                                            top-4

                                            flex

                                            h-9
                                            w-9

                                            items-center
                                            justify-center

                                            rounded-full

                                            border
                                            border-white/40

                                            bg-white/20

                                            font-wedding-serif

                                            text-[11px]

                                            text-white

                                            shadow-lg

                                            backdrop-blur-md

                                            sm:left-5
                                            sm:top-5
                                        "
                                    >
                                        {String(
                                            index + 1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </div>


                                    {/* BOTTOM LABEL */}

                                    <div
                                        className="
                                            absolute

                                            bottom-4
                                            left-4
                                            right-4

                                            flex

                                            items-end
                                            justify-between

                                            gap-4

                                            sm:bottom-5
                                            sm:left-5
                                            sm:right-5
                                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                                    text-[10px]
                                                    font-semibold

                                                    uppercase

                                                    tracking-[0.2em]

                                                    text-white/70

                                                    sm:text-[11px]
                                                "
                                            >
                                                Kỷ niệm
                                            </p>


                                            <p
                                                className="
                                                    font-wedding-serif

                                                    mt-1

                                                    line-clamp-1

                                                    text-[17px]
                                                    font-normal

                                                    text-white

                                                    sm:text-lg
                                                "
                                            >
                                                {image.alt}
                                            </p>

                                        </div>


                                        {/* VIEW BUTTON */}

                                        <span
                                            className="
                                                flex

                                                h-11
                                                w-11

                                                shrink-0

                                                items-center
                                                justify-center

                                                rounded-full

                                                border
                                                border-white/50

                                                bg-white/10

                                                font-wedding-serif

                                                text-2xl
                                                font-light

                                                text-white

                                                backdrop-blur-md

                                                transition-all
                                                duration-300

                                                group-hover:rotate-90
                                                group-hover:bg-white
                                                group-hover:text-[#5a443c]
                                            "
                                        >
                                            +
                                        </span>

                                    </div>

                                </div>

                            </button>

                        )
                    )}

                </div>


                {/* ======================================= */}
                {/* BOTTOM TEXT */}
                {/* ======================================= */}

                <div
                    className="
                        mx-auto

                        mt-14

                        flex

                        max-w-[280px]

                        items-center
                        justify-center

                        gap-3

                        sm:mt-16

                        md:mt-20
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#b98777]/30
                        "
                    />


                    <p
                        className="
                            font-wedding-serif

                            whitespace-nowrap

                            text-[11px]
                            italic

                            text-[#89675d]/70
                        "
                    >
                        Những điều mình muốn nhớ mãi
                    </p>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#b98777]/30
                        "
                    />

                </div>

            </div>


            {/* ======================================= */}
            {/* LIGHTBOX */}
            {/* ======================================= */}

            {selected !== null && (

                <div
                    className="
                        fixed
                        inset-0

                        z-[12000]

                        flex

                        items-center
                        justify-center

                        overflow-hidden

                        bg-[#171210]/95

                        px-3
                        py-4

                        backdrop-blur-xl

                        sm:p-5
                    "

                    onTouchStart={
                        (
                            event
                        ) => {

                            touchStart.current =
                                event.touches[0]
                                    .clientX;

                        }
                    }

                    onTouchEnd={
                        (
                            event
                        ) => {

                            const diff =
                                event
                                    .changedTouches[0]
                                    .clientX -
                                touchStart.current;


                            if (
                                diff >
                                60
                            ) {

                                previous();

                            }


                            if (
                                diff <
                                -60
                            ) {

                                next();

                            }

                        }
                    }
                >


                    {/* LIGHTBOX GLOW */}

                    <div
                        className="
                            pointer-events-none

                            absolute
                            left-1/2
                            top-1/2

                            h-[500px]
                            w-[500px]

                            -translate-x-1/2
                            -translate-y-1/2

                            rounded-full

                            bg-[#cf9d8b]/10

                            blur-[130px]
                        "
                    />


                    {/* CLOSE */}

                    <button
                        type="button"

                        onClick={
                            () =>
                                setSelected(
                                    null
                                )
                        }

                        aria-label="Đóng ảnh"

                        className="
                            absolute

                            right-4
                            top-4

                            z-30

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/20

                            bg-white/10

                            font-wedding-serif

                            text-3xl
                            font-light

                            leading-none

                            text-white

                            backdrop-blur-md

                            transition-all

                            hover:bg-white
                            hover:text-[#31251f]

                            sm:right-6
                            sm:top-6
                        "
                    >
                        ×
                    </button>


                    {/* PREVIOUS */}

                    <button
                        type="button"

                        onClick={
                            previous
                        }

                        aria-label="Ảnh trước"

                        className="
                            absolute

                            bottom-6
                            left-[calc(50%-60px)]

                            z-30

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/25

                            bg-black/20

                            font-wedding-serif

                            text-3xl

                            text-white

                            backdrop-blur-md

                            transition-all

                            hover:bg-white
                            hover:text-[#31251f]

                            md:bottom-auto
                            md:left-7
                            md:top-1/2
                            md:-translate-y-1/2

                            md:h-13
                            md:w-13
                        "
                    >
                        ‹
                    </button>


                    {/* IMAGE WRAPPER */}

                    <div
                        className="
                            relative
                            z-10

                            flex

                            h-[78svh]
                            w-full

                            max-w-[1150px]

                            items-center
                            justify-center

                            sm:h-[84vh]
                            sm:w-[90vw]
                        "
                    >

                        <Image
                            src={
                                wedding.gallery[
                                    selected
                                ].src
                            }

                            alt={
                                wedding.gallery[
                                    selected
                                ].alt
                            }

                            fill

                            priority

                            sizes="95vw"

                            className="
                                object-contain
                            "
                        />

                    </div>


                    {/* NEXT */}

                    <button
                        type="button"

                        onClick={
                            next
                        }

                        aria-label="Ảnh tiếp theo"

                        className="
                            absolute

                            bottom-6
                            right-[calc(50%-60px)]

                            z-30

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/25

                            bg-black/20

                            font-wedding-serif

                            text-3xl

                            text-white

                            backdrop-blur-md

                            transition-all

                            hover:bg-white
                            hover:text-[#31251f]

                            md:bottom-auto
                            md:right-7
                            md:top-1/2
                            md:-translate-y-1/2
                        "
                    >
                        ›
                    </button>


                    {/* IMAGE INFO */}

                    <div
                        className="
                            absolute

                            bottom-20
                            left-1/2

                            z-20

                            w-full
                            max-w-xl

                            -translate-x-1/2

                            px-6

                            text-center

                            text-white

                            md:bottom-8
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                font-medium

                                uppercase

                                tracking-[0.22em]

                                text-white/55
                            "
                        >
                            {String(
                                selected + 1
                            ).padStart(
                                2,
                                "0"
                            )}

                            {" · "}

                            {String(
                                wedding.gallery.length
                            ).padStart(
                                2,
                                "0"
                            )}
                        </p>


                        <p
                            className="
                                font-wedding-serif

                                mt-1

                                text-base

                                text-white/85

                                sm:text-lg
                            "
                        >
                            {
                                wedding.gallery[
                                    selected
                                ].alt
                            }
                        </p>

                    </div>

                </div>

            )}

        </section>
    );
}