export default function WeddingMessage() {

    return (

        <section
            className="
                bg-[#24211e]

                px-5
                py-24

                text-white

                md:py-32
            "
        >

            <div
                className="
                    mx-auto

                    max-w-4xl

                    text-center
                "
            >

                <p
                    className="
                        text-[9px]

                        uppercase

                        tracking-[0.4em]

                        text-white/45
                    "
                >
                    Một ngày đặc biệt · Những người đặc biệt
                </p>


                <h2
                    className="
                        font-wedding-serif

                        mt-7

                        text-3xl
                        font-light
                        leading-snug

                        md:text-5xl
                    "
                >
                    Điều khiến ngày vui trở nên trọn vẹn không chỉ là khoảnh khắc chúng mình nắm tay nhau bước vào lễ đường, mà còn là sự hiện diện của những người chúng mình yêu quý.
                </h2>


                <p
                    className="
                        font-wedding

                        mt-8

                        text-5xl

                        text-[#ded0bd]
                    "
                >
                    Nam

                    <span
                        className="
                            font-wedding-serif

                            mx-4

                            text-xl
                        "
                    >
                        &
                    </span>

                    Thư
                </p>

            </div>

        </section>
    );
}