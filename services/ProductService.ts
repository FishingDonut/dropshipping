import { Prisma } from '@prisma/client';
import { prisma } from './PristmaClientService';

export default async function ProductService(data: Prisma.ProductCreateInput | null) {
    try {
        const product: Prisma.ProductCreateInput | null = await prisma.product.findUnique({
            where: {
                name: data.name,
                Category: {
                    C 
                }
            }
        });

        if (product) {
            throw "Product already exists";
        }

        const newProduct = await prisma.product.create({
            data: data
        });
        
        return newProduct;
    } catch (error) {
        throw error;
    }
}
