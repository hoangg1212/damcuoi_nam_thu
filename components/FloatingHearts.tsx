"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    useWedding,
} from "@/components/providers/WeddingProvider";


type Heart = {
    id:
        number;

    left:
        number;

    size:
        number;

    duration:
        number;

    icon:
        string;
};


export default function FloatingHearts() {

    const {
        invitationOpened,
    } =
        useWedding();


    const [
        hearts,
        setHearts,
    ] =
        useState<Heart[]>(
            []
        );


    useEffect(() => {

        if (
            !invitationOpened
        ) {
            return;
        }


        let timer:
            ReturnType<
                typeof setTimeout
            >;


        let id =
            0;


        function schedule() {

            const delay =
                8000 +
                Math.random() *
                3000;


            timer =
                setTimeout(
                    () => {

                        id++;


                        const heart: Heart = {
                            id,

                            left:
                                8 +
                                Math.random() *
                                84,

                            size:
                                9 +
                                Math.random() *
                                7,

                            duration:
                                10 +
                                Math.random() *
                                5,

                            icon:
                                Math.random() >
                                .5
                                    ? "♡"
                                    : "♥",
                        };


                        setHearts(
                            (
                                current
                            ) => [
                                ...current,
                                heart,
                            ]
                        );


                        setTimeout(
                            () => {

                                setHearts(
                                    (
                                        current
                                    ) =>
                                        current.filter(
                                            (
                                                item
                                            ) =>
                                                item.id !==
                                                heart.id
                                        )
                                );

                            },

                            heart.duration *
                            1000 +
                            500
                        );


                        schedule();

                    },
                    delay
                );

        }


        schedule();


        return () => {

            clearTimeout(
                timer
            );

        };

    }, [
        invitationOpened,
    ]);


    return (

        <div
            className="
                pointer-events-none

                fixed
                inset-0

                z-[200]

                overflow-hidden
            "
        >

            {hearts.map(
                (
                    heart
                ) => (

                    <span
                        key={
                            heart.id
                        }

                        className="
                            wedding-heart

                            absolute
                            bottom-[-30px]

                            text-[#b49a78]/20
                        "

                        style={{
                            left:
                                `${heart.left}%`,

                            fontSize:
                                `${heart.size}px`,

                            animationDuration:
                                `${heart.duration}s`,
                        }}
                    >
                        {heart.icon}
                    </span>

                )
            )}

        </div>
    );
}