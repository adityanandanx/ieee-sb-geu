"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import {
  LoginSchema,
  RegisterSchema,
  loginSchema,
  registerSchema,
} from "./form-schema";
import { ZodError } from "zod";

export async function login(data: LoginSchema) {
  const validatedFields = await loginSchema.safeParseAsync(data);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0].message,
    };
  }

  const supabase = createClient();
  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return {
      error: error.message,
    };
  }
  revalidatePath("/", "layout");
  return { success: user };
  // redirect("/");
}

export async function register(data: RegisterSchema) {
  const supabase = createClient();
  const validatedFields = await registerSchema.safeParseAsync(data);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.issues[0].message,
    };
  }

  const {
    error,
    data: { user },
  } = await supabase.auth.signUp(data);
  if (error) {
    return {
      error: error.message,
    };
  }

  revalidatePath("/", "layout");
  return { success: user };
}
