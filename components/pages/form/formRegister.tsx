"use client";

import { Button, Box, Typography } from "@mui/material";
import Input from "@/components/layouts/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "./registerSchema";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MessageErrorContext } from "@/context/auth/MessageErrorContext";


export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    });
    
    const router = useRouter();
    const {setMessageError} = useContext(MessageErrorContext);
    
    const handleRegisterFormSuccess = async (data: RegisterSchema) => {
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            
            if(!response.ok){
                const erroData = await response.json();
                setMessageError(erroData?.message || "Failed to register user");
            }

            if(response.status == 201){
                setMessageError("");
                router.push('/login');
            }
        } catch (error) {
          console.log(error);  
        }
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
        <form onSubmit={handleSubmit(handleRegisterFormSuccess)}>
            {/* Start input fullName */}
            <Box sx={customBoxInput}>
                <Input {...register('fullName')} name="fullName" placeholder="Write your name" label="Full Name" mensageError={errors.fullName?.message}></Input>
            </Box>
            {/* End input fullName */}

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
            
            {/* Start input passwordConfirm */}
            <Box sx={customBoxInput}>
                <Input {...register('passwordConfirm')} name="passwordConfirm" type="password" placeholder="********" label="Password Confirm" mensageError={errors.passwordConfirm?.message}></Input>
            </Box>
            {/* End input passwordConfirm */}

            {/* Start Terms */}
            <Box sx={customBoxTems}>
                <Typography color="gray" variant="subtitle1">By signing up you agree to our <Typography component={Link} href="/terms" color="white" style={{ textDecoration: 'underline' }}>Terms</Typography>, <Typography component={Link} href="/privacy-policy" color="white" style={{ textDecoration: 'underline' }}>Privacy Policy</Typography>, and <Typography component={Link} href="/cookie-policy" color="white" style={{ textDecoration: 'underline' }}>Cookie Use</Typography></Typography>
            </Box>
            {/* End Terms */}

            {/* Start Button */}
            <Box sx={customBoxButton}>
                <Button color="secondary" sx={{ borderRadius: "5px" }} type="submit" variant="contained">Create an Account</Button>
            </Box>
            {/* End Button */}
        </form>
    );
}