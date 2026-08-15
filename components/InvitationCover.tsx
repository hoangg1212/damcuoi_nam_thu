"use client";

import Image from "next/image";

import {
    useState,
} from "react";

import { wedding } from "@/data/wedding";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


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


    if (
        invitationOpened
    ) {

        return null;

    }


    function handleOpen() {

        if (opening) {
            return;
        }


        setOpening(
            true
        );


        /*
            Phát nhạc ngay khi người dùng
            trực tiếp bấm nút.
        */

        void playMusic();


        /*
            Đợi hiệu ứng cover biến mất
            rồi mới mở nội dung website.
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

                bg-[#f5e5de]

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


            {/* ================================================= */}
            {/* MOBILE BANNER */}
            {/* < 768px */}
            {/* ================================================= */}

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


            {/* ================================================= */}
            {/* DESKTOP BANNER */}
            {/* >= 768px */}
            {/* ================================================= */}

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


            {/* ================================================= */}
            {/* SOFT WARM OVERLAY */}
            {/* Không dùng overlay đen như trước */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-[#fff7f1]/10
                    via-transparent
                    to-[#ddb9ad]/15
                "
            />


            {/* ================================================= */}
            {/* CENTER LIGHT */}
            {/* Làm chữ dễ đọc nhưng không che ảnh */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-[48%]

                    h-[520px]
                    w-[90%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#fffaf6]/40

                    blur-[80px]

                    sm:w-[75%]

                    md:h-[600px]
                    md:w-[52%]

                    lg:w-[44%]

                    xl:w-[38%]
                "
            />


            {/* ================================================= */}
            {/* OUTER BORDER */}
            {/* ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-3

                    z-[5]

                    rounded-[22px]

                    border
                    border-[#b98274]/25

                    sm:inset-4

                    md:inset-6
                    md:rounded-[28px]
                "
            />


            {/* INNER BORDER */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-[18px]

                    z-[5]

                    rounded-[18px]

                    border
                    border-white/30

                    sm:inset-[22px]

                    md:inset-8
                    md:rounded-[24px]
                "
            />


            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

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

                    pb-14
                    pt-20

                    text-center

                    transition-all
                    duration-700

                    sm:px-6

                    md:px-8
                    md:pb-16
                    md:pt-24

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


                {/* ================================================= */}
                {/* CENTER CONTENT */}
                {/* ================================================= */}

                <div
                    className="
                        mx-auto

                        w-full
                        max-w-[520px]

                        sm:max-w-[580px]

                        md:max-w-[610px]
                    "
                >


                    {/* ================================================= */}
                    {/* SMALL TOP LABEL */}
                    {/* ================================================= */}

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
                                to-[#a8786b]/55

                                sm:w-10
                            "
                        />


                        <p
                            className="
                                text-[10px]
                                font-semibold

                                uppercase

                                tracking-[0.2em]

                                text-[#82594f]

                                sm:text-[11px]
                                sm:tracking-[0.27em]

                                md:text-xs
                            "
                        >
                            Trân trọng kính mời
                        </p>


                        <span
                            className="
                                h-px
                                w-7

                                bg-gradient-to-l

                                from-transparent
                                to-[#a8786b]/55

                                sm:w-10
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* LITTLE HEART */}
                    {/* ================================================= */}

                    <div
                        className="
                            mx-auto
                            mt-5

                            flex

                            h-9
                            w-9

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#b98476]/30

                            bg-[#fffaf7]/55

                            text-[10px]

                            text-[#b46e62]

                            shadow-[0_8px_24px_rgba(142,91,77,0.08)]

                            backdrop-blur-sm
                        "
                    >
                        ♥
                    </div>


                    {/* ================================================= */}
                    {/* NAMES */}
                    {/* ================================================= */}

                    <div
                        className="
                            mt-4

                            flex
                            flex-col

                            items-center
                            justify-center

                            leading-none
                        "
                    >


                        <h1
                            className="
                                font-wedding

                                text-[64px]

                                leading-[0.9]

                                text-[#704b42]

                                drop-shadow-[0_3px_14px_rgba(255,255,255,0.9)]

                                sm:text-[78px]

                                md:text-[95px]

                                lg:text-[105px]
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </h1>


                        {/* & */}

                        <div
                            className="
                                my-1.5

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

                                    bg-[#ab7a6d]/35
                                "
                            />


                            <span
                                className="
                                    font-wedding-serif

                                    text-lg

                                    text-[#b47164]

                                    sm:text-xl
                                "
                            >
                                &
                            </span>


                            <span
                                className="
                                    h-px
                                    w-8

                                    bg-[#ab7a6d]/35
                                "
                            />

                        </div>


                        <h1
                            className="
                                font-wedding

                                text-[64px]

                                leading-[0.9]

                                text-[#704b42]

                                drop-shadow-[0_3px_14px_rgba(255,255,255,0.9)]

                                sm:text-[78px]

                                md:text-[95px]

                                lg:text-[105px]
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </h1>

                    </div>


                    {/* ================================================= */}
                    {/* DECORATIVE DIVIDER */}
                    {/* ================================================= */}

                    <div
                        className="
                            my-5

                            flex

                            items-center
                            justify-center

                            gap-3

                            sm:my-6
                        "
                    >

                        <span
                            className="
                                h-px
                                w-10

                                bg-gradient-to-r

                                from-transparent
                                to-[#ad7b6d]/45

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

                                bg-gradient-to-l

                                from-transparent
                                to-[#ad7b6d]/45

                                sm:w-14
                            "
                        />

                    </div>


                    {/* ================================================= */}
                    {/* DATE */}
                    {/* ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            text-[13px]
                            font-semibold

                            tracking-[0.18em]

                            text-[#755148]

                            sm:text-sm
                            sm:tracking-[0.22em]

                            md:text-base
                        "
                    >
                        {wedding.displayDate}
                    </p>


                    {/* ================================================= */}
                    {/* MESSAGE */}
                    {/* ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mx-auto

                            mt-5

                            max-w-[440px]

                            text-[16px]

                            leading-7

                            text-[#604b44]

                            drop-shadow-[0_1px_7px_rgba(255,255,255,0.8)]

                            sm:text-lg
                            sm:leading-8

                            md:max-w-[500px]
                        "
                    >
                        {wedding.invitationMessage}
                    </p>


                    {/* ================================================= */}
                    {/* OPEN BUTTON */}
                    {/* ================================================= */}

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
                            border-[#ab7668]/40

                            bg-[#fffaf7]/65

                            px-7
                            py-3.5

                            text-[11px]
                            font-semibold

                            uppercase

                            tracking-[0.16em]

                            text-[#68483f]

                            shadow-[0_12px_32px_rgba(116,74,63,0.12)]

                            backdrop-blur-md

                            transition-all
                            duration-300

                            hover:-translate-y-0.5

                            hover:border-[#a86f62]

                            hover:bg-[#a86f62]

                            hover:text-white

                            disabled:pointer-events-none

                            sm:min-w-[205px]
                            sm:px-8

                            md:text-xs
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


                    {/* ================================================= */}
                    {/* SMALL MESSAGE */}
                    {/* ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-4

                            text-[12px]
                            italic

                            text-[#745d55]/75

                            sm:text-[13px]
                        "
                    >
                        Chạm để mở câu chuyện của chúng mình
                    </p>

                </div>

            </div>


            {/* ================================================= */}
            {/* BOTTOM SIGNATURE */}
            {/* ================================================= */}

            <div
                className="
                    absolute

                    bottom-5
                    left-1/2

                    z-20

                    flex

                    -translate-x-1/2

                    items-center
                    justify-center

                    gap-3

                    whitespace-nowrap

                    sm:bottom-6
                "
            >

                <span
                    className="
                        h-px
                        w-5

                        bg-[#9f7468]/30
                    "
                />


                <p
                    className="
                        text-[9px]
                        font-medium

                        tracking-[0.2em]

                        text-[#72564e]/65

                        sm:text-[10px]
                    "
                >
                    NAM & THƯ · 2026
                </p>


                <span
                    className="
                        h-px
                        w-5

                        bg-[#9f7468]/30
                    "
                />

            </div>

        </div>

    );
}