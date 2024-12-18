"use client";

import { Button, Box, Typography } from "@mui/material";
import Input from "@/components/layouts/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, RegisterSchema } from "./registerSchema";
import { handleRegisterFormSuccess, handleFormErrors } from "./handleRegisterForm";

export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema)
    });

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
        <form onSubmit={handleSubmit(handleRegisterFormSuccess, handleFormErrors)}>
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
                <Typography variant="subtitle1">By signing up you agree to our <span style={{ textDecoration: 'underline' }}>Terms</span>, <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>, and <span style={{ textDecoration: 'underline' }}>Cookie Use</span></Typography>
            </Box>
            {/* End Terms */}

            {/* Start Button */}
            <Box sx={customBoxButton}>
                <Button sx={{ color: "white", backgroundColor: "gray", borderRadius: "5px" }} type="submit" variant="contained">Create an Account</Button>
            </Box>
            {/* End Button */}
        </form>
    );
}