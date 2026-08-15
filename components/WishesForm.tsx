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
                    "Cảm ơn bạn. Nam và Thư đã nhận được lời chúc thật đẹp này. ♥",
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
                relative
                overflow-hidden

                bg-gradient-to-b

                from-[#faf2ed]
                via-[#fffaf7]
                to-[#f7ebe5]

                px-5
                py-20

                sm:px-6
                sm:py-24

                md:px-8
                md:py-32

                lg:py-36
            "
        >


            {/* ====================================== */}
            {/* BACKGROUND DECORATION */}
            {/* ====================================== */}

            <div
                className="
                    pointer-events-none

                    absolute
                    -left-36
                    top-[12%]

                    h-[360px]
                    w-[360px]

                    rounded-full

                    bg-[#e8b8ad]/18

                    blur-[120px]

                    md:h-[460px]
                    md:w-[460px]
                "
            />


            <div
                className="
                    pointer-events-none

                    absolute
                    -right-36
                    bottom-[10%]

                    h-[380px]
                    w-[380px]

                    rounded-full

                    bg-[#dec4a5]/20

                    blur-[130px]

                    md:h-[480px]
                    md:w-[480px]
                "
            />


            {/* top decoration */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-8

                    flex

                    -translate-x-1/2

                    items-center
                    justify-center

                    gap-3

                    md:top-12
                "
            >

                <span
                    className="
                        h-px
                        w-8

                        bg-gradient-to-r

                        from-transparent
                        to-[#b98777]/45
                    "
                />


                <span
                    className="
                        text-[8px]

                        text-[#b77969]/70
                    "
                >
                    ♥
                </span>


                <span
                    className="
                        h-px
                        w-8

                        bg-gradient-to-l

                        from-transparent
                        to-[#b98777]/45
                    "
                />

            </div>


            {/* ====================================== */}
            {/* CONTENT */}
            {/* ====================================== */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    grid
                    max-w-[1160px]

                    items-center

                    gap-14

                    lg:grid-cols-[0.8fr_1.2fr]
                    lg:gap-16

                    xl:gap-24
                "
            >


                {/* ====================================== */}
                {/* LEFT CONTENT */}
                {/* ====================================== */}

                <div
                    className="
                        mx-auto

                        max-w-xl

                        text-center

                        lg:mx-0
                        lg:text-left
                    "
                >


                    <p
                        className="
                            text-[11px]
                            font-semibold

                            uppercase

                            tracking-[0.28em]

                            text-[#9d6f63]

                            sm:text-xs
                        "
                    >
                        Đôi lời gửi đến chúng mình
                    </p>


                    <h2
                        className="
                            font-wedding-serif

                            mt-4

                            text-[42px]
                            font-light

                            leading-[1.15]

                            text-[#4d3d37]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-7xl
                        "
                    >
                        Gửi một
                        <br className="hidden lg:block" />

                        <span
                            className="
                                italic

                                text-[#a86f62]
                            "
                        >
                            {" "}
                            lời thương
                        </span>
                    </h2>


                    {/* DIVIDER */}

                    <div
                        className="
                            mt-6

                            flex

                            items-center
                            justify-center

                            gap-3

                            lg:justify-start
                        "
                    >

                        <span
                            className="
                                h-px
                                w-10

                                bg-[#c69a8d]/45

                                sm:w-14
                            "
                        />


                        <span
                            className="
                                text-[9px]

                                text-[#b77969]
                            "
                        >
                            ♡
                        </span>


                        <span
                            className="
                                h-px
                                w-10

                                bg-[#c69a8d]/45
                            "
                        />

                    </div>


                    <p
                        className="
                            font-wedding-serif

                            mt-6

                            text-[16px]

                            leading-7

                            text-[#64534c]

                            sm:text-lg
                            sm:leading-8

                            md:text-xl
                            md:leading-9
                        "
                    >
                        Nếu có một điều bạn muốn nhắn gửi trong ngày đặc biệt này,
                        hãy để lại vài dòng cho Nam và Thư.
                    </p>


                    <p
                        className="
                            font-wedding-serif

                            mt-4

                            text-[16px]

                            leading-7

                            text-[#64534c]

                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        Mỗi lời chúc, dù giản dị hay chỉ là một câu ngắn,
                        đều sẽ trở thành một kỷ niệm đẹp mà chúng mình trân trọng lưu giữ.
                    </p>


                    {/* SIGNATURE */}

                    <div
                        className="
                            mt-7

                            flex

                            items-center
                            justify-center

                            gap-3

                            lg:justify-start
                        "
                    >

                        <span
                            className="
                                font-wedding

                                text-4xl

                                text-[#ad7567]

                                sm:text-5xl
                            "
                        >
                            Nam
                        </span>


                        <span
                            className="
                                text-[9px]

                                text-[#b77969]
                            "
                        >
                            ♥
                        </span>


                        <span
                            className="
                                font-wedding

                                text-4xl

                                text-[#ad7567]

                                sm:text-5xl
                            "
                        >
                            Thư
                        </span>

                    </div>

                </div>


                {/* ====================================== */}
                {/* FORM CARD */}
                {/* ====================================== */}

                <form
                    onSubmit={
                        submit
                    }

                    className="
                        relative

                        overflow-hidden

                        rounded-[28px]

                        border
                        border-white/80

                        bg-white/60

                        p-6

                        shadow-[0_30px_80px_rgba(103,68,57,0.10)]

                        backdrop-blur-xl

                        sm:p-8

                        md:rounded-[36px]
                        md:p-10

                        lg:p-12
                    "
                >


                    {/* FORM GLOW */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            -right-24
                            -top-24

                            h-[220px]
                            w-[220px]

                            rounded-full

                            bg-[#efc6ba]/25

                            blur-[80px]
                        "
                    />


                    <div
                        className="
                            pointer-events-none

                            absolute

                            -bottom-24
                            -left-24

                            h-[230px]
                            w-[230px]

                            rounded-full

                            bg-[#e5ccab]/25

                            blur-[90px]
                        "
                    />


                    <div
                        className="
                            relative
                            z-10
                        "
                    >


                        {/* FORM HEADER */}

                        <div
                            className="
                                mb-8

                                text-center

                                md:mb-10
                            "
                        >

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
                                    border-[#c49689]/30

                                    bg-[#fff9f6]/70

                                    text-[#b77969]
                                "
                            >
                                ♡
                            </div>


                            <h3
                                className="
                                    font-wedding-serif

                                    mt-4

                                    text-2xl

                                    text-[#4c3c36]

                                    sm:text-3xl
                                "
                            >
                                Lời chúc dành cho Nam & Thư
                            </h3>


                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto
                                    mt-2

                                    max-w-md

                                    text-[14px]

                                    leading-6

                                    text-[#76615a]

                                    sm:text-[15px]
                                "
                            >
                                Một vài dòng chân thành cũng đủ để ngày vui thêm trọn vẹn.
                            </p>

                        </div>


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


                        {/* NAME */}

                        <Field
                            label="Tên của bạn"
                        >
                            <input
                                type="text"

                                name="guestName"

                                required

                                maxLength={100}

                                placeholder="Ví dụ: Nguyễn Minh Anh"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#c7a79c]/30

                                    bg-[#fffaf7]/60

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#493a34]

                                    outline-none

                                    placeholder:text-[#8e7a72]/55

                                    transition-all
                                    duration-300

                                    focus:border-[#b87d6e]/60

                                    focus:bg-white

                                    focus:shadow-[0_8px_25px_rgba(137,87,73,0.08)]

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
                                "
                            />
                        </Field>


                        {/* RELATION */}

                        <Field
                            label="Bạn là"
                        >
                            <select
                                name="relation"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#c7a79c]/30

                                    bg-[#fffaf7]/60

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#493a34]

                                    outline-none

                                    transition-all

                                    focus:border-[#b87d6e]/60

                                    focus:bg-white

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
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


                        {/* EMAIL */}

                        <Field
                            label="Email"
                            optional
                        >
                            <input
                                type="email"

                                name="email"

                                maxLength={200}

                                placeholder="Email của bạn"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#c7a79c]/30

                                    bg-[#fffaf7]/60

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#493a34]

                                    outline-none

                                    placeholder:text-[#8e7a72]/55

                                    transition-all

                                    focus:border-[#b87d6e]/60

                                    focus:bg-white

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
                                "
                            />
                        </Field>


                        {/* MESSAGE */}

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

                                maxLength={500}

                                rows={5}

                                placeholder="Gửi một lời chúc thật đẹp đến chúng mình..."

                                className="
                                    min-h-[150px]
                                    w-full

                                    resize-none

                                    rounded-2xl

                                    border
                                    border-[#c7a79c]/30

                                    bg-[#fffaf7]/60

                                    px-4
                                    py-4

                                    font-wedding-serif

                                    text-[16px]

                                    leading-7

                                    text-[#493a34]

                                    outline-none

                                    placeholder:text-[#8e7a72]/55

                                    transition-all

                                    focus:border-[#b87d6e]/60

                                    focus:bg-white

                                    sm:min-h-[170px]

                                    sm:px-5

                                    sm:text-[17px]
                                "
                            />


                            <div
                                className="
                                    mt-2

                                    flex

                                    items-center
                                    justify-between
                                "
                            >

                                <span
                                    className="
                                        text-[11px]

                                        text-[#8a726a]/60
                                    "
                                >
                                    Viết bằng tất cả yêu thương ♥
                                </span>


                                <span
                                    className="
                                        text-[11px]
                                        font-medium

                                        text-[#8a726a]/70
                                    "
                                >
                                    {message.length}/500
                                </span>

                            </div>

                        </Field>


                        {/* SUBMIT */}

                        <button
                            type="submit"

                            disabled={
                                loading
                            }

                            className="
                                group

                                mt-2

                                flex
                                min-h-[54px]

                                w-full

                                items-center
                                justify-center

                                gap-3

                                rounded-full

                                bg-[#5a443c]

                                px-7
                                py-4

                                text-[11px]
                                font-semibold

                                uppercase

                                tracking-[0.16em]

                                text-white

                                shadow-[0_14px_35px_rgba(80,54,46,0.16)]

                                transition-all
                                duration-300

                                hover:-translate-y-0.5

                                hover:bg-[#a86f62]

                                disabled:cursor-wait
                                disabled:opacity-60

                                sm:text-xs
                            "
                        >

                            <span
                                className="
                                    text-[12px]

                                    transition-transform
                                    duration-300

                                    group-hover:scale-110
                                "
                            >
                                ♥
                            </span>


                            {
                                loading
                                    ? "Đang gửi lời chúc..."
                                    : "Gửi lời chúc"
                            }

                        </button>


                        {/* STATUS */}

                        {status.text && (

                            <div
                                className={`
                                    mt-5

                                    rounded-2xl

                                    border

                                    px-4
                                    py-3

                                    text-center

                                    font-wedding-serif

                                    text-[14px]

                                    leading-6

                                    sm:text-[15px]

                                    ${
                                        status.type ===
                                        "success"

                                            ? `
                                                border-[#9bb69d]/30
                                                bg-[#eff7ef]
                                                text-[#537057]
                                              `

                                            : `
                                                border-[#d9a29a]/30
                                                bg-[#fff1ef]
                                                text-[#9a554d]
                                              `
                                    }
                                `}
                            >
                                {status.text}
                            </div>

                        )}

                    </div>

                </form>

            </div>

        </section>

    );
}


function Field({
    label,
    optional = false,
    children,
}: {
    label: string;
    optional?: boolean;
    children: React.ReactNode;
}) {

    return (

        <div
            className="
                mb-6

                sm:mb-7
            "
        >

            <label
                className="
                    mb-2.5

                    flex

                    items-center
                    justify-between

                    text-[11px]
                    font-semibold

                    uppercase

                    tracking-[0.16em]

                    text-[#6d5047]

                    sm:text-xs
                "
            >

                <span>
                    {label}
                </span>


                {optional && (

                    <span
                        className="
                            text-[9px]
                            font-normal

                            normal-case

                            tracking-normal

                            text-[#8d756d]/60

                            sm:text-[10px]
                        "
                    >
                        Không bắt buộc
                    </span>

                )}

            </label>


            {children}

        </div>

    );
}