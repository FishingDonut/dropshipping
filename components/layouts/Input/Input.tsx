import { Input as InputMui, FormControl, FormHelperText, InputLabel } from "@mui/material";
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
    <FormControl error={mensageError ? true : false} variant="standard">
            <InputLabel htmlFor={name} sx={{ color: "white" }}>{label}</InputLabel>
            <InputMui id={name} name={name} sx={customInput} placeholder={placeholder} error={mensageError ? true : false } type={type} {...res} autoComplete="off"></InputMui>
            {mensageError && <FormHelperText id={name + "-error"}>{mensageError}</FormHelperText>}
    </FormControl>
  );
}