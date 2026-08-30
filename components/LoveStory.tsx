import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


export default function LoveStory() {

    return (

        <section
            id="story"

            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#F8F1EE_0%,#F8F1EE_8%,#F5F5EC_42%,#EEF4F6_100%)]

                px-5
                py-14

                sm:px-6
                sm:py-16

                md:px-8
                md:py-20

                lg:py-24
            "
        >


            {/* =================================================
                SEAMLESS TOP TRANSITION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-0
                    top-0

                    h-16
                    w-full

                    bg-gradient-to-b

                    from-[#F8F1EE]
                    via-[#F8F1EE]/75
                    to-transparent

                    md:h-20
                "
            />


            {/* =================================================
                BACKGROUND DECORATION - BLUE
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-36
                    top-[10%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#8FB4C7]/16

                    blur-[125px]

                    md:h-[470px]
                    md:w-[470px]
                "
            />


            {/* =================================================
                BACKGROUND DECORATION - DUSTY ROSE
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-[12%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#D9A5AE]/16

                    blur-[135px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                CENTER SAGE LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[50%]

                    h-[620px]
                    w-[70%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#DCE5D8]/16

                    blur-[140px]

                    md:w-[50%]
                "
            />


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1180px]
                "
            >


                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                <Reveal>

                    <div
                        className="
                            mx-auto

                            mb-10

                            max-w-3xl

                            text-center

                            sm:mb-12

                            md:mb-14

                            lg:mb-16
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
                                sm:tracking-[0.4em]
                            "
                        >
                            {
                                wedding
                                    .storySection
                                    .eyebrow
                            }
                        </p>


                        {/* =================================================
                            MAIN TITLE
                        ================================================= */}

                        <h2
                            className="
                                font-wedding-serif

                                mt-3

                                text-[44px]
                                font-light

                                leading-[1.08]

                                tracking-[-0.02em]

                                text-[#31566B]

                                sm:text-5xl

                                md:text-6xl

                                lg:text-[72px]
                            "
                        >
                            {
                                wedding
                                    .storySection
                                    .title
                            }
                        </h2>


                        {/* =================================================
                            DIVIDER
                        ================================================= */}

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

                                mt-5

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
                                    .storySection
                                    .description
                            }
                        </p>

                    </div>

                </Reveal>


                {/* =================================================
                    STORY LIST
                ================================================= */}

                <div
                    className="
                        relative

                        space-y-12

                        sm:space-y-14

                        md:space-y-18

                        lg:space-y-20
                    "
                >


                    {/* =================================================
                        DESKTOP TIMELINE
                    ================================================= */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            left-1/2
                            top-0

                            hidden

                            h-full
                            w-px

                            -translate-x-1/2

                            bg-gradient-to-b

                            from-transparent
                            via-[#7A9CAC]/25
                            to-transparent

                            lg:block
                        "
                    />


                    {
                        wedding.story.map(
                            (
                                item,
                                index
                            ) => {

                                const reverse =
                                    index % 2 === 1;


                                return (

                                    <Reveal
                                        key={
                                            item.title
                                        }

                                        delay={
                                            index * 80
                                        }
                                    >

                                        <article
                                            className="
                                                relative

                                                grid

                                                items-center

                                                gap-7

                                                md:gap-10

                                                lg:grid-cols-2
                                                lg:gap-20
                                            "
                                        >


                                            {/* =================================================
                                                IMAGE
                                            ================================================= */}

                                            <div
                                                className={`
                                                    ${reverse
                                                        ? "lg:order-2"
                                                        : ""
                                                    }
                                                `}
                                            >

                                                <div
                                                    className="
                                                        group

                                                        relative

                                                        mx-auto

                                                        aspect-[4/5]
                                                        w-full

                                                        max-w-[520px]

                                                        overflow-hidden

                                                        rounded-t-[160px]

                                                        border
                                                        border-[#FFFDF8]/90

                                                        bg-[#FFFDF8]/55

                                                        p-[6px]

                                                        shadow-[0_30px_80px_rgba(49,86,107,0.11)]

                                                        sm:p-2

                                                        md:rounded-t-[190px]
                                                    "
                                                >

                                                    <div
                                                        className="
                                                            relative

                                                            h-full
                                                            w-full

                                                            overflow-hidden

                                                            rounded-t-[155px]

                                                            md:rounded-t-[185px]
                                                        "
                                                    >

                                                        <Image
                                                            src={
                                                                item.image
                                                            }

                                                            alt={
                                                                item.title
                                                            }

                                                            fill

                                                            sizes="
                                                                (max-width: 768px) 92vw,
                                                                (max-width: 1200px) 48vw,
                                                                520px
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


                                                        {/* IMAGE GRADIENT */}

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


                                                    {/* =================================================
                                                        NUMBER
                                                    ================================================= */}

                                                    <div
                                                        className="
                                                            absolute

                                                            bottom-5
                                                            right-5

                                                            flex

                                                            h-11
                                                            w-11

                                                            items-center
                                                            justify-center

                                                            rounded-full

                                                            border
                                                            border-[#FFFDF8]/70

                                                            bg-[#FFFDF8]/82

                                                            font-wedding-serif

                                                            text-sm
                                                            font-medium

                                                            text-[#587589]

                                                            shadow-[0_8px_28px_rgba(49,86,107,0.10)]

                                                            backdrop-blur-md

                                                            sm:h-12
                                                            sm:w-12
                                                        "
                                                    >
                                                        {
                                                            String(
                                                                index + 1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )
                                                        }
                                                    </div>

                                                </div>

                                            </div>


                                            {/* =================================================
                                                CONTENT
                                            ================================================= */}

                                            <div
                                                className={`
                                                    mx-auto

                                                    w-full
                                                    max-w-[520px]

                                                    ${reverse
                                                        ? "lg:order-1 lg:text-right"
                                                        : ""
                                                    }
                                                `}
                                            >


                                                {/* =================================================
                                                    DATE
                                                ================================================= */}

                                                <div
                                                    className={`
                                                        flex

                                                        items-center

                                                        gap-3

                                                        ${reverse
                                                            ? "lg:justify-end"
                                                            : ""
                                                        }
                                                    `}
                                                >

                                                    <span
                                                        className="
                                                            h-px
                                                            w-8

                                                            bg-gradient-to-r

                                                            from-[#B8A27D]/55
                                                            to-transparent
                                                        "
                                                    />


                                                    <span
                                                        className="
                                                            rounded-full

                                                            border
                                                            border-[#7A9CAC]/20

                                                            bg-[#FFFDF8]/75

                                                            px-4
                                                            py-2

                                                            text-[9px]
                                                            font-medium

                                                            uppercase

                                                            tracking-[0.22em]

                                                            text-[#587589]

                                                            shadow-[0_8px_25px_rgba(49,86,107,0.06)]

                                                            backdrop-blur-md

                                                            sm:text-[10px]
                                                        "
                                                    >
                                                        {
                                                            item.date
                                                        }
                                                    </span>

                                                </div>


                                                {/* =================================================
                                                    TITLE
                                                ================================================= */}

                                                <h3
                                                    className="
                                                        font-wedding-serif

                                                        mt-4

                                                        text-[32px]
                                                        font-normal

                                                        leading-[1.2]

                                                        tracking-[-0.015em]

                                                        text-[#31566B]

                                                        sm:text-4xl

                                                        md:text-[42px]

                                                        lg:text-5xl
                                                    "
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </h3>


                                                {/* =================================================
                                                    SMALL DECORATION
                                                ================================================= */}

                                                <div
                                                    className={`
                                                        mt-4

                                                        flex

                                                        items-center

                                                        gap-2.5

                                                        ${reverse
                                                            ? "lg:justify-end"
                                                            : ""
                                                        }
                                                    `}
                                                >

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
                                                            w-12

                                                            bg-gradient-to-r

                                                            from-[#B8A27D]/50
                                                            to-transparent
                                                        "
                                                    />

                                                </div>


                                                {/* =================================================
                                                    STORY DESCRIPTION
                                                ================================================= */}

                                                <p
                                                    className="
                                                        font-wedding-serif

                                                        mt-4

                                                        text-[16px]
                                                        font-normal

                                                        leading-7

                                                        text-[#61726D]

                                                        sm:text-[17px]
                                                        sm:leading-8

                                                        md:text-lg
                                                        md:leading-9
                                                    "
                                                >
                                                    {
                                                        item.description
                                                    }
                                                </p>


                                                {/* =================================================
                                                    MOBILE SEPARATOR
                                                ================================================= */}

                                                <div
                                                    className="
                                                        mt-6

                                                        flex

                                                        items-center

                                                        gap-3

                                                        lg:hidden
                                                    "
                                                >

                                                    <span
                                                        className="
                                                            h-px
                                                            flex-1

                                                            bg-gradient-to-r

                                                            from-[#7A9CAC]/25
                                                            to-transparent
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

                                                </div>

                                            </div>


                                            {/* =================================================
                                                CENTER TIMELINE POINT
                                                DESKTOP ONLY
                                            ================================================= */}

                                            <div
                                                className="
                                                    absolute

                                                    left-1/2
                                                    top-1/2

                                                    hidden

                                                    h-10
                                                    w-10

                                                    -translate-x-1/2
                                                    -translate-y-1/2

                                                    items-center
                                                    justify-center

                                                    rounded-full

                                                    border
                                                    border-[#7A9CAC]/25

                                                    bg-[#F7F7EF]

                                                    text-[8px]

                                                    text-[#C98792]

                                                    shadow-[0_8px_30px_rgba(49,86,107,0.09)]

                                                    lg:flex
                                                "
                                            >
                                                ♥
                                            </div>

                                        </article>

                                    </Reveal>

                                );

                            }
                        )
                    }

                </div>


                {/* =================================================
                    END DECORATION
                ================================================= */}

                {/* =================================================
    END DECORATION
================================================= */}

                <Reveal>

                    <div
                        className="
            mx-auto

            mt-9

            flex

            max-w-[420px]

            items-center
            justify-center

            gap-4

            sm:mt-10

            md:mt-12
            md:max-w-[760px]
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

                max-w-[250px]

                text-center

                text-[14px]
                font-normal

                italic

                leading-6

                text-[#61726D]/85

                sm:text-[15px]

                md:max-w-none
                md:whitespace-nowrap
                md:text-[16px]
            "
                        >
                            {
                                wedding
                                    .storySection
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

                </Reveal>

            </div>

        </section>

    );
}