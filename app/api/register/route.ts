import { NextResponse, type NextRequest } from 'next/server'
import CreateUsersService from '@/services/CreateUsersService';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { fullName, email, password } = body;

        if (!fullName || !email || !password){
            return  NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const newUser = await CreateUsersService({fullName: fullName, email: email, password: password});

        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 400 });
    }
}