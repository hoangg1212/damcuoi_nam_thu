"use client";

import Image from "next/image";

import { wedding } from "@/data/wedding";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


export default function Hero() {

    const {
        invitationOpened,
    } =
        useWedding();


    return (

        <section
            id="home"

            className="
                relative

                flex
                min-h-[100svh]

                items-center
                justify-center

                overflow-hidden
            "
        >

            <Image
                src="/images/hero.jpg"

                alt="Nguyễn Nam và Huỳnh Thư"

                fill
                priority

                sizes="100vw"

                className="
                    object-cover
                "
            />


            <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-black/15
                    via-black/25
                    to-black/60
                "
            />


            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    px-5
                    pt-16

                    text-center
                    text-white

                    transition-all
                    duration-1000

                    ${
                        invitationOpened
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }
                `}
            >

                <p
                    className="
                        mb-7

                        text-[8px]
                        font-medium

                        uppercase

                        tracking-[0.45em]

                        text-white/75
                    "
                >
                    Chúng mình sắp về chung một nhà
                </p>


                <h1
                    className="
                        font-wedding

                        text-[78px]
                        leading-[0.85]

                        md:text-[130px]
                        lg:text-[155px]
                    "
                >
                    {wedding.groom.shortName}

                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            text-3xl
                            font-light

                            text-[#ded0bd]
                        "
                    >
                        &
                    </span>

                    {wedding.bride.shortName}
                </h1>


                <p
                    className="
                        font-wedding-serif

                        mx-auto
                        mt-8

                        max-w-2xl

                        text-base
                        italic
                        leading-7

                        text-white/80

                        md:text-xl
                    "
                >
                    “{wedding.heroQuote}”
                </p>


                <div
                    className="
                        my-8

                        flex
                        items-center
                        justify-center

                        gap-5
                    "
                >

                    <span
                        className="
                            h-px
                            w-10

                            bg-white/40
                        "
                    />

                    <p
                        className="
                            font-wedding-serif

                            tracking-[0.28em]
                        "
                    >
                        {wedding.displayDate}
                    </p>

                    <span
                        className="
                            h-px
                            w-10

                            bg-white/40
                        "
                    />

                </div>


                <a
                    href="#story"

                    className="
                        inline-flex

                        items-center
                        gap-3

                        border
                        border-white/50

                        px-7
                        py-4

                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.25em]

                        transition-all

                        hover:bg-white
                        hover:text-[#292622]
                    "
                >
                    Câu chuyện của chúng mình

                    <span>
                        ↓
                    </span>
                </a>

            </div>

        </section>
    );
}