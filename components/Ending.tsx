import Image from "next/image";

import { wedding } from "@/data/wedding";


/* =========================================================
   PETALS

   GIỮ NGUYÊN HIỆU ỨNG CÁNH HOA RƠI
========================================================= */

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


/* =========================================================
   SPARKLES

   GIỮ NGUYÊN HIỆU ỨNG HẠT SÁNG
========================================================= */

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


/* =========================================================
   ENDING
========================================================= */

export default function Ending() {

    return (

        <section
            className="
                relative

                -mt-px

                flex
                min-h-[680px]

                items-center

                overflow-hidden

                px-5
                py-24

                sm:px-6

                md:min-h-[760px]
                md:px-8
                md:py-32

                lg:min-h-[820px]
            "
        >


            {/* =================================================
                BACKGROUND IMAGE

                GIỮ NGUYÊN TÊN FILE.
                Sau này chỉ thay ảnh mới:
                public/images/weddingmessage.png
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    overflow-hidden
                "
            >

                <Image
                    src="/images/weddingmessage.png"

                    alt="Khoảnh khắc của Nam và Thư"

                    fill

                    sizes="100vw"

                    className="
                        ending-background

                        object-cover
                        object-center
                    "
                />

            </div>


            {/* =================================================
                SOFT IVORY OVERLAY

                Không làm ảnh tối.
                Phủ một lớp kem sáng để chữ dễ đọc.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[#F8F5EC]/52
                "
            />


            {/* =================================================
                CINEMATIC COLOR OVERLAY

                Xanh kem + blue mist + dusty rose
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[linear-gradient(to_bottom,rgba(250,243,239,0.96)_0%,rgba(244,247,241,0.66)_20%,rgba(231,240,244,0.48)_55%,rgba(247,238,237,0.76)_100%)]
                "
            />


            {/* =================================================
                SEAMLESS TOP TRANSITION

                WishesForm kết thúc #FAF3EF
                Ending bắt đầu cùng #FAF3EF
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-0
                    top-0

                    z-[2]

                    h-32
                    w-full

                    bg-gradient-to-b

                    from-[#FAF3EF]
                    via-[#FAF3EF]/85
                    to-transparent
                "
            />


            {/* =================================================
                CENTRAL BLUE / CREAM LIGHT
            ================================================= */}

            <div
                className="
                    ending-central-glow

                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[430px]
                    w-[430px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#EAF2F5]/40

                    blur-[115px]

                    md:h-[570px]
                    md:w-[570px]
                "
            />


            {/* =================================================
                LEFT BLUE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-32
                    top-[30%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#8FB4C7]/18

                    blur-[125px]

                    md:h-[480px]
                    md:w-[480px]
                "
            />


            {/* =================================================
                RIGHT PINK GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-36
                    bottom-[12%]

                    h-[400px]
                    w-[400px]

                    rounded-full

                    bg-[#D9A5AE]/18

                    blur-[130px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                TOP LIGHT
            ================================================= */}

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

                    from-[#FFFDF8]/60
                    to-transparent

                    blur-3xl
                "
            />


            {/* =================================================
                PETALS

                GIỮ NGUYÊN ANIMATION
                Chỉ đổi màu thành dusty rose.
            ================================================= */}

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

                                bg-[#D7A0AA]/50

                                shadow-[0_0_10px_rgba(201,135,146,0.16)]
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


            {/* =================================================
                SPARKLES

                GIỮ NGUYÊN ANIMATION
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
                                `ending-sparkle-${index}`
                            }

                            className="
                                ending-sparkle

                                absolute

                                h-[3px]
                                w-[3px]

                                rounded-full

                                bg-[#B8A27D]

                                shadow-[0_0_12px_rgba(184,162,125,0.55)]
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


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[760px]

                    text-center
                "
            >


                {/* =================================================
                    TOP DECORATION
                ================================================= */}

                <div
                    className="
                        mx-auto
                        mb-7

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
                            to-[#B8A27D]/55
                        "
                    />


                    <span
                        className="
                            text-[9px]

                            text-[#C98792]/85
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
                            to-[#B8A27D]/55
                        "
                    />

                </div>


                {/* =================================================
                    EYEBROW
                ================================================= */}

                <p
                    className="
                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.38em]

                        text-[#C98792]

                        sm:text-[10px]

                        md:text-[11px]
                    "
                >
                    {
                        wedding
                            .endingSection
                            .eyebrow
                    }
                </p>


                {/* =================================================
                    THANK YOU
                ================================================= */}

                <p
                    className="
                        font-wedding

                        ending-thank-you

                        mt-6

                        text-[48px]

                        leading-[1.05]

                        text-[#587589]

                        sm:text-6xl

                        md:text-[70px]
                    "
                >
                    {
                        wedding
                            .endingSection
                            .thankYou
                    }
                </p>


                {/* =================================================
                    INITIALS
                ================================================= */}

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

                            leading-none

                            text-[#31566B]

                            md:text-9xl
                        "
                    >
                        {
                            wedding
                                .groom
                                .shortName
                                .charAt(0)
                        }
                    </span>


                    {/* =================================================
                        MAIN HEART

                        GIỮ HIỆU ỨNG CŨ
                    ================================================= */}

                    <span
                        className="
                            ending-main-heart

                            relative

                            flex

                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#C98792]/28

                            bg-[#FFFDF8]/65

                            font-wedding-serif

                            text-lg

                            text-[#C98792]

                            shadow-[0_10px_35px_rgba(49,86,107,0.09)]

                            backdrop-blur-md

                            md:h-14
                            md:w-14
                            md:text-xl
                        "
                    >

                        <span
                            className="
                                absolute
                                inset-[5px]

                                rounded-full

                                border
                                border-[#B8A27D]/18
                            "
                        />


                        <span
                            className="
                                relative
                                z-10
                            "
                        >
                            ♥
                        </span>

                    </span>


                    <span
                        className="
                            font-wedding

                            text-7xl

                            leading-none

                            text-[#31566B]

                            md:text-9xl
                        "
                    >
                        {
                            wedding
                                .bride
                                .shortName
                                .charAt(0)
                        }
                    </span>

                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto

                        mt-8

                        max-w-[620px]

                        text-[16px]
                        font-normal

                        leading-7

                        text-[#526A68]

                        sm:text-[17px]
                        sm:leading-8

                        md:text-lg
                        md:leading-9
                    "
                >
                    {
                        wedding
                            .endingSection
                            .message
                    }


                    <br />


                    <span
                        className="
                            text-[#61726D]/90
                        "
                    >
                        {
                            wedding
                                .endingSection
                                .subMessage
                        }
                    </span>

                </p>


                {/* =================================================
                    SMALL DIVIDER
                ================================================= */}

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

                            bg-gradient-to-r

                            from-transparent
                            to-[#7A9CAC]/35
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
                            to-[#7A9CAC]/35
                        "
                    />

                </div>


                {/* =================================================
                    DATE
                ================================================= */}

                <strong
                    className="
                        font-wedding-serif

                        mt-6
                        block

                        text-[11px]
                        font-medium

                        tracking-[0.3em]

                        text-[#587589]/85

                        sm:text-xs

                        md:tracking-[0.35em]
                    "
                >
                    {
                        wedding
                            .displayDate
                    }
                </strong>


                {/* =================================================
                    SIGNATURE
                ================================================= */}

                <p
                    className="
                        font-wedding

                        mt-7

                        text-[38px]

                        leading-none

                        text-[#587589]

                        md:text-[44px]
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

                            mx-3

                            align-middle

                            text-[12px]
                            font-normal

                            text-[#C98792]
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
                    FINAL TEXT
                ================================================= */}

                <p
                    className="
                        font-wedding-serif

                        mt-4

                        text-[14px]
                        font-normal

                        italic

                        tracking-[0.04em]

                        text-[#61726D]/80

                        sm:text-[15px]
                    "
                >
                    {
                        wedding
                            .endingSection
                            .bottomText
                    }
                </p>

            </div>


            {/* =================================================
                BOTTOM FADE
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    bottom-0
                    left-0
                    right-0

                    h-32

                    bg-gradient-to-t

                    from-[#F7EEEB]/70
                    to-transparent
                "
            />

        </section>

    );
}