"use client";

import {
    useEffect,
    useState,
} from "react";


export default function BackToTop() {

    const [
        visible,
        setVisible,
    ] =
        useState(false);


    useEffect(() => {

        function update() {

            setVisible(
                window.scrollY >
                700
            );

        }


        update();


        window.addEventListener(
            "scroll",
            update,
            {
                passive:
                    true,
            }
        );


        return () =>
            window.removeEventListener(
                "scroll",
                update
            );

    }, []);


    return (

        <button
            type="button"

            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior:
                        "smooth",
                })
            }

            className={`
                fixed
                bottom-20
                right-[25px]

                z-[290]

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                border
                border-black/10

                bg-[#f9f7f3]/90

                text-[#8c7558]

                backdrop-blur-xl

                transition-all

                ${
                    visible
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0"
                }
            `}
        >
            ↑
        </button>
    );
}