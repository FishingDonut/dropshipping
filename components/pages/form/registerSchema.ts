import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(4, "Minimo 4 caracteres."),
    email: z.string().email("Tem que ser um email."),
    password: z.string().min(8, "Minimo 8 caracteres."),
    passwordConfirm: z.string().min(8, "Minimo 8 caracteres.")
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: "As senhas não coincidem."
});

export type RegisterSchema = z.infer<typeof registerSchema>