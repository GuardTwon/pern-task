import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name not is a text type",
    })
    .min(1)
    .max(255),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "email is not a text type",
    })
    .email({
      required_error: "Email in not valid",
    }),

  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is not a type text",
    })
    .min(6)
    .max(255),
});

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "email is not a text type",
    })
    .email({
      message: "Email in not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is not a type text",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .max(255, {
      message: "Password must be at least 255 characters",
    }),
});
