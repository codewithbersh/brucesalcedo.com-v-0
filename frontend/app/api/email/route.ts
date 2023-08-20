import { Resend } from "resend";
import { NextResponse } from "next/server";

import ConfirmationEmail from "@/emails/confirmation";
import NotificationEmail from "@/emails/notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nickname, email, message } = await request.json();
    await resend.sendEmail({
      from: "hello@brucesalcedo.com",
      to: email,
      subject: "Bruce Salcedo | Thanks for reaching out",
      react: ConfirmationEmail({ nickname }),
    });

    await resend.sendEmail({
      from: "hello@brucesalcedo.com",
      to: "brucesalcedo.programming@gmail.com",
      subject: "Bruce Salcedo | Someone sent you a message",
      react: NotificationEmail({ nickname, email, message }),
    });

    return NextResponse.json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: error,
    });
  }
}
