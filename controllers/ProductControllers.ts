import { NextRequest } from "next/server";
import { z } from "zod";

const postSchema = z.object({
    name: z.string()
})

type PostRequestBody = z.infer<typeof postSchema>;

export const POST = async (req: NextRequest) => {
    const data: PostRequestBody | null = postSchema.parse(await req.json());

    if (data) {
        return new Response(JSON.stringify({
            success: true,
            message: "Test ok",
            data: data
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