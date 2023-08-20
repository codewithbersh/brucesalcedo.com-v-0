import ConfirmationEmail from "@/emails/confirmation";
import NotificationEmail from "@/emails/notification";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: NextApiResponse) {
  try {
    const { nickname, email, message } = await request.json();
    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Bruce Salcedo | Thanks for reaching out",
      react: ConfirmationEmail({ nickname }),
    });

    await resend.sendEmail({
      from: "onboarding@resend.dev",
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
