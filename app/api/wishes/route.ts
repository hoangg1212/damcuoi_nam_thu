import { Resend } from "resend";


function escapeHtml(
    value:
        string
) {

    return value
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


export async function POST(
    request:
        Request
) {

    try {

        const body =
            await request.json();


        const guestName =
            typeof body.guestName ===
            "string"
                ? body.guestName.trim()
                : "";


        const relation =
            typeof body.relation ===
            "string"
                ? body.relation.trim()
                : "";


        const email =
            typeof body.email ===
            "string"
                ? body.email.trim()
                : "";


        const message =
            typeof body.message ===
            "string"
                ? body.message.trim()
                : "";


        const website =
            typeof body.website ===
            "string"
                ? body.website.trim()
                : "";


        /* =========================
           HONEYPOT
        ========================= */

        if (website) {

            return Response.json({
                success:
                    true,
            });
        }


        /* =========================
           VALIDATE
        ========================= */

        if (
            !guestName ||
            !message
        ) {

            return Response.json(
                {
                    message:
                        "Vui lòng nhập tên và lời chúc.",
                },
                {
                    status:
                        400,
                }
            );
        }


        if (
            guestName.length >
            100
        ) {

            return Response.json(
                {
                    message:
                        "Tên quá dài.",
                },
                {
                    status:
                        400,
                }
            );
        }


        if (
            message.length >
            500
        ) {

            return Response.json(
                {
                    message:
                        "Lời chúc tối đa 500 ký tự.",
                },
                {
                    status:
                        400,
                }
            );
        }


        /* =========================
           ENV
        ========================= */

        const apiKey =
            process.env
                .RESEND_API_KEY;


        const toEmail =
            process.env
                .WEDDING_WISH_TO;


        const fromEmail =
            process.env
                .RESEND_FROM;


        if (
            !apiKey ||
            !toEmail ||
            !fromEmail
        ) {

            console.error(
                "Thiếu biến môi trường email."
            );


            return Response.json(
                {
                    message:
                        "Hệ thống email chưa được cấu hình.",
                },
                {
                    status:
                        503,
                }
            );
        }


        const resend =
            new Resend(
                apiKey
            );


        /* =========================
           SEND
        ========================= */

        const result =
            await resend
                .emails
                .send({
                    from:
                        fromEmail,

                    to: [
                        toEmail,
                    ],

                    subject:
                        `💌 Lời chúc mới từ ${guestName}`,

                    html:
`
<div style="
    max-width:650px;
    margin:auto;
    font-family:Arial,sans-serif;
    color:#292622;
    line-height:1.7;
">

    <h1 style="
        font-size:26px;
        font-weight:500;
    ">
        💌 Có một lời chúc mới dành cho Nam & Thư
    </h1>

    <hr style="
        border:none;
        border-top:1px solid #ded0bd;
        margin:25px 0;
    ">

    <p>
        <strong>Người gửi:</strong>
        ${escapeHtml(guestName)}
    </p>

    <p>
        <strong>Mối quan hệ:</strong>
        ${escapeHtml(relation)}
    </p>

    <p>
        <strong>Email:</strong>
        ${email
            ? escapeHtml(email)
            : "Không cung cấp"}
    </p>

    <div style="
        margin-top:25px;
        padding:25px;
        background:#f9f7f3;
        border-left:3px solid #b49a78;
    ">

        ${escapeHtml(message)
            .replace(
                /\n/g,
                "<br>"
            )}

    </div>

    <p style="
        margin-top:30px;
        color:#746e67;
        font-size:13px;
    ">
        Lời chúc được gửi từ website cưới
        Nguyễn Nam & Huỳnh Thư ♥
    </p>

</div>
`,
                });


        if (
            result.error
        ) {

            console.error(
                result.error
            );


            return Response.json(
                {
                    message:
                        "Không thể gửi lời chúc. Vui lòng thử lại.",
                },
                {
                    status:
                        500,
                }
            );
        }


        return Response.json({
            success:
                true,
        });


    } catch (
        error
    ) {

        console.error(
            error
        );


        return Response.json(
            {
                message:
                    "Có lỗi xảy ra khi gửi lời chúc.",
            },
            {
                status:
                    500,
            }
        );

    }
}