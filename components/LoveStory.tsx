import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


export default function LoveStory() {

    return (

        <section
            id="story"

            className="
                bg-[#fffdf9]

                px-5
                py-24

                md:py-36
            "
        >

            <div
                className="
                    mx-auto
                    max-w-[1120px]
                "
            >

                <Reveal>

                    <div
                        className="
                            mx-auto
                            mb-20

                            max-w-2xl

                            text-center

                            md:mb-28
                        "
                    >

                        <p
                            className="
                                mb-4

                                text-[9px]

                                uppercase

                                tracking-[0.4em]

                                text-[#8c7558]
                            "
                        >
                            Hành trình của chúng mình
                        </p>


                        <h2
                            className="
                                font-wedding-serif

                                text-5xl

                                md:text-7xl
                            "
                        >
                            Chuyện tình yêu
                        </h2>


                        <p
                            className="
                                font-wedding-serif

                                mt-6

                                text-lg
                                leading-8

                                text-[#746e67]
                            "
                        >
                            Tình yêu của chúng mình không bắt đầu bằng điều gì quá đặc biệt. Chỉ là từ một cuộc gặp, rồi dần trở thành một người không thể thiếu.
                        </p>

                    </div>

                </Reveal>


                <div
                    className="
                        space-y-24

                        md:space-y-36
                    "
                >

                    {wedding.story.map(
                        (
                            item,
                            index
                        ) => {

                            const reverse =
                                index %
                                2 ===
                                1;


                            return (

                                <Reveal
                                    key={
                                        item.title
                                    }
                                >

                                    <article
                                        className="
                                            grid

                                            items-center

                                            gap-10

                                            md:grid-cols-2
                                            md:gap-20
                                        "
                                    >

                                        <div
                                            className={`
                                                relative

                                                h-[430px]

                                                overflow-hidden

                                                md:h-[600px]

                                                ${
                                                    reverse
                                                        ? "md:order-2"
                                                        : ""
                                                }
                                            `}
                                        >

                                            <Image
                                                src={
                                                    item.image
                                                }

                                                alt={
                                                    item.title
                                                }

                                                fill

                                                sizes="
                                                    (max-width:768px) 100vw,
                                                    50vw
                                                "

                                                className="
                                                    object-cover
                                                "
                                            />

                                        </div>


                                        <div
                                            className={`
                                                ${
                                                    reverse
                                                        ? "md:order-1 md:text-right"
                                                        : ""
                                                }
                                            `}
                                        >

                                            <span
                                                className="
                                                    text-[9px]

                                                    tracking-[0.3em]

                                                    text-[#8c7558]
                                                "
                                            >
                                                {item.date}
                                            </span>


                                            <h3
                                                className="
                                                    font-wedding-serif

                                                    mt-4

                                                    text-4xl
                                                    leading-tight

                                                    md:text-5xl
                                                "
                                            >
                                                {item.title}
                                            </h3>


                                            <p
                                                className="
                                                    font-wedding-serif

                                                    mt-5

                                                    text-lg
                                                    leading-8

                                                    text-[#746e67]
                                                "
                                            >
                                                {item.description}
                                            </p>

                                        </div>

                                    </article>

                                </Reveal>
                            );

                        }
                    )}

                </div>

            </div>

        </section>
    );
}