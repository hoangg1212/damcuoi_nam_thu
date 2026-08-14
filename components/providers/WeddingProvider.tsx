"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import { wedding } from "@/data/wedding";


type WeddingContextType = {

    invitationOpened:
        boolean;

    finishInvitation:
        () => void;

    isPlaying:
        boolean;

    playMusic:
        () => Promise<boolean>;

    pauseMusic:
        () => void;

    toggleMusic:
        () => Promise<void>;
};


const WeddingContext =
    createContext<
        WeddingContextType |
        undefined
    >(undefined);


export default function WeddingProvider({
    children,
}: {
    children:
        React.ReactNode;
}) {

    const audioRef =
        useRef<HTMLAudioElement>(
            null
        );


    const [
        invitationOpened,
        setInvitationOpened,
    ] =
        useState(false);


    const [
        isPlaying,
        setIsPlaying,
    ] =
        useState(false);


    /* =========================
       AUDIO VOLUME
    ========================= */

    useEffect(() => {

        if (
            audioRef.current
        ) {

            audioRef.current.volume =
                0.28;

        }

    }, []);


    /* =========================
       KHÓA SCROLL TRƯỚC KHI
       MỞ THIỆP
    ========================= */

    useEffect(() => {

        if (
            invitationOpened
        ) {

            document.body.style
                .overflow = "";

        } else {

            document.body.style
                .overflow = "hidden";

        }


        return () => {

            document.body.style
                .overflow = "";

        };

    }, [
        invitationOpened,
    ]);


    /* =========================
       PLAY
    ========================= */

    const playMusic =
        useCallback(
            async () => {

                const audio =
                    audioRef.current;


                if (!audio) {
                    return false;
                }


                try {

                    await audio.play();

                    setIsPlaying(
                        true
                    );

                    return true;

                } catch (
                    error
                ) {

                    console.log(
                        "Không phát được nhạc:",
                        error
                    );

                    return false;
                }

            },
            []
        );


    /* =========================
       PAUSE
    ========================= */

    const pauseMusic =
        useCallback(
            () => {

                const audio =
                    audioRef.current;


                if (!audio) {
                    return;
                }


                audio.pause();

                setIsPlaying(
                    false
                );

            },
            []
        );


    /* =========================
       TOGGLE
    ========================= */

    const toggleMusic =
        useCallback(
            async () => {

                if (
                    audioRef.current
                        ?.paused
                ) {

                    await playMusic();

                } else {

                    pauseMusic();

                }

            },
            [
                pauseMusic,
                playMusic,
            ]
        );


    function finishInvitation() {

        setInvitationOpened(
            true
        );

    }


    return (

        <WeddingContext.Provider
            value={{
                invitationOpened,

                finishInvitation,

                isPlaying,

                playMusic,

                pauseMusic,

                toggleMusic,
            }}
        >

            {children}


            {/* NHẠC NỀN */}

            <audio
                ref={audioRef}
                src={wedding.music}
                loop
                preload="metadata"

                onPlay={() =>
                    setIsPlaying(
                        true
                    )
                }

                onPause={() =>
                    setIsPlaying(
                        false
                    )
                }
            />

        </WeddingContext.Provider>
    );
}


export function useWedding() {

    const context =
        useContext(
            WeddingContext
        );


    if (!context) {

        throw new Error(
            "useWedding phải được sử dụng bên trong WeddingProvider."
        );
    }


    return context;
}