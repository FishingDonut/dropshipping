'use client';

import { Box, Card, CardContent, CardMedia, Paper, styled, Typography } from "@mui/material";
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

    const customBoxTems = {
        marginBottom: 16 + 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '270px'
    };

    const customBoxMain = {
        position: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    return (
        <Box sx={customBoxMain}>
            <Grid alignItems="center" sx={customBoxTems} container size={12}>
                <Grid alignItems="center" container size={12}>
                    <Grid size={12}>
                        <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://i.pcmag.com/imagery/articles/04xZdVnmvtaW72AkAZtYaBK-1.fit_lim.size_850x490.v1602461775.png"
                                alt="okok"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Produto
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    e isso isso isso.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid container size={12}>
                        <Grid size={6}><Item>2</Item></Grid>
                        <Grid size={6}><Item>3</Item></Grid>
                    </Grid>

                </Grid >
            </Grid>
        </Box>
    );
}

export default MainProduct;