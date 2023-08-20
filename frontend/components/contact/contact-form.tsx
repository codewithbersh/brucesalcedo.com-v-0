"use client";

import { useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";

import { cn, titleCase } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type FormType = z.infer<typeof contactFormSchema>;

type Props = {};

const ContactForm = ({}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      nickname: "",
      message: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: FormType) {
    setIsLoading(true);
    const formattedValues = {
      ...values,
      nickname: titleCase(values.nickname),
    };

    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formattedValues),
    });

    if (res.status === 200) {
      setIsLoading(false);
      toast({
        title: "Message sent",
        description:
          "Thanks for reaching out. You will receive a confirmation email.",
      });
      form.reset();
    } else {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "An error has occurred. Please try again later.",
      });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[530px]"
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
        <Button type="submit" className="flex gap-2" disabled={isLoading}>
          <Loader2
            className={cn(
              "w-[14px] h-[14px] animate-spin",
              isLoading ? "inline" : "hidden"
            )}
          />
          {isLoading ? "Sending" : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};

export { ContactForm };
