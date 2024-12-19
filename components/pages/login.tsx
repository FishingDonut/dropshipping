import { Box, Typography } from "@mui/material";
import FormRegister from "./form/formRegister";

export default function Login() {
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
        // start box main
        <Box sx={customBoxMain}>

            {/* Start Title */}
            <Box sx={customBoxInput}>
                <Typography variant="h4">Create an account</Typography>
                <Typography variant="subtitle1">Lets create your account</Typography>
            </Box>
            {/* End Title */}

            {/* Start Form */}
            <FormRegister></FormRegister>
            {/* End Form */}

        </Box>
        // end box main
    )
}