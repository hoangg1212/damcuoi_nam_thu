/* =========================================================
   COUPLE
   DESKTOP: GIỮ BỐ CỤC 2 ẢNH VÒM
   MOBILE: ẢNH CHỮ NHẬT SO LE
   DECORATION: NHẪN CƯỚI
========================================================= */

import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


/* =========================================================
   NHẪN CƯỚI
========================================================= */

function RingDecoration() {

    return (

        <div
            className="
                mx-auto

                flex

                w-full
                max-w-[520px]

                items-center
                justify-center

                py-1
            "
            aria-hidden="true"
        >

            <svg
                viewBox="0 0 500 100"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="
                    h-[68px]
                    w-full

                    overflow-visible

                    sm:h-[76px]

                    md:h-[88px]
                "
            >

                {/* LEFT DECORATIVE LINE */}

                <path
                    d="
                        M0 70
                        C35 52 58 86 91 69
                        C116 56 121 80 146 68
                        C162 60 170 59 188 63
                    "
                    stroke="#B8A27D"
                    strokeWidth="1.2"
                    opacity="0.55"
                />


                {/* RIGHT DECORATIVE LINE */}

                <path
                    d="
                        M312 63
                        C330 59 338 60 354 68
                        C379 80 384 56 409 69
                        C442 86 465 52 500 70
                    "
                    stroke="#B8A27D"
                    strokeWidth="1.2"
                    opacity="0.55"
                />


                {/* LEFT RING */}

                <ellipse
                    cx="220"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="220"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />


                {/* RIGHT RING */}

                <ellipse
                    cx="280"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="280"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />

            </svg>

        </div>

    );
}


/* =========================================================
   MAIN
========================================================= */

export default function Couple() {

    return (

        <section
            id="couple"

            className="
                relative

                overflow-hidden

                bg-gradient-to-b

                from-[#F8F7EC]
                via-[#F2F5EF]
                to-[#EEF4F6]

                px-0
                py-14

                sm:py-16

                md:px-8
                md:py-24

                lg:py-28
            "
        >


            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-40
                    top-20

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#8FB4C7]/20

                    blur-[120px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-12

                    h-[350px]
                    w-[350px]

                    rounded-full

                    bg-[#D9A5AE]/18

                    blur-[125px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[42%]

                    h-[520px]
                    w-[75%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#DCE5D8]/24

                    blur-[125px]

                    md:w-[55%]
                "
            />


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1200px]
                "
            >


                {/* =================================================
                    HEADING
                ================================================= */}

                <Reveal>

                    <div
                        className="
                            mx-auto

                            max-w-[760px]

                            px-5

                            text-center
                        "
                    >


                        {/* TITLE */}

                        <h2
                            className="
                                font-wedding-serif

                                text-[26px]
                                font-medium

                                uppercase

                                leading-[1.25]

                                tracking-[0.045em]

                                text-[#9B7B4D]

                                sm:text-[32px]

                                md:text-[40px]

                                lg:text-[44px]
                            "
                        >
                            {
                                wedding
                                    .coupleSection
                                    .invitationTitle
                            }
                        </h2>


                        {/* =================================================
                            RING DECORATION
                        ================================================= */}

                        <div
                            className="
                                mt-2
                                mb-2

                                sm:mt-3
                                sm:mb-3

                                md:mt-4
                                md:mb-4
                            "
                        >

                            <RingDecoration />

                        </div>


                        {/* INVITATION TEXT */}

                        <p
                            className="
                                font-wedding-serif

                                mx-auto

                                max-w-[560px]

                                text-[17px]

                                leading-7

                                text-[#9B7B60]

                                sm:text-[19px]
                                sm:leading-8

                                md:text-[21px]
                            "
                        >
                            {
                                wedding
                                    .coupleSection
                                    .invitationText
                            }
                        </p>

                    </div>

                </Reveal>


                {/* =================================================
                    MOBILE
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-8

                        grid

                        w-full
                        max-w-[430px]

                        grid-cols-2

                        items-start

                        gap-4

                        px-3

                        md:hidden
                    "
                >


                    {/* =================================================
                        GROOM COLUMN
                    ================================================= */}

                    <Reveal>

                        <div
                            className="
                                pt-20
                            "
                        >


                            {/* GROOM NAME */}

                            <div
                                className="
                                    mb-2

                                    text-center
                                "
                            >

                                <p
                                    className="
                                        font-wedding

                                        text-[39px]

                                        leading-[0.95]

                                        text-[#B08D57]
                                    "
                                >
                                    Chú rể
                                </p>


                                <p
                                    className="
                                        font-wedding-serif

                                        mt-1

                                        text-[20px]
                                        font-medium

                                        uppercase

                                        leading-[1.15]

                                        tracking-[0.03em]

                                        text-[#31566B]
                                    "
                                >
                                    {
                                        wedding
                                            .groom
                                            .fullName
                                    }
                                </p>

                            </div>


                            {/* GROOM IMAGE */}

                            <div
                                className="
                                    group

                                    relative

                                    aspect-[3/4]
                                    w-full

                                    overflow-hidden

                                    border-[3px]
                                    border-[#FFFDF8]/95

                                    bg-[#FFFDF8]

                                    shadow-[0_16px_38px_rgba(49,86,107,0.11)]
                                "
                            >

                                <Image
                                    src={
                                        wedding
                                            .groom
                                            .image
                                    }

                                    alt={
                                        wedding
                                            .groom
                                            .fullName
                                    }

                                    fill

                                    sizes="47vw"

                                    className="
                                        object-cover
                                        object-center

                                        transition-transform
                                        duration-[1200ms]

                                        ease-out

                                        group-hover:scale-[1.04]
                                    "
                                />


                                <div
                                    className="
                                        pointer-events-none

                                        absolute
                                        inset-0

                                        bg-gradient-to-t

                                        from-[#213E50]/10
                                        via-transparent
                                        to-transparent
                                    "
                                />

                            </div>

                        </div>

                    </Reveal>


                    {/* =================================================
                        BRIDE COLUMN
                    ================================================= */}

                    <Reveal
                        delay={120}
                    >

                        <div>


                            {/* BRIDE IMAGE */}

                            <div
                                className="
                                    group

                                    relative

                                    aspect-[3/4]
                                    w-full

                                    overflow-hidden

                                    border-[3px]
                                    border-[#FFFDF8]/95

                                    bg-[#FFFDF8]

                                    shadow-[0_16px_38px_rgba(49,86,107,0.11)]
                                "
                            >

                                <Image
                                    src={
                                        wedding
                                            .bride
                                            .image
                                    }

                                    alt={
                                        wedding
                                            .bride
                                            .fullName
                                    }

                                    fill

                                    sizes="47vw"

                                    className="
                                        object-cover
                                        object-center

                                        transition-transform
                                        duration-[1200ms]

                                        ease-out

                                        group-hover:scale-[1.04]
                                    "
                                />


                                <div
                                    className="
                                        pointer-events-none

                                        absolute
                                        inset-0

                                        bg-gradient-to-t

                                        from-[#213E50]/10
                                        via-transparent
                                        to-transparent
                                    "
                                />

                            </div>


                            {/* BRIDE NAME */}

                            <div
                                className="
                                    mt-2

                                    text-center
                                "
                            >

                                <p
                                    className="
                                        font-wedding

                                        text-[39px]

                                        leading-[0.95]

                                        text-[#B08D57]
                                    "
                                >
                                    Cô dâu
                                </p>


                                <p
                                    className="
                                        font-wedding-serif

                                        mt-1

                                        text-[20px]
                                        font-medium

                                        uppercase

                                        leading-[1.15]

                                        tracking-[0.03em]

                                        text-[#31566B]
                                    "
                                >
                                    {
                                        wedding
                                            .bride
                                            .fullName
                                    }
                                </p>

                            </div>

                        </div>

                    </Reveal>

                </div>


                {/* =================================================
                    MOBILE SMALL DIVIDER
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-7

                        flex

                        max-w-[220px]

                        items-center
                        justify-center

                        gap-3

                        px-5

                        md:hidden
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#B8A27D]/45
                        "
                    />


                    <span
                        className="
                            text-[8px]

                            text-[#C98792]
                        "
                    >
                        ♥
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#B8A27D]/45
                        "
                    />

                </div>


                {/* =================================================
                    DESKTOP
                ================================================= */}

                <div
                    className="
                        mx-auto

                        mt-12

                        hidden

                        max-w-[1080px]

                        grid-cols-[1fr_90px_1fr]

                        items-start

                        gap-8

                        md:grid

                        lg:grid-cols-[1fr_110px_1fr]

                        lg:gap-10
                    "
                >


                    {/* =================================================
                        GROOM
                    ================================================= */}

                    <Reveal>

                        <article
                            className="
                                mx-auto

                                w-full
                                max-w-[470px]

                                text-center
                            "
                        >


                            {/* IMAGE FRAME */}

                            <div
                                className="
                                    group

                                    relative

                                    mx-auto

                                    aspect-[4/5]
                                    w-full

                                    overflow-hidden

                                    rounded-t-[150px]

                                    border
                                    border-[#FFFDF8]/90

                                    bg-[#FFFDF8]/55

                                    p-2

                                    shadow-[0_30px_80px_rgba(49,86,107,0.11)]
                                "
                            >

                                <div
                                    className="
                                        relative

                                        h-full
                                        w-full

                                        overflow-hidden

                                        rounded-t-[145px]
                                    "
                                >

                                    <Image
                                        src={
                                            wedding
                                                .groom
                                                .image
                                        }

                                        alt={
                                            wedding
                                                .groom
                                                .fullName
                                        }

                                        fill

                                        sizes="
                                            (max-width: 1100px) 42vw,
                                            470px
                                        "

                                        className="
                                            object-cover
                                            object-center

                                            transition-transform
                                            duration-[1400ms]

                                            ease-out

                                            group-hover:scale-[1.04]
                                        "
                                    />


                                    <div
                                        className="
                                            pointer-events-none

                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#213E50]/18
                                            via-transparent
                                            to-transparent
                                        "
                                    />

                                </div>

                            </div>


                            {/* ROLE */}

                            <p
                                className="
                                    mt-7

                                    text-[11px]
                                    font-medium

                                    uppercase

                                    tracking-[0.34em]

                                    text-[#C98792]
                                "
                            >
                                Chú rể
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[40px]
                                    font-normal

                                    leading-tight

                                    tracking-[-0.015em]

                                    text-[#31566B]

                                    lg:text-5xl
                                "
                            >
                                {
                                    wedding
                                        .groom
                                        .fullName
                                }
                            </h3>

                        </article>

                    </Reveal>


                    {/* =================================================
                        CENTER CONNECTOR
                    ================================================= */}

                    <div
                        className="
                            relative

                            mx-auto

                            flex

                            h-full
                            min-h-[520px]

                            w-full

                            flex-col

                            items-center
                            justify-center
                        "
                    >

                        <span
                            className="
                                w-px
                                flex-1

                                bg-gradient-to-b

                                from-transparent
                                via-[#7A9CAC]/30
                                to-[#7A9CAC]/30
                            "
                        />


                        <div
                            className="
                                relative

                                my-5

                                flex

                                h-16
                                w-16

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[#C98792]/30

                                bg-[#FFFDF8]/82

                                text-base

                                text-[#C98792]

                                shadow-[0_12px_38px_rgba(49,86,107,0.10)]

                                backdrop-blur-md
                            "
                        >

                            <span
                                className="
                                    absolute
                                    inset-[5px]

                                    rounded-full

                                    border
                                    border-[#B8A27D]/20
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

                        </div>


                        <span
                            className="
                                w-px
                                flex-1

                                bg-gradient-to-t

                                from-transparent
                                via-[#7A9CAC]/30
                                to-[#7A9CAC]/30
                            "
                        />

                    </div>


                    {/* =================================================
                        BRIDE
                    ================================================= */}

                    <Reveal
                        delay={150}
                    >

                        <article
                            className="
                                mx-auto

                                w-full
                                max-w-[470px]

                                text-center
                            "
                        >


                            {/* IMAGE FRAME */}

                            <div
                                className="
                                    group

                                    relative

                                    mx-auto

                                    aspect-[4/5]
                                    w-full

                                    overflow-hidden

                                    rounded-t-[150px]

                                    border
                                    border-[#FFFDF8]/90

                                    bg-[#FFFDF8]/55

                                    p-2

                                    shadow-[0_30px_80px_rgba(49,86,107,0.11)]
                                "
                            >

                                <div
                                    className="
                                        relative

                                        h-full
                                        w-full

                                        overflow-hidden

                                        rounded-t-[145px]
                                    "
                                >

                                    <Image
                                        src={
                                            wedding
                                                .bride
                                                .image
                                        }

                                        alt={
                                            wedding
                                                .bride
                                                .fullName
                                        }

                                        fill

                                        sizes="
                                            (max-width: 1100px) 42vw,
                                            470px
                                        "

                                        className="
                                            object-cover
                                            object-center

                                            transition-transform
                                            duration-[1400ms]

                                            ease-out

                                            group-hover:scale-[1.04]
                                        "
                                    />


                                    <div
                                        className="
                                            pointer-events-none

                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#213E50]/18
                                            via-transparent
                                            to-transparent
                                        "
                                    />

                                </div>

                            </div>


                            {/* ROLE */}

                            <p
                                className="
                                    mt-7

                                    text-[11px]
                                    font-medium

                                    uppercase

                                    tracking-[0.34em]

                                    text-[#C98792]
                                "
                            >
                                Cô dâu
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[40px]
                                    font-normal

                                    leading-tight

                                    tracking-[-0.015em]

                                    text-[#31566B]

                                    lg:text-5xl
                                "
                            >
                                {
                                    wedding
                                        .bride
                                        .fullName
                                }
                            </h3>

                        </article>

                    </Reveal>

                </div>


                {/* =================================================
                    SHARED DESCRIPTION
                ================================================= */}

                <Reveal>

                    <div
                        className="
                            mx-auto

                            mt-8

                            max-w-[850px]

                            px-6

                            text-center

                            md:mt-14
                        "
                    >

                        <p
                            className="
                                font-wedding-serif

                                text-[16px]

                                leading-[1.75]

                                text-[#7A6652]

                                sm:text-[18px]
                                sm:leading-8

                                md:text-[20px]
                                md:leading-9
                            "
                        >
                            {
                                wedding
                                    .coupleSection
                                    .description
                            }
                        </p>

                    </div>

                </Reveal>

            </div>

        </section>

    );
}