"use client";

import {
    useEffect,
    useState,
} from "react";


export default function Preloader() {

    const [
        visible,
        setVisible,
    ] =
        useState(true);


    const [
        leaving,
        setLeaving,
    ] =
        useState(false);


    useEffect(() => {

        const fadeTimer =
            setTimeout(
                () => {

                    setLeaving(
                        true
                    );

                },
                800
            );


        const removeTimer =
            setTimeout(
                () => {

                    setVisible(
                        false
                    );

                },
                1500
            );


        return () => {

            clearTimeout(
                fadeTimer
            );

            clearTimeout(
                removeTimer
            );

        };

    }, []);


    if (!visible) {
        return null;
    }


    return (

        <div
            className={`
                fixed
                inset-0
                z-[10000]

                flex
                items-center
                justify-center

                bg-[#f9f7f3]

                transition-opacity
                duration-700

                ${
                    leaving
                        ? "opacity-0"
                        : "opacity-100"
                }
            `}
        >

            <div
                className="
                    text-center
                "
            >

                <div
                    className="
                        font-wedding

                        text-7xl
                        text-[#292622]

                        md:text-8xl
                    "
                >
                    N

                    <span
                        className="
                            mx-3

                            font-wedding-serif

                            text-xl
                            text-[#b49a78]
                        "
                    >
                        ♥
                    </span>

                    T
                </div>


                <p
                    className="
                        font-wedding-serif

                        mt-2

                        tracking-[0.15em]

                        text-[#746e67]
                    "
                >
                    Nguyễn Nam & Huỳnh Thư
                </p>


                <div
                    className="
                        mx-auto
                        mt-6

                        h-px
                        w-40

                        overflow-hidden

                        bg-[#ded0bd]
                    "
                >

                    <div
                        className="
                            loader-line

                            h-full
                            w-full

                            bg-[#8c7558]
                        "
                    />

                </div>

            </div>

        </div>
    );
}