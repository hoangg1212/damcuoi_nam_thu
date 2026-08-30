"use client";

import type {
    FormEvent,
    ReactNode,
} from "react";

import {
    useState,
} from "react";

import { wedding } from "@/data/wedding";


/* =========================================================
   NHẪN CƯỚI
========================================================= */

function RingDecoration() {

    return (

        <div
            className="
                mx-auto

                flex

                w-full
                max-w-[360px]

                items-center
                justify-center
            "
            aria-hidden="true"
        >

            <svg
                viewBox="0 0 500 100"

                fill="none"

                xmlns="http://www.w3.org/2000/svg"

                className="
                    h-[54px]
                    w-full

                    overflow-visible

                    sm:h-[60px]

                    md:h-[66px]
                "
            >

                {/* LEFT DECORATIVE LINE */}

                <path
                    d="
                        M0 70
                        C35 52 58 86 91 69
                        C116 56 121 80 146 68
                        C162 60 170 59 188 63
                    "

                    stroke="#B8A27D"

                    strokeWidth="1.2"

                    opacity="0.55"
                />


                {/* RIGHT DECORATIVE LINE */}

                <path
                    d="
                        M312 63
                        C330 59 338 60 354 68
                        C379 80 384 56 409 69
                        C442 86 465 52 500 70
                    "

                    stroke="#B8A27D"

                    strokeWidth="1.2"

                    opacity="0.55"
                />


                {/* LEFT RING */}

                <ellipse
                    cx="220"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="220"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(-13 220 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />


                {/* RIGHT RING */}

                <ellipse
                    cx="280"
                    cy="49"

                    rx="48"
                    ry="25"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1.6"
                />


                <ellipse
                    cx="280"
                    cy="49"

                    rx="39"
                    ry="18"

                    transform="rotate(13 280 49)"

                    stroke="#B8A27D"

                    strokeWidth="1"

                    opacity="0.65"
                />

            </svg>

        </div>

    );
}


/* =========================================================
   WISHES FORM
========================================================= */

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


    /* =========================================================
       SUBMIT WISH
    ========================================================= */

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
                    wedding
                        .wishesSection
                        .successMessage,
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

                -mt-px

                overflow-hidden

                bg-[linear-gradient(to_bottom,#EAF2F5_0%,#EAF2F5_8%,#F3F6EF_46%,#FAF3EF_100%)]

                px-5

                pt-10
                pb-10

                sm:px-6
                sm:pt-12
                sm:pb-12

                md:px-8
                md:pt-14
                md:pb-14

                lg:pt-16
                lg:pb-16
            "
        >


            {/* =================================================
                SEAMLESS TOP TRANSITION
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute
                    left-0
                    top-0

                    h-10
                    w-full

                    bg-gradient-to-b

                    from-[#EAF2F5]
                    via-[#EAF2F5]/75
                    to-transparent

                    sm:h-12

                    md:h-14
                "
            />


            {/* =================================================
                BLUE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -left-40
                    top-[10%]

                    h-[390px]
                    w-[390px]

                    rounded-full

                    bg-[#8FB4C7]/18

                    blur-[125px]

                    md:h-[500px]
                    md:w-[500px]
                "
            />


            {/* =================================================
                DUSTY ROSE GLOW
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    -right-40
                    bottom-[8%]

                    h-[410px]
                    w-[410px]

                    rounded-full

                    bg-[#D9A5AE]/17

                    blur-[135px]

                    md:h-[520px]
                    md:w-[520px]
                "
            />


            {/* =================================================
                CENTER CREAM LIGHT
            ================================================= */}

            <div
                className="
                    pointer-events-none

                    absolute

                    left-1/2
                    top-1/2

                    h-[650px]
                    w-[60%]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-[#FFFDF8]/35

                    blur-[150px]

                    md:w-[45%]
                "
            />


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div
                className="
                    relative
                    z-10

                    mx-auto

                    grid

                    max-w-[1160px]

                    items-center

                    gap-10

                    sm:gap-12

                    lg:grid-cols-[0.82fr_1.18fr]

                    lg:gap-12

                    xl:gap-16
                "
            >


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div
                    className="
                        mx-auto

                        max-w-xl

                        text-center

                        lg:mx-0
                        lg:text-left
                    "
                >


                    {/* =================================================
                        EYEBROW
                    ================================================= */}

                    <p
                        className="
                            text-[10px]
                            font-medium

                            uppercase

                            tracking-[0.36em]

                            text-[#C98792]

                            sm:text-[11px]
                        "
                    >
                        {
                            wedding
                                .wishesSection
                                .eyebrow
                        }
                    </p>


                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h2
                        className="
                            font-wedding-serif

                            mt-4

                            text-[43px]
                            font-light

                            leading-[1.12]

                            tracking-[-0.02em]

                            text-[#31566B]

                            sm:text-5xl

                            md:text-6xl

                            lg:text-[68px]
                        "
                    >

                        {
                            wedding
                                .wishesSection
                                .title
                        }


                        <br
                            className="
                                hidden
                                lg:block
                            "
                        />


                        <span
                            className="
                                italic

                                text-[#587589]
                            "
                        >
                            {" "}

                            {
                                wedding
                                    .wishesSection
                                    .highlight
                            }
                        </span>

                    </h2>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

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
                                w-11

                                bg-gradient-to-r

                                from-transparent
                                to-[#B8A27D]/55

                                sm:w-16
                            "
                        />


                        <span
                            className="
                                text-[9px]

                                text-[#C98792]
                            "
                        >
                            ♡
                        </span>


                        <span
                            className="
                                h-px
                                w-11

                                bg-gradient-to-l

                                from-transparent
                                to-[#B8A27D]/55
                            "
                        />

                    </div>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-5

                            text-[16px]
                            font-normal

                            leading-7

                            text-[#61726D]

                            sm:text-lg
                            sm:leading-8

                            md:text-xl
                            md:leading-9
                        "
                    >
                        {
                            wedding
                                .wishesSection
                                .description
                        }
                    </p>


                    {/* =================================================
                        SUB DESCRIPTION
                    ================================================= */}

                    <p
                        className="
                            font-wedding-serif

                            mt-3

                            text-[16px]
                            font-normal

                            leading-7

                            text-[#61726D]/90

                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        {
                            wedding
                                .wishesSection
                                .subDescription
                        }
                    </p>


                    {/* =================================================
                        SIGNATURE
                    ================================================= */}

                    <div
                        className="
                            mt-6

                            flex

                            items-center
                            justify-center

                            gap-4

                            lg:justify-start
                        "
                    >

                        <span
                            className="
                                font-wedding

                                text-[43px]

                                leading-none

                                text-[#587589]

                                sm:text-5xl
                            "
                        >
                            {
                                wedding
                                    .groom
                                    .shortName
                            }
                        </span>


                        <span
                            className="
                                text-[9px]

                                text-[#C98792]
                            "
                        >
                            ♥
                        </span>


                        <span
                            className="
                                font-wedding

                                text-[43px]

                                leading-none

                                text-[#587589]

                                sm:text-5xl
                            "
                        >
                            {
                                wedding
                                    .bride
                                    .shortName
                            }
                        </span>

                    </div>

                </div>


                {/* =================================================
                    FORM CARD
                ================================================= */}

                <form
                    onSubmit={
                        submit
                    }

                    className="
                        relative

                        overflow-hidden

                        rounded-[30px]

                        border
                        border-[#FFFDF8]/90

                        bg-[#FFFDF8]/64

                        p-6

                        shadow-[0_30px_85px_rgba(49,86,107,0.10)]

                        backdrop-blur-xl

                        sm:p-8

                        md:rounded-[38px]
                        md:p-10

                        lg:p-12
                    "
                >


                    {/* =================================================
                        FORM BLUE GLOW
                    ================================================= */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            -right-24
                            -top-24

                            h-[240px]
                            w-[240px]

                            rounded-full

                            bg-[#8FB4C7]/18

                            blur-[85px]
                        "
                    />


                    {/* =================================================
                        FORM ROSE GLOW
                    ================================================= */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            -bottom-24
                            -left-24

                            h-[250px]
                            w-[250px]

                            rounded-full

                            bg-[#D9A5AE]/15

                            blur-[90px]
                        "
                    />


                    {/* =================================================
                        FORM INNER BORDER
                    ================================================= */}

                    <div
                        className="
                            pointer-events-none

                            absolute

                            inset-[6px]

                            rounded-[25px]

                            border
                            border-[#B8A27D]/10

                            md:rounded-[33px]
                        "
                    />


                    {/* =================================================
                        FORM CONTENT
                    ================================================= */}

                    <div
                        className="
                            relative
                            z-10
                        "
                    >


                        {/* =================================================
                            FORM HEADER
                        ================================================= */}

                        <div
                            className="
                                mb-6

                                text-center

                                md:mb-8
                            "
                        >


                            {/* =================================================
                                RING DECORATION
                            ================================================= */}

                            <RingDecoration />


                            {/* =================================================
                                FORM TITLE
                            ================================================= */}

                            <h3
                                className="
                                    font-wedding-serif

                                    mt-2

                                    text-[27px]
                                    font-normal

                                    leading-tight

                                    text-[#31566B]

                                    sm:text-3xl

                                    md:mt-3
                                "
                            >
                                {
                                    wedding
                                        .wishesSection
                                        .formTitle
                                }
                            </h3>


                            {/* =================================================
                                FORM DESCRIPTION
                                MOBILE: ÉP 1 DÒNG
                            ================================================= */}

                            <p
                                className="
                                    font-wedding-serif

                                    mx-auto

                                    mt-2

                                    max-w-none

                                    whitespace-nowrap

                                    text-[clamp(10px,3vw,14px)]
                                    font-normal

                                    leading-5

                                    tracking-[-0.01em]

                                    text-[#61726D]/85

                                    sm:max-w-md
                                    sm:whitespace-normal
                                    sm:text-[15px]
                                    sm:leading-6
                                    sm:tracking-normal
                                "
                            >
                                {
                                    wedding
                                        .wishesSection
                                        .formDescription
                                }
                            </p>

                        </div>


                        {/* =================================================
                            HONEYPOT
                        ================================================= */}

                        <input
                            type="text"

                            name="website"

                            tabIndex={-1}

                            autoComplete="off"

                            className="
                                hidden
                            "
                        />


                        {/* =================================================
                            NAME
                        ================================================= */}

                        <Field
                            label="Họ và tên"
                        >

                            <input
                                type="text"

                                name="guestName"

                                required

                                maxLength={100}

                                placeholder="Nhập họ và tên"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#7A9CAC]/22

                                    bg-[#FFFFFF]/55

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#31566B]

                                    outline-none

                                    placeholder:text-[#61726D]/45

                                    transition-all
                                    duration-300

                                    focus:border-[#7A9CAC]/60

                                    focus:bg-white

                                    focus:shadow-[0_8px_28px_rgba(49,86,107,0.07)]

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
                                "
                            />

                        </Field>


                        {/* =================================================
                            RELATION
                        ================================================= */}

                        <Field
                            label="Mối quan hệ"
                        >

                            <select
                                name="relation"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#7A9CAC]/22

                                    bg-[#FFFFFF]/55

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#31566B]

                                    outline-none

                                    transition-all
                                    duration-300

                                    focus:border-[#7A9CAC]/60

                                    focus:bg-white

                                    focus:shadow-[0_8px_28px_rgba(49,86,107,0.07)]

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
                                "
                            >

                                <option
                                    value="Bạn của cô dâu"
                                >
                                    Bạn của cô dâu
                                </option>


                                <option
                                    value="Bạn của chú rể"
                                >
                                    Bạn của chú rể
                                </option>


                                <option
                                    value="Bạn của cả hai"
                                >
                                    Bạn của cả hai
                                </option>


                                <option
                                    value="Đồng nghiệp"
                                >
                                    Đồng nghiệp
                                </option>


                                <option
                                    value="Người thân"
                                >
                                    Người thân
                                </option>


                                <option
                                    value="Khách mời"
                                >
                                    Khách mời
                                </option>

                            </select>

                        </Field>


                        {/* =================================================
                            EMAIL
                        ================================================= */}

                        <Field
                            label="Email"

                            optional
                        >

                            <input
                                type="email"

                                name="email"

                                maxLength={200}

                                placeholder="Nhập email nếu muốn"

                                className="
                                    w-full

                                    rounded-2xl

                                    border
                                    border-[#7A9CAC]/22

                                    bg-[#FFFFFF]/55

                                    px-4
                                    py-3.5

                                    font-wedding-serif

                                    text-[16px]

                                    text-[#31566B]

                                    outline-none

                                    placeholder:text-[#61726D]/45

                                    transition-all
                                    duration-300

                                    focus:border-[#7A9CAC]/60

                                    focus:bg-white

                                    focus:shadow-[0_8px_28px_rgba(49,86,107,0.07)]

                                    sm:px-5
                                    sm:py-4

                                    sm:text-[17px]
                                "
                            />

                        </Field>


                        {/* =================================================
                            MESSAGE
                        ================================================= */}

                        <Field
                            label="Lời chúc dành cho Nam & Thư"
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
                                            event
                                                .target
                                                .value
                                        )
                                }

                                required

                                maxLength={500}

                                rows={5}

                                placeholder="Gửi một lời chúc đến Nam và Thư..."

                                className="
                                    min-h-[150px]
                                    w-full

                                    resize-none

                                    rounded-2xl

                                    border
                                    border-[#7A9CAC]/22

                                    bg-[#FFFFFF]/55

                                    px-4
                                    py-4

                                    font-wedding-serif

                                    text-[16px]

                                    leading-7

                                    text-[#31566B]

                                    outline-none

                                    placeholder:text-[#61726D]/45

                                    transition-all
                                    duration-300

                                    focus:border-[#7A9CAC]/60

                                    focus:bg-white

                                    focus:shadow-[0_8px_28px_rgba(49,86,107,0.07)]

                                    sm:min-h-[170px]

                                    sm:px-5

                                    sm:text-[17px]
                                "
                            />


                            {/* =============================================
                                MESSAGE META
                            ============================================= */}

                            <div
                                className="
                                    mt-2

                                    flex

                                    items-center
                                    justify-between

                                    gap-4
                                "
                            >

                                <span
                                    className="
                                        font-wedding-serif

                                        text-[11px]
                                        font-normal

                                        italic

                                        text-[#61726D]/65
                                    "
                                >
                                    {
                                        wedding
                                            .wishesSection
                                            .helperText
                                    }

                                    <span
                                        className="
                                            ml-1

                                            not-italic

                                            text-[#C98792]
                                        "
                                    >
                                        ♥
                                    </span>
                                </span>


                                <span
                                    className="
                                        text-[10px]
                                        font-medium

                                        tracking-[0.06em]

                                        text-[#587589]/70
                                    "
                                >
                                    {message.length}/500
                                </span>

                            </div>

                        </Field>


                        {/* =================================================
                            SUBMIT BUTTON
                        ================================================= */}

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

                                bg-[#31566B]

                                px-7
                                py-4

                                text-[10px]
                                font-medium

                                uppercase

                                tracking-[0.19em]

                                text-white

                                shadow-[0_14px_38px_rgba(49,86,107,0.18)]

                                transition-all
                                duration-300

                                hover:-translate-y-0.5

                                hover:bg-[#587589]

                                hover:shadow-[0_18px_45px_rgba(49,86,107,0.22)]

                                disabled:cursor-wait
                                disabled:opacity-60

                                sm:text-[11px]
                            "
                        >

                            <span
                                className="
                                    text-[11px]

                                    text-[#F1C5CB]

                                    transition-transform
                                    duration-300

                                    group-hover:scale-125
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


                        {/* =================================================
                            STATUS
                        ================================================= */}

                        {
                            status.text && (

                                <div
                                    className={`
                                        mt-5

                                        rounded-2xl

                                        border

                                        px-4
                                        py-3.5

                                        text-center

                                        font-wedding-serif

                                        text-[14px]

                                        leading-6

                                        sm:text-[15px]

                                        ${
                                            status.type ===
                                            "success"

                                                ? `
                                                    border-[#8EA995]/30

                                                    bg-[#F0F6F0]/85

                                                    text-[#53705B]
                                                  `

                                                : `
                                                    border-[#D9A29A]/30

                                                    bg-[#FFF1EF]/85

                                                    text-[#985950]
                                                  `
                                        }
                                    `}
                                >
                                    {
                                        status.text
                                    }
                                </div>

                            )
                        }

                    </div>

                </form>

            </div>

        </section>

    );
}


/* =========================================================
   FIELD COMPONENT
========================================================= */

function Field({
    label,
    optional = false,
    children,
}: {
    label:
        string;

    optional?:
        boolean;

    children:
        ReactNode;
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

                    gap-4

                    text-[10px]
                    font-medium

                    uppercase

                    tracking-[0.18em]

                    text-[#587589]

                    sm:text-[11px]
                "
            >

                <span>
                    {
                        label
                    }
                </span>


                {
                    optional && (

                        <span
                            className="
                                font-wedding-serif

                                text-[11px]
                                font-normal

                                normal-case

                                tracking-normal

                                text-[#61726D]/55
                            "
                        >
                            Không bắt buộc
                        </span>

                    )
                }

            </label>


            {
                children
            }

        </div>

    );
}