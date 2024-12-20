import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(4, "Minimum 4 characters."),
    email: z.string().email("Must be a valid email."),
    password: z.string().min(8, "Minimum 8 characters."),
    passwordConfirm: z.string().min(8, "Minimum 8 characters.")
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: "Passwords do not match."
});

export type RegisterSchema = z.infer<typeof registerSchema>;
