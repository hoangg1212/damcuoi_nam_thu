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

                overflow-hidden

                bg-[#24211e]

                px-5
                py-24

                text-white

                md:py-32
            "
        >


            {/* ============================ */}
            {/* ÁNH SÁNG PHÍA SAU */}
            {/* ============================ */}

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

                    bg-[#d8b9a1]/10

                    blur-[120px]
                "
            />


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

                    bg-[#b99078]/10

                    blur-[120px]
                "
            />


            {/* ============================ */}
            {/* ÁNH SÁNG LƯỚT QUA */}
            {/* ============================ */}

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
                    via-white/[0.035]
                    to-transparent

                    blur-xl
                "
            />


            {/* ============================ */}
            {/* HẠT SÁNG */}
            {/* ============================ */}

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

                                bg-[#ead8c8]

                                shadow-[0_0_12px_rgba(234,216,200,0.7)]
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


            {/* ============================ */}
            {/* DECORATION TRÊN */}
            {/* ============================ */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    mb-10

                    flex
                    max-w-[220px]

                    items-center
                    justify-center

                    gap-4
                "
            >

                <span
                    className="
                        wedding-message-line-left

                        h-px

                        bg-[#ded0bd]/35
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
                        wedding-message-line-right

                        h-px

                        bg-[#ded0bd]/35
                    "
                />

            </div>


            {/* ============================ */}
            {/* CONTENT */}
            {/* ============================ */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    max-w-4xl

                    text-center
                "
            >


                {/* SMALL TITLE */}

                <p
                    className="
                        text-[8px]

                        uppercase

                        tracking-[0.4em]

                        text-white/40

                        md:text-[9px]
                    "
                >
                    Một ngày đặc biệt · Những người đặc biệt
                </p>


                {/* QUOTE SYMBOL */}

                <div
                    className="
                        wedding-message-symbol

                        font-wedding-serif

                        mt-8

                        text-5xl
                        leading-none

                        text-[#ded0bd]/25

                        md:text-7xl
                    "
                >
                    “
                </div>


                {/* MESSAGE */}

                <h2
                    className="
                        font-wedding-serif

                        -mt-4

                        text-[28px]
                        font-light

                        leading-[1.55]

                        text-white/90

                        sm:text-3xl

                        md:text-5xl
                        md:leading-[1.45]
                    "
                >
                    Điều khiến ngày vui trở nên trọn vẹn
                    không chỉ là khoảnh khắc chúng mình
                    nắm tay nhau bước vào lễ đường,

                    <span
                        className="
                            text-[#ded0bd]
                        "
                    >
                        {" "}
                        mà còn là sự hiện diện của những
                        người chúng mình yêu quý.
                    </span>
                </h2>


                {/* DIVIDER */}

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
                            w-10

                            bg-white/15
                        "
                    />


                    <span
                        className="
                            text-[7px]

                            text-[#ded0bd]/60
                        "
                    >
                        ✦
                    </span>


                    <span
                        className="
                            h-px
                            w-10

                            bg-white/15
                        "
                    />

                </div>


                {/* NAME */}

                <p
                    className="
                        font-wedding

                        mt-7

                        text-5xl

                        text-[#ded0bd]

                        md:text-6xl
                    "
                >

                    Nam


                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            text-lg
                            font-light

                            text-white/45

                            md:text-xl
                        "
                    >
                        &
                    </span>


                    Thư

                </p>


                {/* SMALL TEXT */}

                <p
                    className="
                        font-wedding-serif

                        mt-4

                        text-[11px]

                        italic

                        tracking-[0.12em]

                        text-white/35
                    "
                >
                    Cảm ơn vì đã hiện diện trong ngày hạnh phúc của chúng mình.
                </p>

            </div>


            {/* ============================ */}
            {/* DECORATION DƯỚI */}
            {/* ============================ */}

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    mt-12

                    flex
                    max-w-[170px]

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
                        to-[#ded0bd]/25
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#ded0bd]/45
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
                        to-[#ded0bd]/25
                    "
                />

            </div>

        </section>

    );
}