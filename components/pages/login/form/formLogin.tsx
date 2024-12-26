"use client";

import { Button, Box, Typography } from "@mui/material";
import Input from "@/components/layouts/Input/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function FormLogin() {
    const loginSchema = z.object({
        email: z.string().email("Tem que ser um email."),
        password: z.string().min(8, "Minimo 8 caracteres."),
    });

    type LoginSchema = z.infer<typeof loginSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    const handleLoginFormSuccess = async (data: LoginSchema) => {
        const { email, password } = data;
    
        const result = await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/dashboard",
        });
    
        console.log(result);
        alert(result?.ok);
        
        if (!result?.ok) {
          alert("Falha no login. Verifique suas credenciais.");
        } else {
            alert("OXI?")
        }
      };

    const handleFormErrors = (errors: FieldErrors<LoginSchema>) => {
        console.error('Esta dando erro aqui');
        console.error(errors);
    }

    const margin = 16;

    const customBoxInput = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
    };

    const customBoxTems = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '270px'
    };

    const customBoxButton = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <form onSubmit={handleSubmit(handleLoginFormSuccess, handleFormErrors)}>
            {/* Start input email */}
            <Box sx={customBoxInput}>
                <Input {...register('email')} name="email" type="email" placeholder="Write your email" label="Email" mensageError={errors.email?.message}></Input>
            </Box>
            {/* End input email */}

            {/* Start input password */}
            <Box sx={customBoxInput}>
                <Input {...register('password')} name="password" type="password" placeholder="********" label="Password" mensageError={errors.password?.message}></Input>
            </Box>
            {/* End input password */}

            {/* Start Terms */}
            <Box sx={customBoxTems}>
                <Typography variant="subtitle1">By signing up you agree to our <span style={{ textDecoration: 'underline' }}>Terms</span>, <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>, and <span style={{ textDecoration: 'underline' }}>Cookie Use</span></Typography>
            </Box>
            {/* End Terms */}

            {/* Start Button */}
            <Box sx={customBoxButton}>
                <Button color="secondary" sx={{ borderRadius: "5px" }} type="submit" variant="contained">Login your Account</Button>
            </Box>
            {/* End Button */}
        </form>
    );
}