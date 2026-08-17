"use client";

import Image from "next/image";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


/* =========================================================
   EDITORIAL IMAGE LAYOUT

   GIỮ NGUYÊN BỐ CỤC ẢNH HIỆN TẠI
========================================================= */

const layouts = [

    "lg:col-span-8 lg:h-[560px]",

    "lg:col-span-4 lg:h-[440px] lg:mt-20",

    "lg:col-span-4 lg:h-[430px]",

    "lg:col-span-8 lg:h-[540px]",

    "lg:col-span-5 lg:h-[600px]",

    "lg:col-span-7 lg:h-[470px] lg:mt-24",
];


/* =========================================================
   GALLERY
========================================================= */

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


    /* =====================================================
       NEXT IMAGE
    ===================================================== */

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
                            wedding
                                .gallery
                                .length;

                    }
                );

            },
            []
        );


    /* =====================================================
       PREVIOUS IMAGE
    ===================================================== */

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
                            wedding
                                .gallery
                                .length
                        ) %
                            wedding
                                .gallery
                                .length;

                    }
                );

            },
            []
        );


    /* =====================================================
       KEYBOARD + BODY SCROLL
    ===================================================== */

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

                document
                    .body
                    .style
                    .overflow =
                    "hidden";

            }


            return () => {

                document.removeEventListener(
                    "keydown",
                    keydown
                );


                document
                    .body
                    .style
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

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#F8F1EE_0%,#F8F1EE_8%,#F6F6ED_44%,#EEF4F6_100%)]

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
                SEAMLESS TOP TRANSITION

                Countdown kết thúc:
                #F8F1EE

                Gallery bắt đầu:
                #F8F1EE
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

                    from-[#F8F1EE]
                    via-[#F8F1EE]/80
                    to-transparent
                "
            />


            {/* =================================================
                BACKGROUND GLOW - BLUE
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-36
                    top-[14%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#8FB4C7]/16

                    blur-[125px]

                    md:h-[480px]
                    md:w-[480px]
                "
            />


            {/* =================================================
                BACKGROUND GLOW - ROSE
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-36
                    bottom-[14%]

                    h-[400px]
                    w-[400px]

                    rounded-full

                    bg-[#D9A5AE]/16

                    blur-[135px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                SAGE LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[650px]
                    w-[65%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#DCE5D8]/14

                    blur-[145px]

                    md:w-[48%]
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
                        to-[#B8A27D]/55
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#C98792]/80
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        w-9

                        bg-gradient-to-l

                        from-transparent
                        to-[#B8A27D]/55
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

                    max-w-[1240px]
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


                    {/* EYEBROW */}

                    <p
                        className="
                            text-[10px]
                            font-medium

                            uppercase

                            tracking-[0.36em]

                            text-[#C98792]

                            sm:text-[11px]

                            md:tracking-[0.4em]
                        "
                    >
                        {
                            wedding
                                .gallerySection
                                .eyebrow
                        }
                    </p>


                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h2
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-4

                            max-w-4xl

                            text-[41px]
                            font-light

                            leading-[1.15]

                            tracking-[-0.02em]

                            text-[#31566B]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-[72px]
                        "
                    >

                        {
                            wedding
                                .gallerySection
                                .title
                        }


                        <br
                            className="
                                hidden

                                sm:block
                            "
                        />


                        <span
                            className="
                                italic

                                text-[#587589]
                            "
                        >
                            {" "}

                            {
                                wedding
                                    .gallerySection
                                    .highlight
                            }
                        </span>

                    </h2>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

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
                            ♥
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


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

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
                                .gallerySection
                                .description
                        }
                    </p>

                </div>


                {/* =================================================
                    GALLERY

                    GIỮ NGUYÊN:
                    - layout
                    - kích thước
                    - frame
                    - hover
                    - số thứ tự
                    - nút +
                ================================================= */}

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
                                    border-[#FFFDF8]/85

                                    bg-[#F1F3EB]

                                    p-[5px]

                                    text-left

                                    shadow-[0_24px_65px_rgba(49,86,107,0.10)]

                                    transition-all
                                    duration-500

                                    hover:-translate-y-1

                                    hover:shadow-[0_30px_75px_rgba(49,86,107,0.15)]

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


                                {/* =================================================
                                    IMAGE
                                ================================================= */}

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


                                    {/* =================================================
                                        IMAGE OVERLAY

                                        Đổi nâu đen thành
                                        ocean blue trầm.
                                    ================================================= */}

                                    <div
                                        className="
                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#183747]/55
                                            via-[#213E50]/5
                                            to-transparent

                                            opacity-75

                                            transition-opacity
                                            duration-500

                                            group-hover:opacity-90
                                        "
                                    />


                                    {/* =================================================
                                        IMAGE NUMBER
                                    ================================================= */}

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

                                            bg-white/18

                                            font-wedding-serif

                                            text-[11px]
                                            font-medium

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


                                    {/* =================================================
                                        BOTTOM INFO
                                    ================================================= */}

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


                                            {/* LABEL */}

                                            <p
                                                className="
                                                    text-[9px]
                                                    font-medium

                                                    uppercase

                                                    tracking-[0.24em]

                                                    text-white/70

                                                    sm:text-[10px]
                                                "
                                            >
                                                {
                                                    wedding
                                                        .gallerySection
                                                        .cardLabel
                                                }
                                            </p>


                                            {/* ALT TEXT */}

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


                                        {/* =================================================
                                            VIEW BUTTON
                                        ================================================= */}

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
                                                border-white/45

                                                bg-white/10

                                                font-wedding-serif

                                                text-2xl
                                                font-light

                                                text-white

                                                backdrop-blur-md

                                                transition-all
                                                duration-300

                                                group-hover:rotate-90

                                                group-hover:border-white

                                                group-hover:bg-white

                                                group-hover:text-[#31566B]
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


                {/* =================================================
                    BOTTOM TEXT
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-14

                        flex

                        max-w-[440px]

                        items-center
                        justify-center

                        gap-4

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
                            to-[#7A9CAC]/35
                        "
                    />


                    <p
                        className="
                            font-wedding-serif

                            whitespace-nowrap

                            text-[14px]
                            font-normal

                            italic

                            text-[#587589]/85

                            sm:text-[15px]

                            md:text-[16px]
                        "
                    >
                        {
                            wedding
                                .gallerySection
                                .bottomText
                        }
                    </p>


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


            {/* =================================================
                LIGHTBOX

                GIỮ NGUYÊN CHỨC NĂNG
            ================================================= */}

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

                        bg-[#102735]/95

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
                                event
                                    .touches[0]
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


                    {/* =================================================
                        LIGHTBOX GLOW
                    ================================================= */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            left-1/2
                            top-1/2

                            h-[520px]
                            w-[520px]

                            -translate-x-1/2
                            -translate-y-1/2

                            rounded-full

                            bg-[#8FB4C7]/10

                            blur-[140px]
                        "
                    />


                    <div
                        className="
                            pointer-events-none

                            absolute

                            -right-24
                            bottom-0

                            h-[350px]
                            w-[350px]

                            rounded-full

                            bg-[#C98792]/8

                            blur-[120px]
                        "
                    />


                    {/* =================================================
                        CLOSE
                    ================================================= */}

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
                            duration-300

                            hover:bg-white

                            hover:text-[#31566B]

                            sm:right-6
                            sm:top-6
                        "
                    >
                        ×
                    </button>


                    {/* =================================================
                        PREVIOUS
                    ================================================= */}

                    <button
                        type="button"

                        onClick={
                            previous
                        }

                        aria-label="Ảnh trước"

                        className="
                            absolute

                            bottom-6
                            left-[calc(50%_-_58px)]

                            z-30

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/25

                            bg-white/8

                            font-wedding-serif

                            text-3xl

                            text-white

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:bg-white

                            hover:text-[#31566B]

                            md:bottom-auto
                            md:left-7
                            md:top-1/2
                            md:-translate-y-1/2

                            md:h-12
                            md:w-12
                        "
                    >
                        ‹
                    </button>


                    {/* =================================================
                        IMAGE WRAPPER
                    ================================================= */}

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
                                wedding
                                    .gallery[
                                        selected
                                    ]
                                    .src
                            }

                            alt={
                                wedding
                                    .gallery[
                                        selected
                                    ]
                                    .alt
                            }

                            fill

                            priority

                            sizes="95vw"

                            className="
                                object-contain
                            "
                        />

                    </div>


                    {/* =================================================
                        NEXT
                    ================================================= */}

                    <button
                        type="button"

                        onClick={
                            next
                        }

                        aria-label="Ảnh tiếp theo"

                        className="
                            absolute

                            bottom-6
                            right-[calc(50%_-_58px)]

                            z-30

                            flex
                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/25

                            bg-white/8

                            font-wedding-serif

                            text-3xl

                            text-white

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:bg-white

                            hover:text-[#31566B]

                            md:bottom-auto
                            md:right-7
                            md:top-1/2
                            md:-translate-y-1/2

                            md:h-12
                            md:w-12
                        "
                    >
                        ›
                    </button>


                    {/* =================================================
                        IMAGE INFO
                    ================================================= */}

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

                        {/* INDEX */}

                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.26em]

                                text-white/55
                            "
                        >
                            {String(
                                selected +
                                1
                            ).padStart(
                                2,
                                "0"
                            )}

                            {" · "}

                            {String(
                                wedding
                                    .gallery
                                    .length
                            ).padStart(
                                2,
                                "0"
                            )}
                        </p>


                        {/* IMAGE NAME */}

                        <p
                            className="
                                font-wedding-serif

                                mt-1

                                text-base
                                font-normal

                                text-white/90

                                sm:text-lg
                            "
                        >
                            {
                                wedding
                                    .gallery[
                                        selected
                                    ]
                                    .alt
                            }
                        </p>

                    </div>

                </div>

            )}

        </section>
    );
}