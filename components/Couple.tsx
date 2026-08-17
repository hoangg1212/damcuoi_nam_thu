import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


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
                BACKGROUND DECORATION
                KHÔNG DÙNG ẢNH BACKGROUND
            ================================================= */}


            {/* BLUE GLOW - TOP LEFT */}

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

                    sm:h-[430px]
                    sm:w-[430px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            {/* PINK GLOW - BOTTOM RIGHT */}

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

                    sm:h-[430px]
                    sm:w-[430px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* SAGE GLOW - CENTER */}

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

                        text-[#C98792]
                    "
                >
                    ♥
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

                    max-w-[1200px]
                "
            >


                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                <Reveal>

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
                            "
                        >
                            {
                                wedding
                                    .coupleSection
                                    .eyebrow
                            }
                        </p>


                        {/* TITLE */}

                        <h2
                            className="
                                font-wedding-serif

                                mt-4

                                text-[44px]
                                font-light

                                leading-[1.05]

                                tracking-[-0.02em]

                                text-[#31566B]

                                sm:text-5xl

                                md:text-6xl

                                lg:text-[72px]
                            "
                        >
                            {
                                wedding
                                    .coupleSection
                                    .title
                            }
                        </h2>


                        {/* DECORATIVE DIVIDER */}

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
                                    w-12

                                    bg-gradient-to-r

                                    from-transparent
                                    to-[#B8A27D]/45

                                    sm:w-16
                                "
                            />


                            <span
                                className="
                                    font-wedding-serif

                                    text-[10px]

                                    text-[#C98792]
                                "
                            >
                                ♡
                            </span>


                            <span
                                className="
                                    h-px
                                    w-12

                                    bg-gradient-to-l

                                    from-transparent
                                    to-[#B8A27D]/45

                                    sm:w-16
                                "
                            />

                        </div>


                        {/* DESCRIPTION */}

                        <p
                            className="
                                font-wedding-serif

                                mx-auto
                                mt-6

                                max-w-[690px]

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
                                    .coupleSection
                                    .description
                            }
                        </p>

                    </div>

                </Reveal>


                {/* =================================================
                    COUPLE GRID
                    CHÚ RỂ - HEART - CÔ DÂU
                ================================================= */}

                <div
                    className="
                        grid

                        items-start

                        gap-12

                        md:grid-cols-[1fr_80px_1fr]
                        md:gap-6

                        lg:grid-cols-[1fr_100px_1fr]
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

                                    p-[6px]

                                    shadow-[0_30px_80px_rgba(49,86,107,0.11)]

                                    sm:p-2
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
                                            (max-width: 767px) 92vw,
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


                                    {/* SOFT BLUE GRADIENT */}

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

                                    text-[10px]
                                    font-medium

                                    uppercase

                                    tracking-[0.34em]

                                    text-[#C98792]

                                    sm:mt-8
                                    sm:text-[11px]
                                "
                            >
                                Chú rể
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[34px]
                                    font-normal

                                    leading-tight

                                    tracking-[-0.015em]

                                    text-[#31566B]

                                    sm:text-4xl

                                    md:text-[40px]

                                    lg:text-5xl
                                "
                            >
                                {
                                    wedding
                                        .groom
                                        .fullName
                                }
                            </h3>


                            {/* MINI DIVIDER */}

                            <div
                                className="
                                    mx-auto
                                    mt-4

                                    flex

                                    items-center
                                    justify-center

                                    gap-2.5
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-8

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
                                    ♥
                                </span>


                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-gradient-to-l

                                        from-transparent
                                        to-[#B8A27D]/45
                                    "
                                />

                            </div>


                            {/* DESCRIPTION */}

                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto
                                    mt-4

                                    max-w-md

                                    text-[16px]
                                    font-normal

                                    leading-7

                                    text-[#61726D]

                                    sm:text-[17px]
                                    sm:leading-8

                                    lg:text-lg
                                "
                            >
                                {
                                    wedding
                                        .groom
                                        .description
                                }
                            </p>

                        </article>

                    </Reveal>


                    {/* =================================================
                        CENTER LOVE CONNECTOR
                    ================================================= */}

                    <div
                        className="
                            relative

                            mx-auto

                            flex
                            w-full

                            items-center
                            justify-center

                            md:h-full
                            md:min-h-[520px]

                            md:flex-col
                        "
                    >


                        {/* MOBILE LEFT LINE */}

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-r

                                from-transparent
                                via-[#7A9CAC]/35
                                to-[#7A9CAC]/35

                                md:hidden
                            "
                        />


                        {/* DESKTOP TOP LINE */}

                        <span
                            className="
                                hidden

                                w-px
                                flex-1

                                bg-gradient-to-b

                                from-transparent
                                via-[#7A9CAC]/30
                                to-[#7A9CAC]/30

                                md:block
                            "
                        />


                        {/* =================================================
                            HEART ICON
                            GIỮ NGUYÊN TRÁI TIM
                        ================================================= */}

                        <div
                            className="
                                relative

                                mx-5

                                flex
                                h-14
                                w-14

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

                                md:mx-0
                                md:my-5

                                md:h-16
                                md:w-16
                            "
                        >

                            {/* SMALL INNER RING */}

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


                        {/* MOBILE RIGHT LINE */}

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-l

                                from-transparent
                                via-[#7A9CAC]/35
                                to-[#7A9CAC]/35

                                md:hidden
                            "
                        />


                        {/* DESKTOP BOTTOM LINE */}

                        <span
                            className="
                                hidden

                                w-px
                                flex-1

                                bg-gradient-to-t

                                from-transparent
                                via-[#7A9CAC]/30
                                to-[#7A9CAC]/30

                                md:block
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

                                    p-[6px]

                                    shadow-[0_30px_80px_rgba(49,86,107,0.11)]

                                    sm:p-2
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
                                            (max-width: 767px) 92vw,
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


                                    {/* SOFT BLUE GRADIENT */}

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

                                    text-[10px]
                                    font-medium

                                    uppercase

                                    tracking-[0.34em]

                                    text-[#C98792]

                                    sm:mt-8
                                    sm:text-[11px]
                                "
                            >
                                Cô dâu
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[34px]
                                    font-normal

                                    leading-tight

                                    tracking-[-0.015em]

                                    text-[#31566B]

                                    sm:text-4xl

                                    md:text-[40px]

                                    lg:text-5xl
                                "
                            >
                                {
                                    wedding
                                        .bride
                                        .fullName
                                }
                            </h3>


                            {/* MINI DIVIDER */}

                            <div
                                className="
                                    mx-auto
                                    mt-4

                                    flex

                                    items-center
                                    justify-center

                                    gap-2.5
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-8

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
                                    ♥
                                </span>


                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-gradient-to-l

                                        from-transparent
                                        to-[#B8A27D]/45
                                    "
                                />

                            </div>


                            {/* DESCRIPTION */}

                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto
                                    mt-4

                                    max-w-md

                                    text-[16px]
                                    font-normal

                                    leading-7

                                    text-[#61726D]

                                    sm:text-[17px]
                                    sm:leading-8

                                    lg:text-lg
                                "
                            >
                                {
                                    wedding
                                        .bride
                                        .description
                                }
                            </p>

                        </article>

                    </Reveal>

                </div>


                {/* =================================================
                    BOTTOM DECORATION
                ================================================= */}

                <div
                    className="
                        mx-auto
                        mt-16

                        flex

                        items-center
                        justify-center

                        gap-4

                        md:mt-24
                    "
                >

                    <span
                        className="
                            h-px
                            w-14

                            bg-gradient-to-r

                            from-transparent
                            to-[#7A9CAC]/35
                        "
                    />


                    <span
                        className="
        font-wedding-serif

        text-[15px]
        font-normal

        italic

        tracking-[0.06em]

        text-[#587589]/85

        sm:text-[16px]

        md:text-[17px]
    "
                    >
                        {
                            wedding
                                .coupleSection
                                .bottomText
                        }
                    </span>


                    <span
                        className="
                            h-px
                            w-14

                            bg-gradient-to-l

                            from-transparent
                            to-[#7A9CAC]/35
                        "
                    />

                </div>

            </div>

        </section>

    );
}