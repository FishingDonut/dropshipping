import { RegisterSchema } from "./registerSchema";
import { FieldErrors } from "react-hook-form";

export const handleRegisterFormSuccess = async (data: RegisterSchema) => {
    try {
        const response = await fetch("/api/createUser", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        console.log(response.json());
    } catch (error) {
      console.log(error);  
    }
}

export const handleFormErrors = (errors: FieldErrors<RegisterSchema>) => {
    console.error(errors);
}