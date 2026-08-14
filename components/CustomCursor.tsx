"use client";

import {
    useEffect,
    useRef,
    useState,
} from "react";


export default function CustomCursor() {

    const cursor =
        useRef<HTMLDivElement>(
            null
        );


    const [
        enabled,
        setEnabled,
    ] =
        useState(false);


    useEffect(() => {

        const coarse =
            window.matchMedia(
                "(pointer: coarse)"
            ).matches;


        if (coarse) {
            return;
        }


        setEnabled(
            true
        );


        function move(
            event:
                MouseEvent
        ) {

            if (
                cursor.current
            ) {

                cursor.current.style
                    .transform =
                    `translate(${event.clientX - 15}px, ${event.clientY - 15}px)`;

            }

        }


        window.addEventListener(
            "mousemove",
            move
        );


        return () =>
            window.removeEventListener(
                "mousemove",
                move
            );

    }, []);


    if (!enabled) {
        return null;
    }


    return (

        <div
            ref={cursor}

            className="
                pointer-events-none

                fixed
                left-0
                top-0

                z-[20000]

                flex
                h-[30px]
                w-[30px]

                items-center
                justify-center

                rounded-full

                border
                border-[#b49a78]/60

                text-[8px]

                text-[#8c7558]

                transition-transform
                duration-75
            "
        >
            ♡
        </div>
    );
}