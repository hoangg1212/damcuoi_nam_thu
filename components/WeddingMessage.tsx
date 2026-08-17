import { wedding } from "@/data/wedding";


export default function WeddingMessage() {

    const sparkles = [
        {
            left: "8%",
            top: "22%",
            delay: "0s",
            size: 3,
        },
        {
            left: "17%",
            top: "68%",
            delay: "2s",
            size: 2,
        },
        {
            left: "28%",
            top: "15%",
            delay: "4s",
            size: 2,
        },
        {
            left: "39%",
            top: "80%",
            delay: "1s",
            size: 3,
        },
        {
            left: "53%",
            top: "20%",
            delay: "3s",
            size: 2,
        },
        {
            left: "65%",
            top: "72%",
            delay: "5s",
            size: 3,
        },
        {
            left: "78%",
            top: "18%",
            delay: "2.5s",
            size: 2,
        },
        {
            left: "89%",
            top: "64%",
            delay: "4.5s",
            size: 3,
        },
    ];


    return (

        <section
            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#F8F1EE_0%,#F8F1EE_8%,#F3F5EF_46%,#EAF2F5_100%)]

                px-5
                py-24

                sm:px-6

                md:py-32
            "
        >


            {/* =================================================
                SEAMLESS TOP

                WeddingEvent kết thúc bằng #F8F1EE
                WeddingMessage bắt đầu bằng #F8F1EE
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
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    wedding-message-glow-left

                    pointer-events-none

                    absolute

                    -left-32
                    top-1/2

                    h-[420px]
                    w-[420px]

                    -translate-y-1/2

                    rounded-full

                    bg-[#8FB4C7]/18

                    blur-[120px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            {/* =================================================
                PINK GLOW
            ================================================= */}

            <div
                className="
                    wedding-message-glow-right

                    pointer-events-none

                    absolute

                    -right-32
                    top-1/2

                    h-[420px]
                    w-[420px]

                    -translate-y-1/2

                    rounded-full

                    bg-[#D9A5AE]/17

                    blur-[120px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            {/* =================================================
                CENTER CREAM LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[420px]
                    w-[70%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#FFFDF8]/55

                    blur-[130px]

                    md:w-[50%]
                "
            />


            {/* =================================================
                LIGHT SWEEP
                GIỮ NGUYÊN HIỆU ỨNG
            ================================================= */}

            <div
                className="
                    wedding-message-light

                    pointer-events-none

                    absolute
                    inset-y-0

                    -left-[40%]

                    w-[35%]

                    rotate-[10deg]

                    bg-gradient-to-r

                    from-transparent
                    via-white/20
                    to-transparent

                    blur-xl
                "
            />


            {/* =================================================
                SPARKLES
                GIỮ NGUYÊN HIỆU ỨNG
            ================================================= */}

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
                                `sparkle-${index}`
                            }

                            className="
                                wedding-message-sparkle

                                absolute

                                rounded-full

                                bg-[#B8A27D]/70

                                shadow-[0_0_12px_rgba(184,162,125,0.35)]
                            "

                            style={{
                                left:
                                    sparkle.left,

                                top:
                                    sparkle.top,

                                width:
                                    sparkle.size,

                                height:
                                    sparkle.size,

                                animationDelay:
                                    sparkle.delay,
                            }}
                        />

                    )
                )}

            </div>


            {/* =================================================
                TOP DECORATION
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    mb-10

                    flex
                    max-w-[230px]

                    items-center
                    justify-center

                    gap-4
                "
            >

                <span
                    className="
                        wedding-message-line-left

                        h-px

                        bg-gradient-to-r

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />


                <span
                    className="
                        text-[9px]

                        text-[#C98792]/80
                    "
                >
                    ✦
                </span>


                <span
                    className="
                        wedding-message-line-right

                        h-px

                        bg-gradient-to-l

                        from-transparent
                        to-[#B8A27D]/45
                    "
                />

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    text-center
                "
            >


                {/* =================================================
                    SMALL TITLE
                ================================================= */}

                <p
                    className="
                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.4em]

                        text-[#C98792]

                        sm:text-[10px]

                        md:text-[11px]
                    "
                >
                    {
                        wedding
                            .weddingMessageSection
                            .eyebrow
                    }
                </p>


                {/* =================================================
                    QUOTE SYMBOL
                ================================================= */}

                <div
                    className="
                        wedding-message-symbol

                        font-wedding-serif

                        mt-8

                        text-5xl
                        leading-none

                        text-[#7A9CAC]/22

                        md:text-7xl
                    "
                >
                    “
                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <h2
                    className="
                        font-wedding-serif

                        mx-auto

                        -mt-3

                        max-w-[850px]

                        text-[28px]
                        font-light

                        leading-[1.55]

                        tracking-[-0.015em]

                        text-[#31566B]

                        sm:text-[32px]

                        md:text-[44px]
                        md:leading-[1.48]

                        lg:text-[48px]
                    "
                >

                    {
                        wedding
                            .weddingMessageSection
                            .message
                    }


                    <span
                        className="
                            text-[#587589]
                        "
                    >
                        {" "}

                        {
                            wedding
                                .weddingMessageSection
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
                        mt-10

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
                            to-[#B8A27D]/45
                        "
                    />


                    <span
                        className="
                            text-[7px]

                            text-[#C98792]
                        "
                    >
                        ✦
                    </span>


                    <span
                        className="
                            h-px
                            w-11

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/45
                        "
                    />

                </div>


                {/* =================================================
                    NAMES
                ================================================= */}

                <p
                    className="
                        font-wedding

                        mt-7

                        text-[48px]

                        leading-none

                        text-[#587589]

                        sm:text-5xl

                        md:text-6xl
                    "
                >

                    {
                        wedding
                            .groom
                            .shortName
                    }


                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            align-middle

                            text-[15px]
                            font-light

                            text-[#C98792]

                            md:text-lg
                        "
                    >
                        &
                    </span>


                    {
                        wedding
                            .bride
                            .shortName
                    }

                </p>


                {/* =================================================
                    BOTTOM TEXT
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-5

                        max-w-[570px]

                        text-[14px]
                        font-normal

                        italic

                        leading-7

                        tracking-[0.03em]

                        text-[#61726D]/85

                        sm:text-[15px]

                        md:text-[16px]
                    "
                >
                    {
                        wedding
                            .weddingMessageSection
                            .bottomText
                    }
                </p>

            </div>


            {/* =================================================
                BOTTOM DECORATION
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    mt-12

                    flex
                    max-w-[190px]

                    items-center
                    justify-center

                    gap-3
                "
            >

                <span
                    className="
                        h-px
                        flex-1

                        bg-gradient-to-r

                        from-transparent
                        to-[#7A9CAC]/30
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#C98792]/65
                    "
                >
                    ♡
                </span>


                <span
                    className="
                        h-px
                        flex-1

                        bg-gradient-to-l

                        from-transparent
                        to-[#7A9CAC]/30
                    "
                />

            </div>

        </section>

    );
}