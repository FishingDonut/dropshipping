import ProductService from "@/services/ProductService";
import { NextRequest } from "next/server";
import { postSchema } from "./Schema/postSchema";
import { z } from "zod";

type PostRequestBody = z.infer<typeof postSchema>;

export const POST = async (req: NextRequest) => {
    const data: PostRequestBody | null = postSchema.parse(await req.json());

    if (data) {
        const response = ProductService(data);

        return new Response(JSON.stringify({
            success: true,
            message: "Test ok",
            data: response
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({
        success: false,
        message: "The response cannot be empty"
    }), {
        status: 400,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const GET = async (req: NextRequest) => {
    const data: PostRequestBody | null = postSchema.parse(await req.json());

    if (!data) {
        return
    }

    return new Response(JSON.stringify({
        success: false,
        message: "The response cannot be empty"
    }), {
        status: 400,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}