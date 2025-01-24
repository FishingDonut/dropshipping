'use client';

import {
  Box,
  Button,
  Typography,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { ArrowBack, Share } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MainProduct = () => {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProductById = async (id: number) => {
      try {
        const request = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}product/${id}`
        );
        if (!request || !request.ok) {
          router.push("/");
          return;
        }

        const data = await request.json();
        setProduct(data);
        return;
      } catch (error) {
        console.error("Erro na requisição:", error);
        router.push("/");
      }
    };
    // fetchProductById(1);
  }, []);

  return (
    <Grid container spacing={2} sx={{ maxWidth: "600px", margin: "0 auto", padding: 2 }}>
      {/* Header */}
      <Grid container alignItems="center" justifyContent="space-between">
        <IconButton>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" textAlign="center" flexGrow={1}>
          Blend Bomber Jacket
        </Typography>
        <IconButton>
          <Share />
        </IconButton>
      </Grid>

      {/* Main Image */}
      <Grid size={12}>
        <Box
          component="img"
          src="https://http2.mlstatic.com/D_NQ_NP_734313-MLA52042255660_102022-O.webp"
          alt="Product Image"
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </Grid>

      {/* Reviews and Info */}
      <Grid size={12} container alignItems="center" spacing={1}>
        <Grid>
          <Chip label="745 Sold" size="small" />
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">
            ⭐ 4.7 (3242 Reviews)
          </Typography>
        </Grid>
      </Grid>

      {/* Description */}
      <Grid size={12}>
        <Typography variant="h6">Description</Typography>
        <Typography variant="body2" color="text.secondary">
          This tropical house plant is a structural sensation within your home
          or office decor. Its variegated leaves show off dark green to lighter
          greenish-gray horizontal bands with light yellow margins.
        </Typography>
      </Grid>

      <Divider sx={{ marginY: 2 }} />

      {/* Select Size */}
      <Grid size={12}>
        <Typography variant="subtitle1">Select Size</Typography>
        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <Grid key={size}>
              <Button variant="outlined" size="small">
                {size}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Select Color */}
      <Grid size={12}>
        <Typography variant="subtitle1">Color</Typography>
        <Grid container spacing={1} sx={{ marginTop: 1 }}>
          {["#f00", "#0f0", "#00f", "#ff0", "#000"].map((color) => (
            <Box
              key={color}
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: color,
                border: "2px solid #fff",
                boxShadow: 1,
                cursor: "pointer",
              }}
            />
          ))}
        </Grid>
      </Grid>

      {/* Quantity */}
      <Grid size={12} container alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1">Quantity</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button variant="outlined" size="small">
            -
          </Button>
          <Typography>1</Typography>
          <Button variant="outlined" size="small">
            +
          </Button>
        </Box>
      </Grid>

      {/* Price and Add to Cart */}
      <Grid size={12} container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="primary">
          $20.00
        </Typography>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default MainProduct;
