"use client";

import {
    FormEvent,
    useState,
} from "react";


export default function WishesForm() {

    const [
        message,
        setMessage,
    ] =
        useState("");


    const [
        loading,
        setLoading,
    ] =
        useState(false);


    const [
        status,
        setStatus,
    ] =
        useState<{
            type:
                "success" |
                "error" |
                "";

            text:
                string;
        }>({
            type: "",
            text: "",
        });


    async function submit(
        event:
            FormEvent<HTMLFormElement>
    ) {

        event.preventDefault();


        const form =
            event.currentTarget;


        const formData =
            new FormData(
                form
            );


        const payload = {
            guestName:
                String(
                    formData.get(
                        "guestName"
                    ) || ""
                ),

            relation:
                String(
                    formData.get(
                        "relation"
                    ) || ""
                ),

            email:
                String(
                    formData.get(
                        "email"
                    ) || ""
                ),

            message:
                String(
                    formData.get(
                        "message"
                    ) || ""
                ),

            /*
                Honeypot chống bot.
            */

            website:
                String(
                    formData.get(
                        "website"
                    ) || ""
                ),
        };


        setLoading(
            true
        );


        setStatus({
            type: "",
            text: "",
        });


        try {

            const response =
                await fetch(
                    "/api/wishes",
                    {
                        method:
                            "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body:
                            JSON.stringify(
                                payload
                            ),
                    }
                );


            const data =
                await response.json();


            if (
                !response.ok
            ) {

                throw new Error(
                    data.message ||
                    "Không gửi được lời chúc."
                );

            }


            setStatus({
                type:
                    "success",

                text:
                    "♥ Cảm ơn bạn. Nam và Thư đã nhận được lời chúc thật đẹp này.",
            });


            form.reset();

            setMessage(
                ""
            );


        } catch (
            error
        ) {

            setStatus({
                type:
                    "error",

                text:
                    error instanceof Error
                        ? error.message
                        : "Có lỗi xảy ra. Vui lòng thử lại.",
            });


        } finally {

            setLoading(
                false
            );

        }

    }


    return (

        <section
            id="wishes"

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

                    grid
                    max-w-[1100px]

                    items-center

                    gap-14

                    lg:grid-cols-[0.8fr_1.2fr]
                    lg:gap-24
                "
            >

                <div>

                    <p
                        className="
                            text-[9px]

                            uppercase

                            tracking-[0.4em]

                            text-[#8c7558]
                        "
                    >
                        Đôi lời gửi đến chúng mình
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            mt-4

                            text-5xl

                            md:text-7xl
                        "
                    >
                        Gửi một lời thương
                    </h2>


                    <p
                        className="
                            font-wedding-serif

                            mt-6

                            max-w-md

                            text-lg
                            leading-8

                            text-[#746e67]
                        "
                    >
                        Nếu có một điều bạn muốn nhắn gửi trong ngày đặc biệt này, hãy để lại vài dòng cho Nam và Thư.
                        <br />
                        <br />
                        Mỗi lời chúc, dù giản dị hay chỉ là một câu ngắn, đều sẽ trở thành một kỷ niệm đẹp mà chúng mình trân trọng lưu giữ.
                    </p>


                    <div
                        className="
                            font-wedding-serif

                            mt-6

                            text-4xl

                            text-[#b49a78]
                        "
                    >
                        ♡
                    </div>

                </div>


                <form
                    onSubmit={
                        submit
                    }

                    className="
                        border
                        border-black/10

                        bg-white/60

                        p-6

                        shadow-[0_20px_60px_rgba(35,30,25,0.08)]

                        backdrop-blur-xl

                        md:p-12
                    "
                >

                    {/* HONEYPOT */}

                    <input
                        type="text"

                        name="website"

                        tabIndex={-1}

                        autoComplete="off"

                        className="
                            hidden
                        "
                    />


                    <Field
                        label="Tên của bạn"
                    >
                        <input
                            type="text"

                            name="guestName"

                            required

                            maxLength={100}

                            placeholder="Nhập tên của bạn"

                            className="
                                w-full

                                border-0
                                border-b
                                border-black/15

                                bg-transparent

                                px-0
                                py-3

                                outline-none

                                transition-colors

                                focus:border-[#8c7558]
                            "
                        />
                    </Field>


                    <Field
                        label="Bạn là"
                    >

                        <select
                            name="relation"

                            className="
                                w-full

                                border-0
                                border-b
                                border-black/15

                                bg-transparent

                                px-0
                                py-3

                                outline-none

                                focus:border-[#8c7558]
                            "
                        >
                            <option>
                                Bạn của cô dâu
                            </option>

                            <option>
                                Bạn của chú rể
                            </option>

                            <option>
                                Bạn của cả hai
                            </option>

                            <option>
                                Đồng nghiệp
                            </option>

                            <option>
                                Người thân
                            </option>

                            <option>
                                Một người bạn đặc biệt
                            </option>
                        </select>

                    </Field>


                    <Field
                        label="Email (không bắt buộc)"
                    >
                        <input
                            type="email"

                            name="email"

                            maxLength={200}

                            placeholder="Email của bạn"

                            className="
                                w-full

                                border-0
                                border-b
                                border-black/15

                                bg-transparent

                                px-0
                                py-3

                                outline-none

                                focus:border-[#8c7558]
                            "
                        />
                    </Field>


                    <Field
                        label="Lời nhắn dành cho Nam & Thư"
                    >

                        <textarea
                            name="message"

                            value={
                                message
                            }

                            onChange={
                                (
                                    event
                                ) =>
                                    setMessage(
                                        event.target.value
                                    )
                            }

                            required

                            maxLength={
                                500
                            }

                            rows={
                                5
                            }

                            placeholder="Gửi một lời chúc thật đẹp đến chúng mình..."

                            className="
                                w-full

                                resize-none

                                border-0
                                border-b
                                border-black/15

                                bg-transparent

                                px-0
                                py-3

                                outline-none

                                focus:border-[#8c7558]
                            "
                        />


                        <p
                            className="
                                mt-2

                                text-right

                                text-[9px]

                                text-black/40
                            "
                        >
                            {message.length}/500
                        </p>

                    </Field>


                    <button
                        type="submit"

                        disabled={
                            loading
                        }

                        className="
                            mt-2

                            w-full

                            bg-[#292622]

                            px-7
                            py-5

                            text-[9px]
                            font-medium

                            uppercase

                            tracking-[0.25em]

                            text-white

                            transition-colors

                            hover:bg-[#8c7558]

                            disabled:cursor-wait
                            disabled:opacity-60
                        "
                    >
                        {loading
                            ? "Đang gửi lời chúc..."
                            : "♥ Gửi lời chúc"}
                    </button>


                    {status.text && (

                        <p
                            className={`
                                mt-5

                                text-center
                                text-sm

                                ${
                                    status.type ===
                                    "success"
                                        ? "text-green-700"
                                        : "text-red-700"
                                }
                            `}
                        >
                            {status.text}
                        </p>

                    )}

                </form>

            </div>

        </section>
    );
}


function Field({
    label,
    children,
}: {
    label:
        string;

    children:
        React.ReactNode;
}) {

    return (

        <div
            className="
                mb-7
            "
        >

            <label
                className="
                    mb-2
                    block

                    text-[9px]
                    font-medium

                    uppercase

                    tracking-[0.2em]
                "
            >
                {label}
            </label>


            {children}

        </div>
    );
}