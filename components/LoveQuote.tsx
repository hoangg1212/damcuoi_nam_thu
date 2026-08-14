import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


export default function LoveQuote() {

    return (

        <section
            className="
                relative

                flex
                min-h-[540px]

                items-center

                overflow-hidden

                px-5
                py-24
            "
        >

            <Image
                src="/images/gallery-02.jpg"

                alt="Nam và Thư"

                fill

                sizes="100vw"

                className="
                    object-cover
                "
            />


            <div
                className="
                    absolute
                    inset-0

                    bg-black/55
                "
            />


            <Reveal
                className="
                    relative
                    z-10

                    mx-auto
                    max-w-4xl

                    text-center
                    text-white
                "
            >

                <span
                    className="
                        text-[#ded0bd]
                    "
                >
                    ♥
                </span>


                <blockquote
                    className="
                        font-wedding-serif

                        mt-6

                        text-3xl
                        font-light
                        italic
                        leading-snug

                        md:text-5xl
                    "
                >
                    “{wedding.loveQuote}”
                </blockquote>


                <p
                    className="
                        font-wedding

                        mt-7

                        text-4xl

                        text-[#ded0bd]
                    "
                >
                    Nam & Thư
                </p>

            </Reveal>

        </section>
    );
}