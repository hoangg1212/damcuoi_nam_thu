import { wedding } from "@/data/wedding";


export default function Footer() {

    const year =
        new Date(
            wedding.dateISO
        ).getFullYear();


    return (

        <footer
            className="
                relative

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#F7EEEB_0%,#F3F5EF_55%,#EAF2F5_100%)]

                px-5
                py-8

                text-center
            "
        >


            {/* =================================================
                SOFT LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-0

                    h-24
                    w-[70%]

                    -translate-x-1/2

                    rounded-full

                    bg-[#FFFDF8]/45

                    blur-[45px]
                "
            />


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-lg
                "
            >


                {/* DECORATION */}

                <div
                    className="
                        mx-auto

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
                            to-[#7A9CAC]/30
                        "
                    />


                    <span
                        className="
                            text-[7px]

                            text-[#C98792]/70
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
                            to-[#7A9CAC]/30
                        "
                    />

                </div>


                {/* TEXT */}

                <p
                    className="
                        font-wedding-serif

                        mt-4

                        text-[14px]
                        font-normal

                        italic

                        tracking-[0.04em]

                        text-[#587589]/75

                        sm:text-[15px]
                    "
                >
                    Một ngày để nhớ · Một hành trình để thương
                </p>


                {/* YEAR */}

                <p
                    className="
                        mt-3

                        text-[8px]
                        font-medium

                        uppercase

                        tracking-[0.3em]

                        text-[#61726D]/50
                    "
                >
                    Ngày chung đôi · {year}
                </p>

            </div>

        </footer>

    );
}