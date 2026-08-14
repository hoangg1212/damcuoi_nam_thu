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
            Phát nhạc trực tiếp
            từ thao tác click.
        */

        void playMusic();


        /*
            Đợi hiệu ứng fade
            rồi mới remove cover.
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

                bg-[#211e1b]

                transition-all
                duration-[900ms]

                ${
                    opening
                        ? "pointer-events-none invisible opacity-0"
                        : "visible opacity-100"
                }
            `}
        >

            {/* ẢNH */}

            <Image
                src="/images/hero.jpg"
                alt="Nguyễn Nam và Huỳnh Thư"

                fill
                priority

                sizes="100vw"

                className={`
                    object-cover

                    transition-transform
                    duration-[7000ms]

                    ${
                        opening
                            ? "scale-[1.04]"
                            : "scale-100"
                    }
                `}
            />


            {/* OVERLAY */}

            <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-black/20
                    via-black/40
                    to-black/70
                "
            />


            {/* BORDER */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-3

                    border
                    border-white/20

                    md:inset-6
                "
            />


            {/* CONTENT */}

            <div
                className={`
                    relative
                    z-10

                    mx-auto

                    w-full
                    max-w-3xl

                    px-6

                    text-center
                    text-white

                    transition-all
                    duration-700

                    ${
                        opening
                            ? "-translate-y-4 scale-[0.98] opacity-0"
                            : "translate-y-0 opacity-100"
                    }
                `}
            >

                <p
                    className="
                        mb-6

                        text-[8px]
                        font-medium

                        uppercase

                        tracking-[0.45em]

                        text-white/70

                        md:text-[9px]
                    "
                >
                    Trân trọng kính mời
                </p>


                {/* TÊN */}

                <div
                    className="
                        flex
                        flex-col
                        items-center

                        leading-none
                    "
                >

                    <h1
                        className="
                            font-wedding

                            text-[68px]

                            md:text-[100px]
                            lg:text-[115px]
                        "
                    >
                        {wedding.groom.shortName}
                    </h1>


                    <span
                        className="
                            font-wedding-serif

                            my-1

                            text-2xl
                            font-light

                            text-[#ded0bd]
                        "
                    >
                        &
                    </span>


                    <h1
                        className="
                            font-wedding

                            text-[68px]

                            md:text-[100px]
                            lg:text-[115px]
                        "
                    >
                        {wedding.bride.shortName}
                    </h1>

                </div>


                {/* DIVIDER */}

                <div
                    className="
                        my-6

                        flex
                        items-center
                        justify-center

                        gap-4
                    "
                >

                    <span
                        className="
                            h-px
                            w-12

                            bg-white/30
                        "
                    />

                    <span
                        className="
                            text-[#ded0bd]
                        "
                    >
                        ♡
                    </span>

                    <span
                        className="
                            h-px
                            w-12

                            bg-white/30
                        "
                    />

                </div>


                {/* DATE */}

                <p
                    className="
                        font-wedding-serif

                        text-base

                        tracking-[0.3em]

                        md:text-lg
                    "
                >
                    {wedding.displayDate}
                </p>


                {/* MESSAGE */}

                <p
                    className="
                        font-wedding-serif

                        mx-auto
                        mt-5

                        max-w-md

                        text-[15px]
                        leading-7

                        text-white/75

                        md:text-lg
                    "
                >
                    {wedding.invitationMessage}
                </p>


                {/* BUTTON */}

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

                        min-w-[185px]

                        border
                        border-white/50

                        px-8
                        py-4

                        text-[9px]
                        font-medium

                        uppercase

                        tracking-[0.3em]

                        transition-all

                        hover:bg-white
                        hover:text-[#292622]

                        disabled:pointer-events-none
                    "
                >
                    Mở thiệp

                    <span
                        className="
                            ml-3

                            inline-block

                            transition-transform

                            group-hover:translate-x-1
                        "
                    >
                        →
                    </span>
                </button>


                <p
                    className="
                        font-wedding-serif

                        mt-4

                        text-xs
                        italic

                        text-white/40
                    "
                >
                    Chạm để mở câu chuyện của chúng mình
                </p>

            </div>


            {/* BOTTOM */}

            <p
                className="
                    absolute
                    bottom-6
                    left-1/2

                    z-10

                    -translate-x-1/2

                    whitespace-nowrap

                    text-[7px]

                    tracking-[0.35em]

                    text-white/30
                "
            >
                NAM & THƯ · 2026
            </p>

        </div>
    );
}