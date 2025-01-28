'use client';

import { Box, Button, Chip, Divider, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import { ArrowBack, Share, FavoriteBorder, LocalActivity, Add, Remove, Inventory, LocalShipping } from "@mui/icons-material";

const MainProduct = () => {
    const [product, setProduct] = useState<any>(null);
    const [quantity, setQuantity] = useState<number>(1);
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
        <Grid container size={12}>
            <Grid spacing={1} padding={2} alignItems="center" sx={customBoxMain} container size={12}>
                <Grid alignItems="center" container size={12}>

                    <Grid container size={12}>
                        <Grid alignItems="left" size={4}>
                            <IconButton>
                                <ArrowBack />
                            </IconButton>
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
                            <Typography fontWeight="bold" align="center">NAME</Typography>
                        </Grid>
                        <Grid textAlign="right" size={4}>
                            <IconButton>
                                <Share />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Grid size={12}>
                        <Box component="img" width="100%" borderRadius={2} src="https://http2.mlstatic.com/D_NQ_NP_734313-MLA52042255660_102022-O.webp" />
                    </Grid>

                    <Grid container size={12}>
                        <Grid container size={12}>
                            <Grid spacing={1} container display="flex" justifyContent="left" alignItems="center" size={10}>
                                <Grid>
                                    <Chip label="5" icon={<Inventory color="secondary" />}></Chip>
                                </Grid>
                                <Grid>
                                    <Chip label="4.5 ( 3242 Reviews )" icon={<LocalActivity color="primary" />}></Chip>
                                </Grid>
                            </Grid>
                            <Grid container size={2}>
                                <IconButton>
                                    <FavoriteBorder />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container size={12}>
                        <Grid size={12}>
                            <Typography variant="h5" fontWeight="bold" align="left">Description</Typography>
                            <Typography variant="body2" color="text.secondary" align="left">Eu sou uma descrição gerada por Inteligência Artificial, criada para fornecer exemplos, explicações ou respostas de forma clara e objetiva. Meu objetivo é ajudar você com informações precisas e úteis em diversas áreas, desde programação até temas gerais.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ marginY: 2 }} />

                    {/* <Grid container size={12}>
                    CATEGORIAS
                </Grid > */}

                    <Grid container size={12} display="flex" alignItems="center">
                        <Grid container size={4}><Typography fontWeight="bold" variant="h5">Quantity</Typography></Grid>
                        <Grid container size={8} justifyContent="flex-end">
                            <Button onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : 0; }} variant="outlined" size="small"><Remove /></Button>
                            <Typography alignContent="center" fontWeight="bold">{quantity}</Typography>
                            <Button onClick={() => { setQuantity(quantity + 1) }} variant="outlined" size="small"><Add /></Button>
                        </Grid>
                    </Grid >

                    <Divider sx={{ marginY: 1 }} />

                    <Grid container alignItems="flex-end" size={12}>
                        <Grid container justifyContent="flex-start" size={4}>
                            <Chip label="R$:20,00"></Chip>
                        </Grid>
                        <Grid container justifyContent="flex-start" size={3}>
                            <Typography fontWeight="bold" variant="caption" color="textDisabled" sx={{ textDecoration: "line-through" }}>R$:44,99</Typography>
                        </Grid>

                        <Grid container justifyContent="flex-end" size={2}>
                            <LocalShipping />
                        </Grid>
                        <Grid container justifyContent="flex-end" size={3}>
                            <Typography fontWeight="bold" color="primary">R$:00,00</Typography>
                        </Grid>
                    </Grid>

                </Grid >
            </Grid>
            <Grid container size={12}>
                <Button sx={{ fontWeight: 'bold' }} variant="contained" fullWidth size="large">Add Cart</Button>
            </Grid>
        </Grid>
    );
}

export default MainProduct;