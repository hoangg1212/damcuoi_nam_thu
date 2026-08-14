"use client";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


export default function MusicPlayer() {

    const {
        invitationOpened,
        isPlaying,
        toggleMusic,
    } =
        useWedding();


    if (
        !invitationOpened
    ) {

        return null;
    }


    return (

        <button
            type="button"

            onClick={() =>
                void toggleMusic()
            }

            aria-label={
                isPlaying
                    ? "Tắt nhạc"
                    : "Bật nhạc"
            }

            className="
                fixed
                bottom-5
                right-5

                z-[300]

                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-full

                border
                border-black/10

                bg-[#f9f7f3]/90

                text-[#8c7558]

                shadow-lg

                backdrop-blur-xl

                transition-transform

                hover:-translate-y-1
            "
        >

            {isPlaying
                ? (
                    <span
                        className="
                            flex
                            items-end

                            gap-[2px]
                        "
                    >

                        <i className="h-2 w-px bg-current" />

                        <i className="h-4 w-px bg-current" />

                        <i className="h-3 w-px bg-current" />

                        <i className="h-4 w-px bg-current" />

                    </span>
                )
                : (
                    <span
                        className="
                            font-wedding-serif

                            text-xl
                        "
                    >
                        ♪
                    </span>
                )}

        </button>
    );
}