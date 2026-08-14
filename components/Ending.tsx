import Image from "next/image";

import { wedding } from "@/data/wedding";


export default function Ending() {

    return (

        <section
            className="
                relative

                flex
                min-h-[650px]

                items-center

                overflow-hidden

                px-5
                py-24
            "
        >

            <Image
                src="/images/gallery-05.jpg"

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

                    bg-black/60
                "
            />


            <div
                className="
                    relative
                    z-10

                    mx-auto
                    max-w-2xl

                    text-center
                    text-white
                "
            >

                <p
                    className="
                        font-wedding

                        text-5xl

                        text-[#ded0bd]
                    "
                >
                    Cảm ơn bạn
                </p>


                <h2
                    className="
                        font-wedding

                        mt-3

                        text-7xl

                        md:text-9xl
                    "
                >
                    N

                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            text-2xl

                            text-[#ded0bd]
                        "
                    >
                        ♥
                    </span>

                    T
                </h2>


                <p
                    className="
                        font-wedding-serif

                        mt-6

                        text-lg
                        leading-8

                        text-white/80
                    "
                >
                    Cảm ơn vì đã ghé qua một phần câu chuyện của chúng mình.
                    <br />
                    Hẹn gặp bạn trong ngày Nam & Thư chính thức gọi nhau là gia đình.
                </p>


                <strong
                    className="
                        font-wedding-serif

                        mt-7
                        block

                        font-normal

                        tracking-[0.3em]
                    "
                >
                    {wedding.displayDate}
                </strong>

            </div>

        </section>
    );
}