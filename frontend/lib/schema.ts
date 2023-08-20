import * as z from "zod";

export const contactFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .nonempty("Email is required.")
    .email("Enter a valid email."),
  nickname: z
    .string({ required_error: "Nickname is required." })
    .min(2, "Nickname should be at least 2 letters.")
    .max(16, "Nickname should not exceed 16 letters.")
    .regex(/^[a-zA-Z]+$/, "Nickname should only contain letters."),
  message: z
    .string({ required_error: "Message is required." })
    .min(4, "Message should be at least 4 characters.")
    .max(1024, "Message should not exceed 1024 characters."),
});
