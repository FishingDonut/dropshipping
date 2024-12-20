import { NextRequest } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/services/PristmaClientService";
import jwt from 'jsonwebtoken';

const JWT_SECRET = '1234';

interface ILoginData {
    email: string,
    password: string
};

export async function loginApi(request: NextRequest){
    const body: ILoginData = await request.json()

    const { email, password } = body;

    const loginUser: Prisma.UsersCreateInput | null = await prisma.users.findUnique({
        where: {
            email: email
        }
    });

    if(!loginUser){
        return new Response("User not found", { status: 400 });
    }

    if(loginUser.password != password){
        return new Response("Wrong password", { status: 400 })
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

    return new Response(token, { status: 200, headers: { 'Content-Type': 'application/json' }});
} 