import { Box, Typography, FormLabel, Input } from "@mui/material";
import Button from "@mui/material/Button";

export default function Login() {
    const margin = 16;

    const customInput = {
        color: "white",
        "&::before": { borderBottom: "0 solid rgba(0,0,0,0)" },
        "&:hover": { borderBottom: "2px solid #707070" },
        "&::after": { borderBottom: "2px solid #ffff" },
    };

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
                <FormLabel htmlFor="fullName" sx={{ color: "white" }}>Full Name</FormLabel>
                <Input id="fullName" sx={customInput} placeholder="Write your name"></Input>
            </Box>
            {/* End input fullName */}

            {/* Start input email */}
            <Box sx={customBoxInput}>
                <FormLabel htmlFor="email" sx={{ color: "white" }}>Email</FormLabel>
                <Input id="email" sx={customInput} placeholder="Write your email"></Input>
            </Box>
            {/* End input email */}

            {/* Start input password */}
            <Box sx={customBoxInput}>
                <FormLabel htmlFor="password" sx={{ color: "white" }}>Password</FormLabel>
                <Input id="password" sx={customInput} type="password" placeholder="********"></Input>
            </Box>
            {/* End input password */}

            {/* Start Terms */}
            <Box sx={customBoxTems}>
                <Typography variant="subtitle1">By signing up you agree to our <span style={{textDecoration: 'underline'}}>Terms</span>, <span style={{textDecoration: 'underline'}}>Privacy Policy</span>, and <span style={{textDecoration: 'underline'}}>Cookie Use</span></Typography>
            </Box>
            {/* End Terms */}

            {/* Start Button */}
            <Box sx={customBoxButton}>
                <Button sx={{ color: "white", backgroundColor: "gray", borderRadius: "5px" }} variant="contained">Create an Account</Button>
            </Box>
            {/* End Button */}
        </Box>
        // end box main
    )
}