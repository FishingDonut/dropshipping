'use client';

import { Box, Paper, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';

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
        // fetchProductById(1);
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));


    return (
        <>
            <Grid alignItems="center" container size={12}>
                <Grid size={12}>
                    <Item>1</Item>
                </Grid>

                <Grid container size={12}>
                    <Grid size={6}><Item>2</Item></Grid>
                    <Grid size={6}><Item>3</Item></Grid>
                </Grid>

            </Grid >
        </>
    );
}

export default MainProduct;