'use client';

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MainProduct = () => {
    const [product, setProduct] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProductById = async (id: number) => {
            try {
                const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}product/${id}`);
                if (!request || !request.ok) {
                    router.push('/');
                    return;
                }

                const data = await request.json();
                setProduct(data);
                return;
            } catch (error) {
                console.error("Erro na requisição:", error);
                router.push('/');
            }
        }
        fetchProductById(1);
    }, []);

    return (
        <Box display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={2}
            sx={{
                width: '100vw',
                height: '100vh',
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}>
            {product ? (<>ok</>) : (<>not</>)}
        </Box>
    );
}

export default MainProduct;