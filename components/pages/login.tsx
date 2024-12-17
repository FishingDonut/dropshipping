import { Button, Box, Typography } from "@mui/material";
import Input from "../layouts/Input/Input";

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
        // start box main
        <Box sx={customBoxMain}>

            {/* Start Title */}
            <Box sx={customBoxInput}>
                <Typography variant="h4">Create an account</Typography>
                <Typography variant="subtitle1">Lets create your account</Typography>
            </Box>
            {/* End Title */}

            {/* Start input fullName */}
            <Box sx={customBoxInput}>
                <Input name="fullName" placeholder="Write your name" label="Full Name"></Input>
            </Box>
            {/* End input fullName */}

            {/* Start input email */}
            <Box sx={customBoxInput}>
                <Input name="email" type="email" placeholder="Write your email" label="Email"></Input>
            </Box>
            {/* End input email */}

            {/* Start input password */}
            <Box sx={customBoxInput}>
                <Input name="password" type="password" placeholder="********" label="Password"></Input>
            </Box>
            {/* End input password */}

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
        </Box>
        // end box main
    )
}