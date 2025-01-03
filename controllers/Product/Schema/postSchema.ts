import { z } from "zod";

export const postSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    price_multiplier: z.number(),
})