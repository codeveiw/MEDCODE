
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    phone: z.string().trim().min(7).max(20),
    service: z.string().min(1).max(100),
    message: z.string().trim().min(10).max(5000),
});

export async function POST(request: Request) {
    try {
        // Check API key only when a request arrives
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");

            return NextResponse.json(
                { message: "Email service is not configured." },
                { status: 500 }
            );
        }

        // Create Resend lazily, not during the build
        const resend = new Resend(apiKey);

        const body: unknown = await request.json();
        const validation = contactSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                {
                    message: "Please check the submitted information.",
                    errors: validation.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, email, phone, service, message } =
            validation.data;

        const { data, error } = await resend.emails.send({
            from: "MedCode <onboarding@resend.dev>",
            to: ["codeview1976@gmail.com"],
            replyTo: email,
            subject: `New MedCode Inquiry - ${service}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Message:
${message}
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { message: "Unable to send your message." },
                { status: 502 }
            );
        }

        return NextResponse.json(
            {
                message: "Your message has been sent successfully.",
                id: data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { message: "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
