import Image from "next/image";

import { wedding } from "@/data/wedding";


const petals = [
    {
        left: "7%",
        delay: "0s",
        duration: "15s",
        size: 11,
    },
    {
        left: "17%",
        delay: "5s",
        duration: "18s",
        size: 8,
    },
    {
        left: "29%",
        delay: "2s",
        duration: "16s",
        size: 12,
    },
    {
        left: "42%",
        delay: "8s",
        duration: "20s",
        size: 9,
    },
    {
        left: "56%",
        delay: "4s",
        duration: "17s",
        size: 10,
    },
    {
        left: "68%",
        delay: "1s",
        duration: "19s",
        size: 8,
    },
    {
        left: "81%",
        delay: "7s",
        duration: "16s",
        size: 12,
    },
    {
        left: "93%",
        delay: "3s",
        duration: "21s",
        size: 9,
    },
];


const sparkles = [
    {
        left: "12%",
        top: "25%",
        delay: "0s",
    },
    {
        left: "22%",
        top: "72%",
        delay: "2s",
    },
    {
        left: "37%",
        top: "18%",
        delay: "4s",
    },
    {
        left: "49%",
        top: "80%",
        delay: "1s",
    },
    {
        left: "63%",
        top: "27%",
        delay: "3s",
    },
    {
        left: "76%",
        top: "70%",
        delay: "5s",
    },
    {
        left: "89%",
        top: "21%",
        delay: "2.5s",
    },
];


export default function Ending() {

    return (

        <section
            className="
                relative

                flex
                min-h-[680px]

                items-center

                overflow-hidden

                px-5
                py-24

                md:min-h-[760px]
                md:py-32
            "
        >


            {/* ========================================= */}
            {/* BACKGROUND */}
            {/* ========================================= */}

            <div
                className="
                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                <Image
                    src="/images/weddingmessage.png"

                    alt="Nam và Thư"

                    fill

                    sizes="100vw"

                    className="
                        ending-background

                        object-cover
                        object-center
                    "
                />

            </div>


            {/* ========================================= */}
            {/* DARK OVERLAY */}
            {/* ========================================= */}

            <div
                className="
                    absolute
                    inset-0

                    bg-[#171412]/55
                "
            />


            {/* ========================================= */}
            {/* CINEMATIC GRADIENT */}
            {/* ========================================= */}

            <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-black/25
                    via-black/20
                    to-black/70
                "
            />


            {/* ========================================= */}
            {/* CENTRAL LIGHT */}
            {/* ========================================= */}

            <div
                className="
                    ending-central-glow

                    pointer-events-none

                    absolute
                    left-1/2
                    top-1/2

                    h-[420px]
                    w-[420px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#e3c7aa]/15

                    blur-[110px]

                    md:h-[560px]
                    md:w-[560px]
                "
            />


            {/* ========================================= */}
            {/* TOP LIGHT */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-1/2
                    top-0

                    h-[300px]
                    w-[70%]

                    -translate-x-1/2

                    bg-gradient-to-b

                    from-[#f6dfc7]/10
                    to-transparent

                    blur-3xl
                "
            />


            {/* ========================================= */}
            {/* PETALS */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {petals.map(
                    (
                        petal,
                        index
                    ) => (

                        <span
                            key={
                                `ending-petal-${index}`
                            }

                            className="
                                ending-petal

                                absolute

                                -top-10

                                block

                                rounded-[70%_30%_70%_30%]

                                bg-[#e8c1b6]/55

                                shadow-[0_0_10px_rgba(232,193,182,0.18)]
                            "

                            style={{
                                left:
                                    petal.left,

                                width:
                                    petal.size,

                                height:
                                    petal.size * 1.5,

                                animationDelay:
                                    petal.delay,

                                animationDuration:
                                    petal.duration,
                            }}
                        />

                    )
                )}

            </div>


            {/* ========================================= */}
            {/* SPARKLES */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0
                "
            >

                {sparkles.map(
                    (
                        sparkle,
                        index
                    ) => (

                        <span
                            key={
                                `ending-sparkle-${index}`
                            }

                            className="
                                ending-sparkle

                                absolute

                                h-[3px]
                                w-[3px]

                                rounded-full

                                bg-[#f0ddc7]

                                shadow-[0_0_12px_rgba(240,221,199,0.75)]
                            "

                            style={{
                                left:
                                    sparkle.left,

                                top:
                                    sparkle.top,

                                animationDelay:
                                    sparkle.delay,
                            }}
                        />

                    )
                )}

            </div>


            {/* ========================================= */}
            {/* CONTENT */}
            {/* ========================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-2xl

                    text-center
                    text-white
                "
            >


                {/* TOP DECORATION */}

                <div
                    className="
                        mx-auto
                        mb-8

                        flex
                        items-center
                        justify-center

                        gap-4
                    "
                >

                    <span
                        className="
                            h-px
                            w-12

                            bg-gradient-to-r

                            from-transparent
                            to-[#ded0bd]/45
                        "
                    />


                    <span
                        className="
                            text-[9px]

                            text-[#ded0bd]/70
                        "
                    >
                        ✦
                    </span>


                    <span
                        className="
                            h-px
                            w-12

                            bg-gradient-to-l

                            from-transparent
                            to-[#ded0bd]/45
                        "
                    />

                </div>


                {/* THANK YOU */}

                <p
                    className="
                        font-wedding

                        ending-thank-you

                        text-5xl

                        text-[#ded0bd]

                        sm:text-6xl
                    "
                >
                    Cảm ơn bạn
                </p>


                {/* ========================================= */}
                {/* N ♥ T */}
                {/* ========================================= */}

                <div
                    className="
                        mt-4

                        flex
                        items-center
                        justify-center

                        gap-5

                        md:gap-8
                    "
                >

                    <span
                        className="
                            font-wedding

                            text-7xl

                            md:text-9xl
                        "
                    >
                        N
                    </span>


                    <span
                        className="
                            ending-main-heart

                            flex

                            h-11
                            w-11

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#ded0bd]/30

                            bg-white/5

                            font-wedding-serif

                            text-lg

                            text-[#ded0bd]

                            shadow-[0_0_30px_rgba(222,208,189,0.15)]

                            backdrop-blur-sm

                            md:h-14
                            md:w-14
                            md:text-xl
                        "
                    >
                        ♥
                    </span>


                    <span
                        className="
                            font-wedding

                            text-7xl

                            md:text-9xl
                        "
                    >
                        T
                    </span>

                </div>


                {/* ========================================= */}
                {/* MESSAGE */}
                {/* ========================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-8

                        max-w-xl

                        text-[15px]

                        leading-7

                        text-white/75

                        sm:text-base

                        md:text-lg
                        md:leading-8
                    "
                >
                    Cảm ơn vì đã ghé qua một phần câu chuyện của chúng mình.

                    <br />

                    Hẹn gặp bạn trong ngày Nam & Thư chính thức gọi nhau là gia đình.
                </p>


                {/* ========================================= */}
                {/* SMALL HEART DIVIDER */}
                {/* ========================================= */}

                <div
                    className="
                        mx-auto
                        mt-8

                        flex
                        items-center
                        justify-center

                        gap-3
                    "
                >

                    <span
                        className="
                            h-px
                            w-8

                            bg-white/15
                        "
                    />


                    <span
                        className="
                            text-[8px]

                            text-[#ded0bd]/60
                        "
                    >
                        ♡
                    </span>


                    <span
                        className="
                            h-px
                            w-8

                            bg-white/15
                        "
                    />

                </div>


                {/* ========================================= */}
                {/* DATE */}
                {/* ========================================= */}

                <strong
                    className="
                        font-wedding-serif

                        mt-6
                        block

                        text-[11px]
                        font-normal

                        tracking-[0.28em]

                        text-[#ded0bd]/80

                        sm:text-xs

                        md:tracking-[0.35em]
                    "
                >
                    {wedding.displayDate}
                </strong>


                {/* SIGNATURE */}

                <p
                    className="
                        font-wedding

                        mt-7

                        text-3xl

                        text-[#ded0bd]/80

                        md:text-4xl
                    "
                >
                    Nam & Thư
                </p>

            </div>


            {/* ========================================= */}
            {/* BOTTOM FADE */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-0
                    right-0

                    h-32

                    bg-gradient-to-t

                    from-black/35
                    to-transparent
                "
            />

        </section>

    );
}