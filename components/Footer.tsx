export default function Footer() {

    return (

        <footer
            className="
                bg-[#1e1b19]

                px-5
                py-14

                text-center
                text-white
            "
        >

            <div
                className="
                    font-wedding

                    text-5xl
                "
            >
                N

                <span
                    className="
                        font-wedding-serif

                        mx-3

                        text-sm

                        text-[#b49a78]
                    "
                >
                    ♥
                </span>

                T
            </div>


            <p
                className="
                    font-wedding-serif

                    mt-3

                    text-base

                    text-white/50
                "
            >
                Một câu chuyện nhỏ, một hành trình dài, và một mái nhà đang chờ phía trước.
            </p>


            <p
                className="
                    mt-3

                    text-[9px]

                    tracking-[0.1em]

                    text-white/25
                "
            >
                © 2026 Nguyễn Nam & Huỳnh Thư
            </p>

        </footer>
    );
}