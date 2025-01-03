import { GET as GetAll, POST as Create } from '@/controllers/Product/ProductControllers';
import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

const handler = async (req: NextRequest, res: NextApiResponse) => {
    try {
        const methods = {
            GET: GetAll,
            POST: Create
        };

        const method = methods[req.method as keyof typeof methods];

        if (method) {
            return method(req);
        }

        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    } catch (error) {
        return new Response(JSON.stringify({ message: error }), { status: 400 });
    }
}

export const GET = async (req: NextRequest, res: NextApiResponse) => { return handler(req, res) }
export const POST = async (req: NextRequest, res: NextApiResponse) => { return handler(req, res) }