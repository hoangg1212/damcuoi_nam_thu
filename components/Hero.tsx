"use client";

import Image from "next/image";

import { wedding } from "@/data/wedding";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


/* =========================================================
   BIỂU TƯỢNG HAI BÀN TAY TẠO THÀNH TRÁI TIM

   SVG trang trí nhẹ, không quá cartoon.
   Màu dusty rose để liên kết với hoa hồng
   trên background sau này.
========================================================= */

function HandHeart() {

    return (

        <div
            className="
                mx-auto

                flex
                items-center
                justify-center
            "

            aria-hidden="true"
        >

            <svg
                viewBox="0 0 150 90"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="
                    h-[58px]
                    w-[105px]

                    overflow-visible

                    sm:h-[64px]
                    sm:w-[118px]

                    md:h-[68px]
                    md:w-[126px]
                "
            >

                {/* =========================================
                    BÀN TAY TRÁI
                ========================================== */}

                <g
                    stroke="#B97882"

                    strokeWidth="1.65"

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    opacity="0.82"
                >

                    {/* Cổ tay + lòng bàn tay */}

                    <path
                        d="
                            M16 69

                            C26 67
                            32 63
                            38 56

                            C43 50
                            47 43
                            51 37
                        "
                    />


                    {/* Ngón cái tạo nửa trái tim */}

                    <path
                        d="
                            M51 37

                            C53 31
                            56 25
                            61 22

                            C65 19
                            70 20
                            74 24

                            C75 25
                            76 27
                            77 29
                        "
                    />


                    {/* Ngón trỏ */}

                    <path
                        d="
                            M38 56

                            C42 53
                            46 50
                            50 47

                            C54 44
                            57 42
                            60 40
                        "
                    />


                    {/* Ngón giữa */}

                    <path
                        d="
                            M32 61

                            C38 59
                            43 56
                            48 53

                            C52 51
                            56 48
                            59 46
                        "
                    />


                    {/* Ngón áp út */}

                    <path
                        d="
                            M27 64

                            C33 63
                            39 60
                            44 57
                        "
                    />


                    {/* Chi tiết lòng bàn tay */}

                    <path
                        d="
                            M37 55

                            C37 61
                            41 66
                            47 70
                        "

                        opacity="0.45"
                    />

                </g>


                {/* =========================================
                    BÀN TAY PHẢI
                ========================================== */}

                <g
                    stroke="#B97882"

                    strokeWidth="1.65"

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    opacity="0.82"
                >

                    {/* Cổ tay + lòng bàn tay */}

                    <path
                        d="
                            M134 69

                            C124 67
                            118 63
                            112 56

                            C107 50
                            103 43
                            99 37
                        "
                    />


                    {/* Ngón cái tạo nửa trái tim */}

                    <path
                        d="
                            M99 37

                            C97 31
                            94 25
                            89 22

                            C85 19
                            80 20
                            76 24

                            C75 25
                            74 27
                            73 29
                        "
                    />


                    {/* Ngón trỏ */}

                    <path
                        d="
                            M112 56

                            C108 53
                            104 50
                            100 47

                            C96 44
                            93 42
                            90 40
                        "
                    />


                    {/* Ngón giữa */}

                    <path
                        d="
                            M118 61

                            C112 59
                            107 56
                            102 53

                            C98 51
                            94 48
                            91 46
                        "
                    />


                    {/* Ngón áp út */}

                    <path
                        d="
                            M123 64

                            C117 63
                            111 60
                            106 57
                        "
                    />


                    {/* Chi tiết lòng bàn tay */}

                    <path
                        d="
                            M113 55

                            C113 61
                            109 66
                            103 70
                        "

                        opacity="0.45"
                    />

                </g>


                {/* =========================================
                    ĐƯỜNG TIM NHẸ Ở GIỮA

                    Không làm kín hoàn toàn để nhìn
                    tinh tế hơn.
                ========================================== */}

                <path
                    d="
                        M51 37

                        C55 47
                        64 56
                        75 65

                        C86 56
                        95 47
                        99 37
                    "

                    stroke="#D4A0A8"

                    strokeWidth="1.1"

                    strokeLinecap="round"

                    opacity="0.48"
                />


                {/* CHẤM NHỎ TRANG TRÍ */}

                <circle
                    cx="75"
                    cy="72"
                    r="1.4"

                    fill="#B89A70"

                    opacity="0.65"
                />

            </svg>

        </div>
    );
}


/* =========================================================
   HERO
========================================================= */

export default function Hero() {

    const {
        invitationOpened,
    } =
        useWedding();


    return (

        <section
            id="home"

            className="
                relative

                min-h-[100svh]

                overflow-hidden

                bg-[#F3F4E8]
            "
        >


            {/* =================================================
                MOBILE BANNER
                < 768px
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    md:hidden
                "
            >

                <Image
                    src="/images/banner-mobile.png"

                    alt="Ngày chung đôi của Nguyễn Nam và Huỳnh Thư"

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* =================================================
                DESKTOP BANNER
                >= 768px
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    hidden

                    md:block
                "
            >

                <Image
                    src="/images/banner-desktop.png"

                    alt="Ngày chung đôi của Nguyễn Nam và Huỳnh Thư"

                    fill

                    priority

                    sizes="100vw"

                    className="
                        object-cover
                        object-center
                    "
                />

            </div>


            {/* =================================================
                SOFT OVERLAY

                Chuẩn bị sẵn cho background:
                xanh kem + hoa phối hồng.

                Không phủ đen ảnh.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-[#FFFDF8]/10
                    via-transparent
                    to-[#DDE5D8]/22
                "
            />


            {/* =================================================
                CENTER LIGHT

                Khi ảnh nền có nhiều hoa ở 2 bên,
                vùng giữa vẫn đủ sạch để đọc chữ.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[48%]

                    h-[520px]
                    w-[94%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#F9F8EE]/58

                    blur-[85px]

                    sm:w-[80%]

                    md:h-[600px]
                    md:w-[58%]

                    lg:h-[650px]
                    lg:w-[48%]

                    xl:w-[43%]
                "
            />


            {/* =================================================
                LỚP SÁNG TRẮNG NHẸ RIÊNG Ở TRUNG TÂM

                Giúp tên vẫn rõ nếu background mới
                có cành hoa đi qua khu vực giữa.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[68%]
                    w-[82%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-[50%]

                    bg-white/10

                    blur-[60px]

                    md:w-[48%]
                "
            />


            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    flex
                    min-h-[100svh]

                    w-full
                    max-w-[1440px]

                    items-center
                    justify-center

                    px-5

                    pb-14
                    pt-24

                    text-center

                    transition-all
                    duration-1000

                    sm:px-6
                    sm:pb-16

                    md:px-8
                    md:pb-20
                    md:pt-28

                    ${
                        invitationOpened
                            ? `
                                translate-y-0
                                opacity-100
                              `
                            : `
                                translate-y-8
                                opacity-0
                              `
                    }
                `}
            >


                {/* =================================================
                    CENTER CONTENT
                ================================================= */}

                <div
                    className="
                        mx-auto

                        w-full
                        max-w-[570px]

                        sm:max-w-[620px]

                        md:max-w-[650px]

                        lg:max-w-[700px]
                    "
                >


                    {/* =================================================
                        SMALL TITLE
                    ================================================= */}

                    <div
                        className="
                            flex

                            items-center
                            justify-center

                            gap-3
                        "
                    >

                        <span
                            className="
                                h-px
                                w-7

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-10

                                md:w-12
                            "
                        />


                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.27em]

                                text-[#607568]

                                sm:text-[10px]
                                sm:tracking-[0.32em]

                                md:text-[11px]
                                md:tracking-[0.36em]
                            "
                        >
                            Ngày chúng mình về chung một nhà
                        </p>


                        <span
                            className="
                                h-px
                                w-7

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-10

                                md:w-12
                            "
                        />

                    </div>


                    {/* =================================================
                        DECORATIVE HAND HEART
                    ================================================= */}

                    <div
                        className="
                            mt-5

                            sm:mt-6
                        "
                    >

                        <HandHeart />

                    </div>


                    {/* =================================================
                        NAMES
                    ================================================= */}

                    <h1
                        className="
                            font-wedding

                            mt-2

                            flex
                            flex-wrap

                            items-center
                            justify-center

                            gap-x-3
                            gap-y-1

                            text-[58px]

                            leading-[0.92]

                            text-[#3F5147]

                            drop-shadow-[0_2px_8px_rgba(255,253,248,0.65)]

                            sm:text-[74px]

                            md:mt-3
                            md:gap-x-4
                            md:text-[90px]

                            lg:text-[102px]

                            xl:text-[110px]
                        "
                    >

                        {/* NAM */}

                        <span>
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        {/* =============================================
                            &
                        ============================================== */}

                        <span
                            className="
                                flex

                                h-10
                                w-10

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[#B89A70]/35

                                bg-[#FFFDF8]/72

                                font-wedding-serif

                                text-[13px]
                                font-normal

                                italic

                                text-[#B89A70]

                                shadow-[0_8px_25px_rgba(63,81,71,0.07)]

                                backdrop-blur-md

                                sm:h-11
                                sm:w-11
                                sm:text-sm

                                md:h-12
                                md:w-12
                                md:text-base
                            "
                        >
                            &
                        </span>


                        {/* THƯ */}

                        <span>
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </h1>


                    {/* =================================================
                        DECORATIVE DIVIDER
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
                                w-10

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/45

                                sm:w-14
                            "
                        />


                        <span
                            className="
                                text-[9px]

                                text-[#B97882]
                            "
                        >
                            ♡
                        </span>


                        <span
                            className="
                                h-px
                                w-10

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/45

                                sm:w-14
                            "
                        />

                    </div>


                    {/* =================================================
                        QUOTE

                        Không dùng:
                        - bạn
                        - anh/chị
                        - cô/chú
                        - chúng con

                        nên phù hợp nhiều đối tượng người nhận.
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-5

                            max-w-[515px]

                            text-[16px]
                            font-normal

                            italic

                            leading-7

                            text-[#56685D]

                            drop-shadow-[0_1px_5px_rgba(255,253,248,0.65)]

                            sm:text-lg
                            sm:leading-8

                            md:mt-6
                            md:max-w-[570px]
                            md:text-xl
                            md:leading-9
                        "
                    >
                        “Từ một cuộc gặp gỡ,
                        chúng mình đã chọn đồng hành cùng nhau.
                        Hôm nay, hành trình ấy bước sang một chương mới,
                        và niềm vui sẽ trọn vẹn hơn khi được sẻ chia
                        cùng những người thân quý.”
                    </p>


                    {/* =================================================
                        DATE
                    ================================================= */}

                    <div
                        className="
                            my-6

                            flex

                            items-center
                            justify-center

                            gap-3

                            sm:my-7
                            sm:gap-4

                            md:my-8
                        "
                    >

                        <span
                            className="
                                h-px
                                w-9

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/50

                                sm:w-12
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[13px]
                                font-medium

                                tracking-[0.20em]

                                text-[#465A4E]

                                sm:text-sm
                                sm:tracking-[0.24em]

                                md:text-[15px]
                                md:tracking-[0.28em]
                            "
                        >
                            {wedding.displayDate}
                        </p>


                        <span
                            className="
                                h-px
                                w-9

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/50

                                sm:w-12
                            "
                        />

                    </div>


                    {/* =================================================
                        CTA
                    ================================================= */}

                    <a
                        href="#story"

                        className="
                            group

                            inline-flex

                            min-h-[50px]

                            items-center
                            justify-center

                            gap-3

                            rounded-full

                            border
                            border-[#607568]/30

                            bg-[#FFFDF8]/76

                            px-6
                            py-3.5

                            text-[9px]
                            font-medium

                            uppercase

                            tracking-[0.17em]

                            text-[#3F5147]

                            shadow-[0_12px_32px_rgba(63,81,71,0.10)]

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#B97882]

                            hover:bg-[#B97882]

                            hover:text-white

                            hover:shadow-[0_16px_40px_rgba(185,120,130,0.16)]

                            sm:min-h-[52px]
                            sm:px-7
                            sm:text-[10px]

                            md:px-8
                            md:text-[11px]
                        "
                    >

                        <span>
                            Xem hành trình của chúng mình
                        </span>


                        <span
                            className="
                                text-base

                                transition-transform
                                duration-300

                                group-hover:translate-y-1
                            "
                        >
                            ↓
                        </span>

                    </a>


                    {/* =================================================
                        SIGNATURE
                    ================================================= */}

                    <div
                        className="
                            mt-7

                            flex

                            items-center
                            justify-center

                            gap-3

                            sm:mt-8
                        "
                    >

                        <span
                            className="
                                h-px
                                w-6

                                bg-[#B89A70]/30
                            "
                        />


                        <p
                            className="
                                font-wedding-serif

                                text-[11px]
                                font-normal

                                italic

                                text-[#607568]/80

                                sm:text-xs
                            "
                        >
                            Nam

                            <span
                                className="
                                    mx-2

                                    not-italic

                                    text-[#B97882]
                                "
                            >
                                ♥
                            </span>

                            Thư
                        </p>


                        <span
                            className="
                                h-px
                                w-6

                                bg-[#B89A70]/30
                            "
                        />

                    </div>

                </div>

            </div>


            {/* =================================================
                BOTTOM TRANSITION

                Chuyển từ Hero xuống section tiếp theo
                nhẹ hơn.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    bottom-0
                    left-0

                    z-[5]

                    h-20
                    w-full

                    bg-gradient-to-t

                    from-[#F9F8EE]/55
                    to-transparent

                    md:h-24
                "
            />

        </section>

    );
}