import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be of atleast 8 characters"),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be of atleast 8 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
