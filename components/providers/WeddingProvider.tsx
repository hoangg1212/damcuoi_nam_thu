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
        WeddingContextType | undefined
    >(undefined);


export default function WeddingProvider({
    children,
}: {
    children:
        React.ReactNode;
}) {

    /* =====================================================
       AUDIO REF
    ===================================================== */

    const audioRef =
        useRef<HTMLAudioElement>(
            null
        );


    /* =====================================================
       STATE MỞ THIỆP
    ===================================================== */

    const [
        invitationOpened,
        setInvitationOpened,
    ] =
        useState(false);


    /* =====================================================
       STATE NHẠC
    ===================================================== */

    const [
        isPlaying,
        setIsPlaying,
    ] =
        useState(false);


    /* =====================================================
       CẤU HÌNH ÂM LƯỢNG
    ===================================================== */

    useEffect(() => {

        const audio =
            audioRef.current;


        if (!audio) {
            return;
        }


        /*
            0.28 = 28%

            Bạn có thể chỉnh:
            0.1  = nhỏ
            0.3  = vừa
            0.5  = khá lớn
            1    = tối đa
        */

        audio.volume =
            0.28;

    }, []);


    /* =====================================================
       KHÓA SCROLL KHI CHƯA MỞ THIỆP
    ===================================================== */

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


    /* =====================================================
       PLAY MUSIC
    ===================================================== */

    const playMusic =
        useCallback(
            async () => {

                const audio =
                    audioRef.current;


                if (!audio) {

                    console.log(
                        "❌ Không tìm thấy audio"
                    );

                    return false;
                }


                try {

                    await audio.play();


                    setIsPlaying(
                        true
                    );


                    console.log(
                        "🎵 Nhạc đang phát"
                    );


                    return true;

                } catch (
                    error
                ) {

                    console.log(
                        "❌ Không phát được nhạc:",
                        error
                    );


                    setIsPlaying(
                        false
                    );


                    return false;
                }

            },
            []
        );


    /* =====================================================
       PAUSE MUSIC
    ===================================================== */

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


                console.log(
                    "⏸ Nhạc đã tạm dừng"
                );

            },
            []
        );


    /* =====================================================
       TOGGLE MUSIC
    ===================================================== */

    const toggleMusic =
        useCallback(
            async () => {

                const audio =
                    audioRef.current;


                if (!audio) {
                    return;
                }


                if (
                    audio.paused
                ) {

                    await playMusic();

                } else {

                    pauseMusic();

                }

            },
            [
                playMusic,
                pauseMusic,
            ]
        );


    /* =====================================================
       HOÀN TẤT MỞ THIỆP
    ===================================================== */

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


            {/* =================================================
                AUDIO BACKGROUND

                Dùng <audio> nên video MP4 sẽ KHÔNG hiện hình.

                Browser chỉ dùng track âm thanh.
            ================================================= */}

            <audio
                ref={audioRef}

                src={wedding.music}

                loop

                preload="auto"

                onPlay={() => {

                    setIsPlaying(
                        true
                    );

                }}

                onPause={() => {

                    setIsPlaying(
                        false
                    );

                }}

                onEnded={() => {

                    setIsPlaying(
                        false
                    );

                }}
            />

        </WeddingContext.Provider>
    );
}


/* =========================================================
   CUSTOM HOOK
========================================================= */

export function useWedding() {

    const context =
        useContext(
            WeddingContext
        );


    if (!context) {

        throw new Error(
            "useWedding phải nằm bên trong WeddingProvider."
        );
    }


    return context;
}