"use client";

import Image from "next/image";

import {
    useState,
} from "react";

import { wedding } from "@/data/wedding";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


/* =========================================================
   DẤU VÂN TAY ĐÔI HÌNH TRÁI TIM
========================================================= */

function FingerprintHeart() {

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
                viewBox="0 0 120 64"

                className="
                    h-[54px]
                    w-[96px]

                    overflow-visible

                    sm:h-[60px]
                    sm:w-[110px]
                "

                fill="none"

                xmlns="http://www.w3.org/2000/svg"
            >

                {/* =========================================
                    VÂN TAY BÊN TRÁI
                ========================================== */}

                <g
                    stroke="#B97882"
                    strokeWidth="1.15"
                    strokeLinecap="round"
                    opacity="0.82"
                >

                    <path
                        d="
                            M57 51
                            C42 44 30 34 30 22
                            C30 14 35 9 42 9
                            C50 9 55 15 57 22
                        "
                    />

                    <path
                        d="
                            M54 47
                            C42 41 34 32 34 23
                            C34 17 37 13 42 13
                            C48 13 52 18 54 25
                        "
                    />

                    <path
                        d="
                            M51 43
                            C43 38 38 31 38 24
                            C38 20 40 17 43 17
                            C47 17 49 21 51 27
                        "
                    />

                    <path
                        d="
                            M47 39
                            C43 35 41 30 41 25
                            C41 22 42 21 44 21
                            C46 21 47 24 47 29
                        "
                    />

                    <path
                        d="
                            M44 34
                            C42 31 42 27 43 25
                        "
                    />

                </g>


                {/* =========================================
                    VÂN TAY BÊN PHẢI
                ========================================== */}

                <g
                    stroke="#B97882"
                    strokeWidth="1.15"
                    strokeLinecap="round"
                    opacity="0.82"
                >

                    <path
                        d="
                            M63 51
                            C78 44 90 34 90 22
                            C90 14 85 9 78 9
                            C70 9 65 15 63 22
                        "
                    />

                    <path
                        d="
                            M66 47
                            C78 41 86 32 86 23
                            C86 17 83 13 78 13
                            C72 13 68 18 66 25
                        "
                    />

                    <path
                        d="
                            M69 43
                            C77 38 82 31 82 24
                            C82 20 80 17 77 17
                            C73 17 71 21 69 27
                        "
                    />

                    <path
                        d="
                            M73 39
                            C77 35 79 30 79 25
                            C79 22 78 21 76 21
                            C74 21 73 24 73 29
                        "
                    />

                    <path
                        d="
                            M76 34
                            C78 31 78 27 77 25
                        "
                    />

                </g>


                {/* =========================================
                    ĐƯỜNG NỐI GIỮA
                ========================================== */}

                <path
                    d="
                        M57 22
                        C59 27 59 31 60 37

                        C61 31 61 27 63 22
                    "

                    stroke="#D19AA2"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.65"
                />

            </svg>

        </div>
    );
}


/* =========================================================
   INVITATION COVER
========================================================= */

export default function InvitationCover() {

    const {
        invitationOpened,
        finishInvitation,
        playMusic,
    } =
        useWedding();


    const [
        opening,
        setOpening,
    ] =
        useState(false);


    /* =====================================================
       ĐÃ MỞ THIỆP
    ===================================================== */

    if (
        invitationOpened
    ) {

        return null;

    }


    /* =====================================================
       XỬ LÝ MỞ THIỆP
    ===================================================== */

    function handleOpen() {

        if (opening) {
            return;
        }


        setOpening(
            true
        );


        /*
            Phát nhạc ngay trong thao tác click.
        */

        void playMusic();


        /*
            Đợi hiệu ứng fade hoàn tất
            rồi mới remove màn hình cover.
        */

        setTimeout(
            () => {

                finishInvitation();

            },
            900
        );

    }


    return (

        <div
            className={`
                fixed
                inset-0

                z-[9000]

                flex

                min-h-[100svh]

                items-center
                justify-center

                overflow-hidden

                bg-[#F5F3E8]

                transition-all
                duration-[900ms]

                ${
                    opening
                        ? `
                            pointer-events-none
                            invisible
                            scale-[1.015]
                            opacity-0
                          `
                        : `
                            visible
                            scale-100
                            opacity-100
                          `
                }
            `}
        >


            {/* =================================================
                ẢNH NỀN MOBILE
            ================================================= */}

            <div
                className="
                    absolute
                    inset-0

                    md:hidden
                "
            >

                <Image
                    src="/images/invitation-cover-mobile.png"

                    alt="Thiệp cưới Nguyễn Nam và Huỳnh Thư"

                    fill
                    priority

                    sizes="100vw"

                    className={`
                        object-cover
                        object-center

                        transition-transform
                        duration-[7000ms]

                        ${
                            opening
                                ? "scale-[1.035]"
                                : "scale-100"
                        }
                    `}
                />

            </div>


            {/* =================================================
                ẢNH NỀN DESKTOP
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
                    src="/images/invitation-cover-desktop.png"

                    alt="Thiệp cưới Nguyễn Nam và Huỳnh Thư"

                    fill
                    priority

                    sizes="100vw"

                    className={`
                        object-cover
                        object-center

                        transition-transform
                        duration-[7000ms]

                        ${
                            opening
                                ? "scale-[1.025]"
                                : "scale-100"
                        }
                    `}
                />

            </div>


            {/* =================================================
                LỚP PHỦ NHẸ

                Phù hợp nền:
                xanh kem + hoa hồng
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-[#FFFDF8]/12
                    via-transparent
                    to-[#DDE5D8]/16
                "
            />


            {/* =================================================
                VÙNG SÁNG SAU NỘI DUNG

                Giúp chữ dễ đọc khi background có hoa.
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[650px]
                    w-[94%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#F9F8EE]/55

                    blur-[90px]

                    sm:w-[80%]

                    md:h-[700px]
                    md:w-[58%]

                    lg:w-[49%]

                    xl:w-[43%]
                "
            />


            {/* =================================================
                OUTER BORDER
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-3

                    z-[5]

                    rounded-[22px]

                    border
                    border-[#8FA095]/30

                    sm:inset-4

                    md:inset-6
                    md:rounded-[28px]
                "
            />


            {/* =================================================
                INNER BORDER
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-[18px]

                    z-[5]

                    rounded-[18px]

                    border
                    border-[#FFFDF8]/50

                    sm:inset-[22px]

                    md:inset-8
                    md:rounded-[24px]
                "
            />


            {/* =================================================
                MAIN CONTENT WRAPPER
            ================================================= */}

            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    flex
                    min-h-[100svh]

                    w-full
                    max-w-[1450px]

                    items-center
                    justify-center

                    px-5

                    py-10

                    text-center

                    transition-all
                    duration-700

                    sm:px-6

                    md:px-8
                    md:py-12

                    ${
                        opening
                            ? `
                                -translate-y-4
                                scale-[0.98]
                                opacity-0
                              `
                            : `
                                translate-y-0
                                scale-100
                                opacity-100
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
                        max-w-[560px]

                        sm:max-w-[610px]

                        md:max-w-[650px]
                    "
                >


                    {/* =================================================
                        NGÀY CHUNG ĐÔI
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
                                w-8

                                bg-gradient-to-r

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-11
                            "
                        />


                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.32em]

                                text-[#607568]

                                sm:text-[10px]
                                sm:tracking-[0.38em]

                                md:text-[11px]
                            "
                        >
                            Ngày chung đôi
                        </p>


                        <span
                            className="
                                h-px
                                w-8

                                bg-gradient-to-l

                                from-transparent
                                to-[#B89A70]/55

                                sm:w-11
                            "
                        />

                    </div>


                    {/* =================================================
                        CHÚ RỂ
                    ================================================= */}

                    <div
                        className="
                            mt-6

                            sm:mt-7
                        "
                    >

                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.34em]

                                text-[#B97882]

                                sm:text-[10px]
                            "
                        >
                            Chú rể
                        </p>


                        <h1
                            className="
                                font-wedding

                                mt-1

                                text-[61px]

                                leading-[0.95]

                                text-[#3F5147]

                                drop-shadow-[0_2px_8px_rgba(255,253,248,0.55)]

                                sm:text-[77px]

                                md:text-[91px]

                                lg:text-[98px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .fullName
                            }
                        </h1>

                    </div>


                    {/* =================================================
                        &
                    ================================================= */}

                    <div
                        className="
                            my-1.5

                            flex

                            items-center
                            justify-center

                            gap-4
                        "
                    >

                        <span
                            className="
                                h-px
                                w-8

                                bg-[#B89A70]/35
                            "
                        />


                        <span
                            className="
                                font-wedding-serif

                                text-xl
                                font-light

                                italic

                                text-[#B89A70]

                                sm:text-2xl
                            "
                        >
                            &
                        </span>


                        <span
                            className="
                                h-px
                                w-8

                                bg-[#B89A70]/35
                            "
                        />

                    </div>


                    {/* =================================================
                        CÔ DÂU
                    ================================================= */}

                    <div>

                        <p
                            className="
                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.34em]

                                text-[#B97882]

                                sm:text-[10px]
                            "
                        >
                            Cô dâu
                        </p>


                        <h1
                            className="
                                font-wedding

                                mt-1

                                text-[61px]

                                leading-[0.95]

                                text-[#3F5147]

                                drop-shadow-[0_2px_8px_rgba(255,253,248,0.55)]

                                sm:text-[77px]

                                md:text-[91px]

                                lg:text-[98px]
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .fullName
                            }
                        </h1>

                    </div>


                    {/* =================================================
                        DẤU VÂN TAY ĐÔI
                    ================================================= */}

                    <div
                        className="
                            mt-4

                            sm:mt-5
                        "
                    >

                        <FingerprintHeart />

                    </div>


                    {/* =================================================
                        NGÀY CƯỚI
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-1

                            text-[14px]
                            font-medium

                            tracking-[0.24em]

                            text-[#465A4E]

                            sm:text-[15px]
                            sm:tracking-[0.28em]

                            md:text-base
                        "
                    >
                        {wedding.displayDate}
                    </p>


                    {/* =================================================
                        LỜI NHẮN
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-5

                            max-w-[455px]

                            text-[16px]
                            font-normal

                            leading-7

                            text-[#56685D]

                            drop-shadow-[0_1px_5px_rgba(255,253,248,0.5)]

                            sm:text-lg
                            sm:leading-8

                            md:max-w-[520px]
                        "
                    >
                        Một dấu mốc đẹp trong hành trình của chúng mình, sẽ càng ý nghĩa hơn khi được sẻ chia cùng những người thân quý.
                    </p>


                    {/* =================================================
                        BUTTON MỞ THIỆP
                    ================================================= */}

                    <button
                        type="button"

                        onClick={
                            handleOpen
                        }

                        disabled={
                            opening
                        }

                        className="
                            group

                            mt-7

                            inline-flex

                            min-h-[52px]
                            min-w-[190px]

                            items-center
                            justify-center

                            gap-3

                            rounded-full

                            border
                            border-[#607568]/30

                            bg-[#FFFDF8]/75

                            px-7
                            py-3.5

                            text-[10px]
                            font-medium

                            uppercase

                            tracking-[0.2em]

                            text-[#3F5147]

                            shadow-[0_12px_35px_rgba(63,81,71,0.10)]

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#B97882]

                            hover:bg-[#B97882]

                            hover:text-white

                            hover:shadow-[0_16px_40px_rgba(185,120,130,0.18)]

                            disabled:pointer-events-none

                            sm:min-w-[205px]
                            sm:px-8

                            md:text-[11px]
                        "
                    >

                        <span>
                            Mở thiệp
                        </span>


                        <span
                            className="
                                text-base

                                transition-transform
                                duration-300

                                group-hover:translate-x-1
                            "
                        >
                            →
                        </span>

                    </button>


                    {/* =================================================
                        DÒNG GỢI Ý
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-4

                            text-[12px]

                            italic

                            text-[#607568]/70

                            sm:text-[13px]
                        "
                    >
                        Chạm để mở tấm thiệp nhỏ của chúng mình
                    </p>

                </div>

            </div>

        </div>
    );
}