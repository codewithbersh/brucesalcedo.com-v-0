import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConfirmationEmailProps {
  nickname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ConfirmationEmail = ({ nickname }: ConfirmationEmailProps) => {
  const previewText = `Hey, ${nickname}, Thanks for reaching out.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thank you for reaching out!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello, {nickname}.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <Link
                href="https://brucesalcedo.com"
                className="text-blue-600 no-underline"
              >
                Bruce Salcedo
              </Link>{" "}
              has received your message.
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              You will receive a response shortly. Meanwhile, you can visit my
              website.
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href="https://brucesalcedo.com"
              >
                Visit Website
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationEmail;
