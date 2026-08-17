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


        /*
            Nếu là thiết bị cảm ứng
            thì không bật custom cursor.
        */

        if (
            coarse
        ) {
            return;
        }


        /*
            Không gọi setState trực tiếp
            trong body của useEffect.

            Dùng requestAnimationFrame
            để cập nhật state sau khi browser
            hoàn tất frame hiện tại.
        */

        const frame =
            requestAnimationFrame(
                () => {

                    setEnabled(
                        true
                    );

                }
            );


        /*
            Theo dõi vị trí chuột.
        */

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


        /*
            Cleanup khi component unmount.
        */

        return () => {

            cancelAnimationFrame(
                frame
            );


            window.removeEventListener(
                "mousemove",
                move
            );

        };

    }, []);


    /*
        Mobile / tablet cảm ứng
        sẽ không render cursor.
    */

    if (
        !enabled
    ) {

        return null;

    }


    return (

        <div
            ref={
                cursor
            }

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
                border-[#B8A27D]/55

                bg-[#FFFDF8]/20

                text-[8px]

                text-[#C98792]

                shadow-[0_4px_18px_rgba(49,86,107,0.08)]

                backdrop-blur-[2px]

                transition-transform
                duration-75
            "
        >
            ♡
        </div>

    );
}