import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


const bubbles = [
    {
        left: "5%",
        size: 22,
        delay: "0s",
        duration: "11s",
    },
    {
        left: "14%",
        size: 42,
        delay: "2s",
        duration: "14s",
    },
    {
        left: "24%",
        size: 28,
        delay: "5s",
        duration: "12s",
    },
    {
        left: "36%",
        size: 52,
        delay: "1s",
        duration: "16s",
    },
    {
        left: "48%",
        size: 20,
        delay: "7s",
        duration: "11s",
    },
    {
        left: "61%",
        size: 38,
        delay: "4s",
        duration: "15s",
    },
    {
        left: "72%",
        size: 26,
        delay: "2.5s",
        duration: "12s",
    },
    {
        left: "82%",
        size: 48,
        delay: "6s",
        duration: "16s",
    },
    {
        left: "93%",
        size: 24,
        delay: "3s",
        duration: "13s",
    },
];


const hearts = [
    {
        left: "9%",
        delay: "1s",
        duration: "13s",
        size: 12,
    },
    {
        left: "20%",
        delay: "6s",
        duration: "16s",
        size: 15,
    },
    {
        left: "31%",
        delay: "3s",
        duration: "14s",
        size: 10,
    },
    {
        left: "43%",
        delay: "8s",
        duration: "18s",
        size: 16,
    },
    {
        left: "57%",
        delay: "2s",
        duration: "15s",
        size: 11,
    },
    {
        left: "69%",
        delay: "7s",
        duration: "17s",
        size: 15,
    },
    {
        left: "79%",
        delay: "4s",
        duration: "13s",
        size: 10,
    },
    {
        left: "91%",
        delay: "9s",
        duration: "18s",
        size: 14,
    },
];


export default function LoveQuote() {

    return (

        <section
            className="
                relative

                flex
                min-h-[580px]

                items-center

                overflow-hidden

                bg-gradient-to-br

                from-[#fffaf7]
                via-[#fdf1ed]
                to-[#f5e3dc]

                px-5
                py-24

                md:min-h-[650px]
            "
        >


            {/* ========================= */}
            {/* ÁNH SÁNG BLUR */}
            {/* ========================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    -left-24
                    top-10

                    h-[300px]
                    w-[300px]

                    rounded-full

                    bg-[#f3c8c0]/35

                    blur-[100px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute
                    -right-20
                    bottom-0

                    h-[320px]
                    w-[320px]

                    rounded-full

                    bg-[#efd6bd]/40

                    blur-[110px]
                "
            />


            {/* ========================= */}
            {/* BUBBLES */}
            {/* ========================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {bubbles.map(
                    (
                        bubble,
                        index
                    ) => (

                        <span
                            key={
                                index
                            }

                            className="
                                love-bubble

                                absolute
                                -bottom-20

                                rounded-full

                                border
                                border-white/70

                                bg-white/20

                                shadow-[inset_0_0_15px_rgba(255,255,255,0.6)]

                                backdrop-blur-[2px]
                            "

                            style={{
                                left:
                                    bubble.left,

                                width:
                                    bubble.size,

                                height:
                                    bubble.size,

                                animationDelay:
                                    bubble.delay,

                                animationDuration:
                                    bubble.duration,
                            }}
                        />

                    )
                )}

            </div>


            {/* ========================= */}
            {/* HEARTS */}
            {/* ========================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                {hearts.map(
                    (
                        heart,
                        index
                    ) => (

                        <span
                            key={
                                index
                            }

                            className="
                                love-heart

                                absolute

                                -bottom-10

                                text-[#dca79b]/60
                            "

                            style={{
                                left:
                                    heart.left,

                                animationDelay:
                                    heart.delay,

                                animationDuration:
                                    heart.duration,

                                fontSize:
                                    heart.size,
                            }}
                        >
                            ♥
                        </span>

                    )
                )}

            </div>


            {/* ========================= */}
            {/* DECORATION */}
            {/* ========================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-1/2
                    top-12

                    -translate-x-1/2

                    text-[#c99c8f]/25
                "
            >
                ♡
            </div>


            <div
                className="
                    pointer-events-none

                    absolute
                    bottom-12
                    left-1/2

                    -translate-x-1/2

                    flex
                    items-center

                    gap-3

                    opacity-30
                "
            >

                <span
                    className="
                        h-px
                        w-12

                        bg-[#a8796d]
                    "
                />

                <span
                    className="
                        text-[#a8796d]
                    "
                >
                    ♡
                </span>

                <span
                    className="
                        h-px
                        w-12

                        bg-[#a8796d]
                    "
                />

            </div>


            {/* ========================= */}
            {/* CONTENT */}
            {/* ========================= */}

            <Reveal
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    text-center
                "
            >


                {/* HEART */}

                <div
                    className="
                        mx-auto

                        flex
                        h-12
                        w-12

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#d8b5aa]/40

                        bg-white/40

                        text-lg

                        text-[#c58e80]

                        shadow-[0_10px_40px_rgba(163,111,95,0.12)]

                        backdrop-blur-md
                    "
                >
                    ♥
                </div>


                {/* QUOTE */}

                <blockquote
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-8

                        max-w-3xl

                        text-[27px]
                        font-light
                        italic

                        leading-[1.55]

                        text-[#5f4b45]

                        sm:text-3xl

                        md:text-5xl
                        md:leading-[1.45]
                    "
                >
                    “{wedding.loveQuote}”
                </blockquote>


                {/* DIVIDER */}

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
                            w-9

                            bg-[#cfaea4]/60
                        "
                    />

                    <span
                        className="
                            text-[8px]

                            text-[#ba887a]
                        "
                    >
                        ♥
                    </span>

                    <span
                        className="
                            h-px
                            w-9

                            bg-[#cfaea4]/60
                        "
                    />

                </div>


                {/* NAME */}

                <p
                    className="
                        font-wedding

                        mt-5

                        text-4xl

                        text-[#b97869]

                        sm:text-5xl

                        md:text-6xl
                    "
                >
                    Nam & Thư
                </p>


                {/* TEXT */}

                <p
                    className="
                        font-wedding-serif

                        mt-3

                        text-xs

                        uppercase

                        tracking-[0.28em]

                        text-[#8d746d]/65
                    "
                >
                    Cùng nhau viết tiếp câu chuyện yêu thương
                </p>

            </Reveal>

        </section>

    );
}