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

                from-[#fffaf7]
                via-[#faf3ee]
                to-[#f6ebe5]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
            "
        >


            {/* ===================================== */}
            {/* BACKGROUND DECORATION */}
            {/* ===================================== */}

            <div
                className="
                    pointer-events-none

                    absolute
                    -left-32
                    top-20

                    h-[320px]
                    w-[320px]

                    rounded-full

                    bg-[#e9bdb2]/20

                    blur-[110px]

                    md:h-[420px]
                    md:w-[420px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute
                    -right-32
                    bottom-16

                    h-[340px]
                    w-[340px]

                    rounded-full

                    bg-[#dbc3a7]/20

                    blur-[120px]

                    md:h-[460px]
                    md:w-[460px]
                "
            />


            {/* hoa văn nhẹ phía trên */}

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

                    opacity-40

                    md:top-12
                "
            >

                <span
                    className="
                        h-px
                        w-8

                        bg-gradient-to-r

                        from-transparent
                        to-[#b68574]
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#b68574]
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
                        to-[#b68574]
                    "
                />

            </div>


            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-[1200px]
                "
            >


                {/* ===================================== */}
                {/* HEADING */}
                {/* ===================================== */}

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


                        <p
                            className="
                                text-[11px]
                                font-medium

                                uppercase

                                tracking-[0.32em]

                                text-[#9d6f63]

                                sm:text-xs
                            "
                        >
                            Hai mảnh ghép
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
                            Chúng mình
                        </h2>


                        {/* divider */}

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

                                    bg-[#c59b8e]/40

                                    sm:w-14
                                "
                            />


                            <span
                                className="
                                    text-[9px]

                                    text-[#b77969]
                                "
                            >
                                ♡
                            </span>


                            <span
                                className="
                                    h-px
                                    w-10

                                    bg-[#c59b8e]/40

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
                            Hai hành trình khác nhau, hai thế giới từng chẳng liên quan,
                            rồi một ngày lại gặp nhau và trở thành một phần trong cuộc đời của nhau.
                        </p>

                    </div>

                </Reveal>


                {/* ===================================== */}
                {/* COUPLE GRID */}
                {/* ===================================== */}

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


                    {/* ===================================== */}
                    {/* GROOM */}
                    {/* ===================================== */}

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
                                    border-white/70

                                    bg-white/40

                                    p-[6px]

                                    shadow-[0_28px_70px_rgba(104,72,61,0.12)]

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
                                            wedding.groom.image
                                        }

                                        alt={
                                            wedding.groom.fullName
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


                                    {/* soft gradient */}

                                    <div
                                        className="
                                            pointer-events-none

                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#3d3029]/20
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
                                    font-semibold

                                    uppercase

                                    tracking-[0.28em]

                                    text-[#a06f62]

                                    sm:mt-8
                                    sm:text-xs
                                "
                            >
                                Chú rể
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[32px]
                                    font-normal

                                    leading-tight

                                    text-[#4c3d37]

                                    sm:text-4xl

                                    md:text-[38px]

                                    lg:text-5xl
                                "
                            >
                                {wedding.groom.fullName}
                            </h3>


                            {/* MINI DIVIDER */}

                            <div
                                className="
                                    mx-auto
                                    mt-4

                                    flex

                                    items-center
                                    justify-center

                                    gap-2
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-[#caa79c]/40
                                    "
                                />

                                <span
                                    className="
                                        text-[7px]

                                        text-[#b77969]/80
                                    "
                                >
                                    ♥
                                </span>

                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-[#caa79c]/40
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

                                    leading-7

                                    text-[#66554e]

                                    sm:text-[17px]
                                    sm:leading-8

                                    lg:text-lg
                                "
                            >
                                {wedding.groom.description}
                            </p>

                        </article>

                    </Reveal>


                    {/* ===================================== */}
                    {/* CENTER LOVE CONNECTOR */}
                    {/* ===================================== */}

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


                        {/* mobile line */}

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-r

                                from-transparent
                                via-[#c19a8d]/40
                                to-[#c19a8d]/40

                                md:hidden
                            "
                        />


                        {/* desktop vertical line */}

                        <span
                            className="
                                hidden

                                w-px
                                flex-1

                                bg-gradient-to-b

                                from-transparent
                                via-[#c19a8d]/35
                                to-[#c19a8d]/35

                                md:block
                            "
                        />


                        {/* HEART */}

                        <div
                            className="
                                mx-5

                                flex
                                h-14
                                w-14

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[#c6a092]/40

                                bg-white/60

                                text-base

                                text-[#b77969]

                                shadow-[0_12px_35px_rgba(142,90,75,0.10)]

                                backdrop-blur-md

                                md:mx-0
                                md:my-5

                                md:h-16
                                md:w-16
                            "
                        >
                            ♥
                        </div>


                        {/* mobile line */}

                        <span
                            className="
                                h-px

                                flex-1

                                bg-gradient-to-l

                                from-transparent
                                via-[#c19a8d]/40
                                to-[#c19a8d]/40

                                md:hidden
                            "
                        />


                        {/* desktop line */}

                        <span
                            className="
                                hidden

                                w-px
                                flex-1

                                bg-gradient-to-t

                                from-transparent
                                via-[#c19a8d]/35
                                to-[#c19a8d]/35

                                md:block
                            "
                        />

                    </div>


                    {/* ===================================== */}
                    {/* BRIDE */}
                    {/* ===================================== */}

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
                                    border-white/70

                                    bg-white/40

                                    p-[6px]

                                    shadow-[0_28px_70px_rgba(104,72,61,0.12)]

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
                                            wedding.bride.image
                                        }

                                        alt={
                                            wedding.bride.fullName
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


                                    <div
                                        className="
                                            pointer-events-none

                                            absolute
                                            inset-0

                                            bg-gradient-to-t

                                            from-[#3d3029]/20
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
                                    font-semibold

                                    uppercase

                                    tracking-[0.28em]

                                    text-[#a06f62]

                                    sm:mt-8
                                    sm:text-xs
                                "
                            >
                                Cô dâu
                            </p>


                            {/* NAME */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[32px]
                                    font-normal

                                    leading-tight

                                    text-[#4c3d37]

                                    sm:text-4xl

                                    md:text-[38px]

                                    lg:text-5xl
                                "
                            >
                                {wedding.bride.fullName}
                            </h3>


                            {/* MINI DIVIDER */}

                            <div
                                className="
                                    mx-auto
                                    mt-4

                                    flex

                                    items-center
                                    justify-center

                                    gap-2
                                "
                            >

                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-[#caa79c]/40
                                    "
                                />

                                <span
                                    className="
                                        text-[7px]

                                        text-[#b77969]/80
                                    "
                                >
                                    ♥
                                </span>

                                <span
                                    className="
                                        h-px
                                        w-8

                                        bg-[#caa79c]/40
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

                                    leading-7

                                    text-[#66554e]

                                    sm:text-[17px]
                                    sm:leading-8

                                    lg:text-lg
                                "
                            >
                                {wedding.bride.description}
                            </p>

                        </article>

                    </Reveal>

                </div>


                {/* ===================================== */}
                {/* BOTTOM DECORATION */}
                {/* ===================================== */}

                <div
                    className="
                        mx-auto
                        mt-16

                        flex

                        items-center
                        justify-center

                        gap-4

                        opacity-50

                        md:mt-24
                    "
                >

                    <span
                        className="
                            h-px
                            w-14

                            bg-gradient-to-r

                            from-transparent
                            to-[#a97d6d]/50
                        "
                    />


                    <span
                        className="
                            font-wedding-serif

                            text-[10px]

                            text-[#a97d6d]
                        "
                    >
                        together
                    </span>


                    <span
                        className="
                            h-px
                            w-14

                            bg-gradient-to-l

                            from-transparent
                            to-[#a97d6d]/50
                        "
                    />

                </div>

            </div>

        </section>

    );
}