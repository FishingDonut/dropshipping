import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/services/PristmaClientService";

interface ILoginData {
    email: string,
    password: string
};

export async function POST(request: NextRequest){
    const body: ILoginData = await request.json()

    const { email, password } = body;
    
    const loginUser: Prisma.UsersCreateInput | null = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    if (!loginUser) {
        return new Response(JSON.stringify({ error: "authentication error" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    if (loginUser.password !== password) {
        return new Response(JSON.stringify({ error: "authentication error" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
    
    return new Response(JSON.stringify(loginUser), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });    
} 