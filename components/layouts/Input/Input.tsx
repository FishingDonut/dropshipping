import { FormLabel, Input as InputMui, Typography } from "@mui/material";

interface InputProps {
    name: string,
    placeholder: string,
    label: string,
    type?: string,
    mensageError?: string | undefined
}

export default function Input({name, placeholder = "", label = "", type = "text", mensageError="", ...res }: InputProps) {

    const customInput = {
        color: "white",
        "&::before": { borderBottom: "0 solid rgba(0,0,0,0)" },
        "&:hover": { borderBottom: "2px solid #707070" },
        "&::after": { borderBottom: "2px solid #ffff" },
    }

    return (
        <>
            <FormLabel htmlFor={name} sx={{ color: "white" }}>{label}</FormLabel>
            <InputMui id={name} name={name} sx={customInput} placeholder={placeholder} type={type} {...res} autoComplete="off"></InputMui>
            <Typography sx={{color: "red"}} variant="subtitle1">{mensageError}</Typography>
        </>
    );
}