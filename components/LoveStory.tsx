import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


export default function LoveStory() {

    return (

        <section
            id="story"

            className="
                relative
                overflow-hidden

                bg-gradient-to-b

                from-[#fffaf7]
                via-[#fffdf9]
                to-[#f8eee8]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
            "
        >


            {/* ==================================== */}
            {/* BACKGROUND DECORATION */}
            {/* ==================================== */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-36
                    top-[12%]

                    h-[340px]
                    w-[340px]

                    rounded-full

                    bg-[#e8bcb0]/15

                    blur-[120px]

                    md:h-[440px]
                    md:w-[440px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-[12%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#dcc2a4]/20

                    blur-[130px]

                    md:h-[480px]
                    md:w-[480px]
                "
            />


            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1180px]
                "
            >


                {/* ==================================== */}
                {/* SECTION HEADING */}
                {/* ==================================== */}

                <Reveal>

                    <div
                        className="
                            mx-auto

                            mb-16

                            max-w-3xl

                            text-center

                            sm:mb-20

                            md:mb-24

                            lg:mb-28
                        "
                    >

                        <p
                            className="
                                text-[11px]
                                font-semibold

                                uppercase

                                tracking-[0.28em]

                                text-[#9d6f63]

                                sm:text-xs
                                sm:tracking-[0.32em]
                            "
                        >
                            Hành trình của chúng mình
                        </p>


                        <h2
                            className="
                                font-wedding-serif

                                mt-4

                                text-[42px]
                                font-light

                                leading-tight

                                text-[#4f403a]

                                sm:text-5xl

                                md:text-6xl

                                lg:text-7xl
                            "
                        >
                            Chuyện tình yêu
                        </h2>


                        {/* DIVIDER */}

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
                                    w-10

                                    bg-[#c59b8e]/45

                                    sm:w-14
                                "
                            />


                            <span
                                className="
                                    text-[9px]

                                    text-[#b77969]
                                "
                            >
                                ♥
                            </span>


                            <span
                                className="
                                    h-px
                                    w-10

                                    bg-[#c59b8e]/45

                                    sm:w-14
                                "
                            />

                        </div>


                        <p
                            className="
                                font-wedding-serif

                                mx-auto

                                mt-6

                                max-w-2xl

                                text-[16px]

                                leading-7

                                text-[#66554e]

                                sm:text-lg
                                sm:leading-8

                                md:text-xl
                                md:leading-9
                            "
                        >
                            Tình yêu của chúng mình không bắt đầu bằng điều gì quá đặc biệt.
                            Chỉ là từ một cuộc gặp, rồi từng chút một trở thành một người không
                            thể thiếu trong cuộc đời nhau.
                        </p>

                    </div>

                </Reveal>


                {/* ==================================== */}
                {/* STORY LIST */}
                {/* ==================================== */}

                <div
                    className="
                        relative

                        space-y-20

                        sm:space-y-24

                        md:space-y-32

                        lg:space-y-36
                    "
                >


                    {/* TIMELINE DESKTOP */}

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
                            via-[#c8a497]/25
                            to-transparent

                            lg:block
                        "
                    />


                    {wedding.story.map(
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

                                            gap-8

                                            md:gap-12

                                            lg:grid-cols-2
                                            lg:gap-24
                                        "
                                    >


                                        {/* ==================================== */}
                                        {/* IMAGE */}
                                        {/* ==================================== */}

                                        <div
                                            className={`
                                                ${
                                                    reverse
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
                                                    border-white/80

                                                    bg-white/40

                                                    p-[6px]

                                                    shadow-[0_30px_80px_rgba(105,73,61,0.12)]

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

                                                            from-[#342822]/20
                                                            via-transparent
                                                            to-transparent
                                                        "
                                                    />

                                                </div>


                                                {/* NUMBER */}

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
                                                        border-white/60

                                                        bg-white/70

                                                        font-wedding-serif

                                                        text-sm

                                                        text-[#9c6d60]

                                                        shadow-lg

                                                        backdrop-blur-md

                                                        sm:h-12
                                                        sm:w-12
                                                    "
                                                >
                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </div>

                                            </div>

                                        </div>


                                        {/* ==================================== */}
                                        {/* CONTENT */}
                                        {/* ==================================== */}

                                        <div
                                            className={`
                                                mx-auto

                                                w-full
                                                max-w-[520px]

                                                ${
                                                    reverse
                                                        ? "lg:order-1 lg:text-right"
                                                        : ""
                                                }
                                            `}
                                        >


                                            {/* DATE */}

                                            <div
                                                className={`
                                                    flex

                                                    items-center

                                                    gap-3

                                                    ${
                                                        reverse
                                                            ? "lg:justify-end"
                                                            : ""
                                                    }
                                                `}
                                            >

                                                <span
                                                    className="
                                                        h-px
                                                        w-8

                                                        bg-[#c49789]/50
                                                    "
                                                />


                                                <span
                                                    className="
                                                        rounded-full

                                                        border
                                                        border-[#cba69a]/30

                                                        bg-[#fff9f6]/80

                                                        px-4
                                                        py-2

                                                        text-[10px]
                                                        font-semibold

                                                        uppercase

                                                        tracking-[0.2em]

                                                        text-[#99675b]

                                                        shadow-[0_8px_25px_rgba(138,89,74,0.06)]

                                                        sm:text-[11px]
                                                    "
                                                >
                                                    {item.date}
                                                </span>

                                            </div>


                                            {/* TITLE */}

                                            <h3
                                                className="
                                                    font-wedding-serif

                                                    mt-5

                                                    text-[32px]
                                                    font-normal

                                                    leading-[1.2]

                                                    text-[#4b3b35]

                                                    sm:text-4xl

                                                    md:text-[42px]

                                                    lg:text-5xl
                                                "
                                            >
                                                {item.title}
                                            </h3>


                                            {/* SMALL DECORATION */}

                                            <div
                                                className={`
                                                    mt-5

                                                    flex

                                                    items-center

                                                    gap-2

                                                    ${
                                                        reverse
                                                            ? "lg:justify-end"
                                                            : ""
                                                    }
                                                `}
                                            >

                                                <span
                                                    className="
                                                        text-[7px]

                                                        text-[#b77969]
                                                    "
                                                >
                                                    ♥
                                                </span>


                                                <span
                                                    className="
                                                        h-px
                                                        w-12

                                                        bg-gradient-to-r

                                                        from-[#c49a8d]/50
                                                        to-transparent
                                                    "
                                                />

                                            </div>


                                            {/* DESCRIPTION */}

                                            <p
                                                className="
                                                    font-wedding-serif

                                                    mt-5

                                                    text-[16px]

                                                    leading-7

                                                    text-[#64534c]

                                                    sm:text-[17px]
                                                    sm:leading-8

                                                    md:text-lg
                                                    md:leading-9
                                                "
                                            >
                                                {item.description}
                                            </p>


                                            {/* MOBILE SEPARATOR */}

                                            <div
                                                className="
                                                    mt-8

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

                                                        from-[#c5a093]/30
                                                        to-transparent
                                                    "
                                                />


                                                <span
                                                    className="
                                                        text-[8px]

                                                        text-[#b77969]/60
                                                    "
                                                >
                                                    ♡
                                                </span>

                                            </div>

                                        </div>


                                        {/* ==================================== */}
                                        {/* CENTER TIMELINE POINT - DESKTOP */}
                                        {/* ==================================== */}

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
                                                border-[#c59b8e]/35

                                                bg-[#fffaf7]

                                                text-[8px]

                                                text-[#b77969]

                                                shadow-[0_8px_30px_rgba(138,87,73,0.10)]

                                                lg:flex
                                            "
                                        >
                                            ♥
                                        </div>

                                    </article>

                                </Reveal>

                            );

                        }
                    )}

                </div>


                {/* ==================================== */}
                {/* END DECORATION */}
                {/* ==================================== */}

                <div
                    className="
                        mx-auto

                        mt-20

                        flex

                        max-w-[230px]

                        items-center
                        justify-center

                        gap-4

                        sm:mt-24

                        md:mt-32
                    "
                >

                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-r

                            from-transparent
                            to-[#b98979]/35
                        "
                    />


                    <span
                        className="
                            font-wedding

                            text-2xl

                            text-[#b77969]/70
                        "
                    >
                        N ♥ T
                    </span>


                    <span
                        className="
                            h-px
                            flex-1

                            bg-gradient-to-l

                            from-transparent
                            to-[#b98979]/35
                        "
                    />

                </div>

            </div>

        </section>

    );
}