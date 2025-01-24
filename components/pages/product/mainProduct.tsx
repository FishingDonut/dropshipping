'use client';

import { Box, Card, CardContent, CardMedia, Paper, styled, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import Link from "next/link";

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

    const customBoxMain = {
        marginBottom: 0 + 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <Grid alignItems="center" sx={customBoxMain} container size={12}>
            <Grid alignItems="center" container size={12}>

                <Grid container size={12}>
                    <Grid alignItems="left" size={4}>
                        <Typography align="left">BACK</Typography>
                    </Grid>
                    <Grid alignItems="center" size={4}>
                        <Typography align="center">NAME</Typography>
                    </Grid>
                    <Grid alignItems="right" size={4}>
                        <Typography align="right">SHARE</Typography>
                    </Grid>
                </Grid>

                <Grid size={12}>
                    <img width="5000px" src="https://http2.mlstatic.com/D_NQ_NP_734313-MLA52042255660_102022-O.webp" />
                </Grid>

                <Grid container size={12}>
                    <Grid container size={10}>
                        <Typography align="left">FULLNAME</Typography>
                    </Grid>
                    <Grid container size={2}>
                        <Typography align="right">SHARE</Typography>
                    </Grid>
                    <Grid container size={6}>
                        <Typography align="right">Desconto</Typography>
                    </Grid>
                    <Grid container size={6}>
                        <Typography align="right">review</Typography>
                    </Grid>
                </Grid>

                <Grid container size={12}>
                    <Grid size={12}>
                        <Typography variant="h6" align="left">Description</Typography>
                        <Typography variant="subtitle2" align="left">Eu sou uma descrição gerada por Inteligência Artificial, criada para fornecer exemplos, explicações ou respostas de forma clara e objetiva. Meu objetivo é ajudar você com informações precisas e úteis em diversas áreas, desde programação até temas gerais.</Typography>
                    </Grid>
                </Grid>

                <Grid container size={12}>
                    CATEGORIAS
                </Grid >

                <Grid container size={12}>
                    Quantity
                </Grid >
            </Grid >
        </Grid>
    );
}

export default MainProduct;