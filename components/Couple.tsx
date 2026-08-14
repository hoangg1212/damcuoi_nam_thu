import Image from "next/image";

import { wedding } from "@/data/wedding";

import Reveal from "@/components/ui/Reveal";


export default function Couple() {

    return (

        <section
            id="couple"

            className="
                bg-[#f9f7f3]

                px-5
                py-24

                md:py-36
            "
        >

            <div
                className="
                    mx-auto
                    max-w-[1180px]
                "
            >

                <Reveal>

                    <div
                        className="
                            mx-auto
                            mb-16

                            max-w-2xl

                            text-center

                            md:mb-24
                        "
                    >

                        <p
                            className="
                                mb-4

                                text-[9px]
                                font-medium

                                uppercase

                                tracking-[0.4em]

                                text-[#8c7558]
                            "
                        >
                            Hai mảnh ghép
                        </p>


                        <h2
                            className="
                                font-wedding-serif

                                text-5xl
                                font-normal

                                md:text-7xl
                            "
                        >
                            Chúng mình
                        </h2>


                        <p
                            className="
                                font-wedding-serif

                                mx-auto
                                mt-6

                                max-w-xl

                                text-lg
                                leading-8

                                text-[#746e67]

                                md:text-xl
                            "
                        >
                            Hai hành trình khác nhau, hai thế giới từng chẳng liên quan, rồi một ngày lại gặp nhau và trở thành một phần trong cuộc đời của nhau.
                        </p>

                    </div>

                </Reveal>


                <div
                    className="
                        grid

                        items-center

                        gap-14

                        md:grid-cols-[1fr_70px_1fr]
                        md:gap-10
                    "
                >

                    {/* GROOM */}

                    <Reveal>

                        <article
                            className="
                                text-center
                            "
                        >

                            <div
                                className="
                                    group

                                    relative

                                    mx-auto

                                    aspect-[4/5]
                                    max-w-[430px]

                                    overflow-hidden

                                    shadow-[0_30px_80px_rgba(35,30,25,0.12)]
                                "
                            >

                                <Image
                                    src={
                                        wedding.groom.image
                                    }

                                    alt={
                                        wedding.groom.fullName
                                    }

                                    fill

                                    sizes="
                                        (max-width:768px) 90vw,
                                        430px
                                    "

                                    className="
                                        object-cover

                                        transition-transform
                                        duration-[1200ms]

                                        group-hover:scale-[1.035]
                                    "
                                />

                            </div>


                            <p
                                className="
                                    mt-8

                                    text-[9px]

                                    uppercase

                                    tracking-[0.35em]

                                    text-[#8c7558]
                                "
                            >
                                Chú rể
                            </p>


                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-4xl

                                    md:text-5xl
                                "
                            >
                                {wedding.groom.fullName}
                            </h3>


                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto
                                    mt-4

                                    max-w-md

                                    text-lg
                                    leading-8

                                    text-[#746e67]
                                "
                            >
                                {wedding.groom.description}
                            </p>

                        </article>

                    </Reveal>


                    <div
                        className="
                            mx-auto

                            flex
                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-full

                            border
                            border-[#ded0bd]

                            text-sm
                            text-[#b49a78]
                        "
                    >
                        ♥
                    </div>


                    {/* BRIDE */}

                    <Reveal
                        delay={150}
                    >

                        <article
                            className="
                                text-center
                            "
                        >

                            <div
                                className="
                                    group

                                    relative

                                    mx-auto

                                    aspect-[4/5]
                                    max-w-[430px]

                                    overflow-hidden

                                    shadow-[0_30px_80px_rgba(35,30,25,0.12)]
                                "
                            >

                                <Image
                                    src={
                                        wedding.bride.image
                                    }

                                    alt={
                                        wedding.bride.fullName
                                    }

                                    fill

                                    sizes="
                                        (max-width:768px) 90vw,
                                        430px
                                    "

                                    className="
                                        object-cover

                                        transition-transform
                                        duration-[1200ms]

                                        group-hover:scale-[1.035]
                                    "
                                />

                            </div>


                            <p
                                className="
                                    mt-8

                                    text-[9px]

                                    uppercase

                                    tracking-[0.35em]

                                    text-[#8c7558]
                                "
                            >
                                Cô dâu
                            </p>


                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-4xl

                                    md:text-5xl
                                "
                            >
                                {wedding.bride.fullName}
                            </h3>


                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto
                                    mt-4

                                    max-w-md

                                    text-lg
                                    leading-8

                                    text-[#746e67]
                                "
                            >
                                {wedding.bride.description}
                            </p>

                        </article>

                    </Reveal>

                </div>

            </div>

        </section>
    );
}