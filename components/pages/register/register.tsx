import { Box, Typography } from "@mui/material";
import FormRegister from "./form/formRegister";
import { Error } from "../../layouts/error/error";
import { MessageErrorProvider } from "@/context/auth/MessageErrorContext";

export default function Register() {
    const margin = 16;

    const customBoxMain = {
        position: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    const customBoxInput = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <MessageErrorProvider>
            {/* start box main */}
            <Box sx={customBoxMain}>

                {/* Start Error */}
                <Error />
                {/* End Error */}

                {/* Start Title */}
                <Box sx={customBoxInput}>
                    <Typography color="primary" variant="h4">Create an account</Typography>
                    <Typography color="gray" variant="subtitle1">Lets create your account</Typography>
                </Box>
                {/* End Title */}

                {/* Start Form */}
                <FormRegister />
                {/* End Form */}

            </Box>
            {/* end box main */}
        </MessageErrorProvider>
    )
}