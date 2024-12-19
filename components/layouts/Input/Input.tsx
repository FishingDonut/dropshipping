import { Input as InputMui, FormControl, FormHelperText, InputLabel } from "@mui/material";
interface InputProps {
    name: string,
    placeholder: string,
    label: string,
    type?: string,
    mensageError?: string | undefined
}

export default function Input({name, placeholder = "", label = "", type = "text", mensageError="", ...res }: InputProps) {

  return (
    <FormControl error={mensageError ? true : false} variant="standard">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <InputMui id={name} name={name} placeholder={placeholder} error={mensageError ? true : false } type={type} {...res} autoComplete="off"></InputMui>
            {mensageError && <FormHelperText id={name + "-error"}>{mensageError}</FormHelperText>}
    </FormControl>
  );
}