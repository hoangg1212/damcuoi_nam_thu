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

                min-h-[100svh]

                overflow-hidden

                bg-[#f6e6df]
            "
        >


            {/* ================================================= */}
            {/* MOBILE BANNER */}
            {/* < 768px */}
            {/* ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    md:hidden
                "
            >

                <Image
                    src="/images/banner-mobile.png"

                    alt="Ngày chung đôi của Nguyễn Nam và Huỳnh Thư"

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* ================================================= */}
            {/* DESKTOP BANNER */}
            {/* >= 768px */}
            {/* ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    hidden

                    md:block
                "
            >

                <Image
                    src="/images/banner-desktop.png"

                    alt="Ngày chung đôi của Nguyễn Nam và Huỳnh Thư"

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* ================================================= */}
            {/* SOFT OVERLAY */}
            {/* Giữ tone ảnh, không phủ đen */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-white/5
                    via-transparent
                    to-[#f4ddd4]/20
                "
            />


            {/* ================================================= */}
            {/* CENTER LIGHT */}
            {/* Làm vùng giữa dễ đọc chữ hơn */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[48%]

                    h-[430px]
                    w-[90%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#fffaf6]/45

                    blur-[75px]

                    sm:w-[75%]

                    md:h-[520px]
                    md:w-[52%]

                    lg:h-[600px]
                    lg:w-[44%]

                    xl:w-[40%]
                "
            />


            {/* ================================================= */}
            {/* HERO CONTENT */}
            {/* ================================================= */}

            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    flex
                    min-h-[100svh]

                    w-full
                    max-w-[1440px]

                    items-center
                    justify-center

                    px-5

                    pb-14
                    pt-24

                    text-center

                    transition-all
                    duration-1000

                    sm:px-6
                    sm:pb-16

                    md:px-8
                    md:pb-20
                    md:pt-28

                    ${
                        invitationOpened
                            ? `
                                translate-y-0
                                opacity-100
                              `
                            : `
                                translate-y-8
                                opacity-0
                              `
                    }
                `}
            >


                {/* ================================================= */}
                {/* CENTER CONTENT */}
                {/* ================================================= */}

                <div
                    className="
                        mx-auto

                        w-full
                        max-w-[560px]

                        sm:max-w-[620px]

                        md:max-w-[600px]

                        lg:max-w-[650px]
                    "
                >


                    {/* ================================================= */}
                    {/* SMALL TITLE */}
                    {/* ================================================= */}

                    <div
                        className="
                            flex

                            items-center
                            justify-center

                            gap-2.5

                            sm:gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-6

                                bg-gradient-to-r

                                from-transparent
                                to-[#a66f61]/60

                                sm:w-9

                                md:w-11
                            "
                        />


                        <p
                            className="
                                text-[10px]
                                font-semibold

                                uppercase

                                tracking-[0.18em]

                                text-[#81594f]

                                sm:text-[11px]
                                sm:tracking-[0.24em]

                                md:text-xs
                                md:tracking-[0.28em]
                            "
                        >
                            Chúng mình sắp về chung một nhà
                        </p>


                        <span
                            className="
                                h-px
                                w-6

                                bg-gradient-to-l

                                from-transparent
                                to-[#a66f61]/60

                                sm:w-9

                                md:w-11
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* DECORATIVE HEART */}
                    {/* ================================================= */}

                    <div
                        className="
                            mx-auto
                            mt-5

                            flex

                            h-8
                            w-8

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#c08b7d]/30

                            bg-white/40

                            text-[10px]

                            text-[#b56f63]

                            shadow-[0_6px_20px_rgba(142,91,76,0.08)]

                            backdrop-blur-sm

                            sm:h-9
                            sm:w-9
                        "
                    >
                        ♥
                    </div>


                    {/* ================================================= */}
                    {/* NAMES */}
                    {/* ================================================= */}

                    <h1
                        className="
                            font-wedding

                            mt-4

                            flex
                            flex-wrap

                            items-center
                            justify-center

                            gap-x-3
                            gap-y-1

                            text-[56px]

                            leading-[0.92]

                            text-[#6c493f]

                            drop-shadow-[0_3px_14px_rgba(255,255,255,0.85)]

                            sm:text-[72px]

                            md:mt-5
                            md:gap-x-4
                            md:text-[88px]

                            lg:text-[100px]

                            xl:text-[110px]
                        "
                    >

                        <span>
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        {/* & */}

                        <span
                            className="
                                flex

                                h-10
                                w-10

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[#bb8678]/35

                                bg-[#fffaf7]/65

                                font-wedding-serif

                                text-[13px]
                                font-medium

                                text-[#af7164]

                                shadow-[0_8px_25px_rgba(130,80,67,0.08)]

                                backdrop-blur-md

                                sm:h-11
                                sm:w-11
                                sm:text-sm

                                md:h-12
                                md:w-12
                                md:text-base
                            "
                        >
                            &
                        </span>


                        <span>
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </h1>


                    {/* ================================================= */}
                    {/* DIVIDER */}
                    {/* ================================================= */}

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
                                w-9

                                bg-[#ad7d70]/35

                                sm:w-12
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
                                w-9

                                bg-[#ad7d70]/35

                                sm:w-12
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* QUOTE */}
                    {/* ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-5

                            max-w-[500px]

                            text-[16px]
                            font-normal
                            italic

                            leading-7

                            text-[#604a43]

                            drop-shadow-[0_1px_7px_rgba(255,255,255,0.85)]

                            sm:text-lg
                            sm:leading-8

                            md:mt-6
                            md:text-xl
                            md:leading-9
                        "
                    >
                        “{wedding.heroQuote}”
                    </p>


                    {/* ================================================= */}
                    {/* DATE */}
                    {/* ================================================= */}

                    <div
                        className="
                            my-6

                            flex

                            items-center
                            justify-center

                            gap-3

                            sm:my-7
                            sm:gap-4

                            md:my-8
                        "
                    >

                        <span
                            className="
                                h-px
                                w-8

                                bg-gradient-to-r

                                from-transparent
                                to-[#a97366]/55

                                sm:w-12
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[13px]
                                font-semibold

                                tracking-[0.15em]

                                text-[#765349]

                                sm:text-sm
                                sm:tracking-[0.19em]

                                md:text-[15px]
                                md:tracking-[0.22em]
                            "
                        >
                            {wedding.displayDate}
                        </p>


                        <span
                            className="
                                h-px
                                w-8

                                bg-gradient-to-l

                                from-transparent
                                to-[#a97366]/55

                                sm:w-12
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* CTA */}
                    {/* ================================================= */}

                    <a
                        href="#story"

                        className="
                            group

                            inline-flex

                            min-h-[50px]

                            items-center
                            justify-center

                            gap-3

                            rounded-full

                            border
                            border-[#ad776a]/40

                            bg-[#fffaf7]/65

                            px-6
                            py-3.5

                            text-[10px]
                            font-semibold

                            uppercase

                            tracking-[0.12em]

                            text-[#67483f]

                            shadow-[0_12px_30px_rgba(119,75,63,0.10)]

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#a86f62]

                            hover:bg-[#a86f62]

                            hover:text-white

                            sm:min-h-[52px]
                            sm:px-7
                            sm:text-[11px]

                            md:px-8
                            md:text-xs
                        "
                    >

                        <span>
                            Câu chuyện của chúng mình
                        </span>


                        <span
                            className="
                                text-base

                                transition-transform
                                duration-300

                                group-hover:translate-y-1
                            "
                        >
                            ↓
                        </span>

                    </a>


                    {/* ================================================= */}
                    {/* SIGNATURE */}
                    {/* ================================================= */}

                    <div
                        className="
                            mt-7

                            flex

                            items-center
                            justify-center

                            gap-3

                            sm:mt-8
                        "
                    >

                        <span
                            className="
                                h-px
                                w-6

                                bg-[#a87a6d]/30
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[11px]
                                font-medium
                                italic

                                text-[#72564e]

                                sm:text-xs
                            "
                        >
                            Nam ♥ Thư
                        </p>


                        <span
                            className="
                                h-px
                                w-6

                                bg-[#a87a6d]/30
                            "
                        />

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* BOTTOM TRANSITION */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-0

                    z-[5]

                    h-20
                    w-full

                    bg-gradient-to-t

                    from-[#fffaf7]/45
                    to-transparent

                    md:h-24
                "
            />

        </section>

    );
}