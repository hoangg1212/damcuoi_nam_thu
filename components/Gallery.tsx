"use client";

import Image from "next/image";

import {
    useEffect,
    useRef,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


const layouts = [
    "md:col-span-8 md:h-[560px]",
    "md:col-span-4 md:h-[440px] md:mt-20",
    "md:col-span-4 md:h-[430px]",
    "md:col-span-8 md:h-[540px]",
    "md:col-span-5 md:h-[600px]",
    "md:col-span-7 md:h-[470px] md:mt-24",
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


    function next() {

        if (
            selected ===
            null
        ) {
            return;
        }


        setSelected(
            (
                selected +
                1
            ) %
            wedding.gallery.length
        );

    }


    function previous() {

        if (
            selected ===
            null
        ) {
            return;
        }


        setSelected(
            (
                selected -
                1 +
                wedding.gallery.length
            ) %
            wedding.gallery.length
        );

    }


    useEffect(() => {

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


        document.body.style
            .overflow =
            selected !== null
                ? "hidden"
                : "";


        return () => {

            document.removeEventListener(
                "keydown",
                keydown
            );

            document.body.style
                .overflow = "";

        };

    });


    return (

        <section
            id="gallery"

            className="
                bg-[#f9f7f3]

                px-5
                py-24

                md:py-36
            "
        >

            <div
                className="
                    mx-auto
                    max-w-[1220px]
                "
            >

                <div
                    className="
                        mx-auto
                        mb-16

                        max-w-2xl

                        text-center

                        md:mb-24
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
                        Những khoảnh khắc đáng nhớ
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            text-5xl

                            md:text-7xl
                        "
                    >
                        Chuyện của chúng mình qua từng bức ảnh
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
                        Có những khoảnh khắc chỉ diễn ra một lần, nhưng khi được lưu lại bằng một bức ảnh, chúng sẽ trở thành ký ức để nhớ về thật lâu.
                    </p>

                </div>


                <div
                    className="
                        grid

                        grid-cols-1

                        gap-4

                        md:grid-cols-12
                        md:gap-6
                    "
                >

                    {wedding.gallery.map(
                        (
                            image,
                            index
                        ) => (

                            <button
                                key={
                                    image.src
                                }

                                type="button"

                                onClick={() =>
                                    setSelected(
                                        index
                                    )
                                }

                                className={`
                                    group

                                    relative

                                    h-[360px]

                                    overflow-hidden

                                    ${layouts[index]}
                                `}
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
                                        (max-width:768px) 100vw,
                                        60vw
                                    "

                                    className="
                                        object-cover

                                        transition-transform
                                        duration-1000

                                        group-hover:scale-[1.035]
                                    "
                                />


                                <div
                                    className="
                                        absolute
                                        inset-0

                                        flex
                                        items-center
                                        justify-center

                                        bg-black/10

                                        opacity-0

                                        transition-opacity

                                        group-hover:opacity-100
                                    "
                                >

                                    <span
                                        className="
                                            font-wedding-serif

                                            flex
                                            h-12
                                            w-12

                                            items-center
                                            justify-center

                                            rounded-full

                                            border
                                            border-white/60

                                            text-2xl

                                            text-white
                                        "
                                    >
                                        +
                                    </span>

                                </div>

                            </button>

                        )
                    )}

                </div>

            </div>


            {/* LIGHTBOX */}

            {selected !== null && (

                <div
                    className="
                        fixed
                        inset-0

                        z-[12000]

                        flex
                        items-center
                        justify-center

                        bg-black/95

                        p-5
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
                                event.changedTouches[0]
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

                    <button
                        type="button"

                        onClick={() =>
                            setSelected(
                                null
                            )
                        }

                        className="
                            font-wedding-serif

                            absolute
                            right-6
                            top-4

                            z-20

                            text-5xl
                            font-light

                            text-white
                        "
                    >
                        ×
                    </button>


                    <button
                        type="button"

                        onClick={
                            previous
                        }

                        className="
                            font-wedding-serif

                            absolute
                            left-4

                            z-20

                            flex
                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/30

                            text-3xl

                            text-white

                            md:left-8
                        "
                    >
                        ‹
                    </button>


                    <div
                        className="
                            relative

                            h-[85vh]
                            w-[85vw]
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

                            sizes="90vw"

                            className="
                                object-contain
                            "
                        />

                    </div>


                    <button
                        type="button"

                        onClick={
                            next
                        }

                        className="
                            font-wedding-serif

                            absolute
                            right-4

                            z-20

                            flex
                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-white/30

                            text-3xl

                            text-white

                            md:right-8
                        "
                    >
                        ›
                    </button>

                </div>

            )}

        </section>
    );
}