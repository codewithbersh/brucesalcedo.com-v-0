"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { titleCase } from "@/lib/utils";

type FormType = z.infer<typeof contactFormSchema>;

type Props = {};

const ContactForm = ({}: Props) => {
  const form = useForm<FormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      nickname: "",
      message: "",
    },
    mode: "onChange",
  });

  function onSubmit(values: FormType) {
    const formattedValues = {
      ...values,
      nickname: titleCase(values.nickname),
    };

    console.log(formattedValues);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[530px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Where can I contact you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input placeholder="What should I call you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What do you want to talk about?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
};

export { ContactForm };
