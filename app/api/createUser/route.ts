import { NextResponse, type NextRequest } from 'next/server'
import CreateUsersService from '@/services/CreateUsersService';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        console.log(body);

        const { fullName, email, password } = body;

        if (!fullName || !email || !password){
            return  NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        console.log(fullName, email, password);

        const newUser = await CreateUsersService(body);
        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 500 });
    }
}