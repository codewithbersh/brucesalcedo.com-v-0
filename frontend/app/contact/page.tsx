import { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <PageWrapper className="gap-y-12 sm:gap-y-12">
      <section className="col-span-full md:col-span-6 space-y-4 md:pr-12">
        <h1 className="font-bold">Let&apos;s connect</h1>
        <p className="max-w-prose">
          If you&apos;re looking for a developer for your next project or you
          simply want to have a chat about website development, feel free to
          reach out.
          <br />
          <br />
          <span className="italic">
            Available for full-time work and freelance.
          </span>
        </p>
      </section>
      <section className="col-span-full md:col-span-6">
        <ContactForm />
      </section>
    </PageWrapper>
  );
};

export default ContactPage;
