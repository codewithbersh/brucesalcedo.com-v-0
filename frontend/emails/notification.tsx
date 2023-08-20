import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConfirmationEmailProps {
  nickname: string;
  email: string;
  message: string;
}

export const NotificationEmail = ({
  nickname,
  email,
  message,
}: ConfirmationEmailProps) => {
  const previewText = `${nickname} has sent you a message.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              New message from {nickname}.
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {nickname} has sent you a message from {email}.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {nickname} said:
              <br />
              <span className="italic text-slate-700">{message}</span>
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              This message was sent from your portfolio website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NotificationEmail;
