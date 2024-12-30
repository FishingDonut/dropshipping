'use client';

import { Box, Typography } from "@mui/material"
import { MenssageErrorContext, MenssageErrorContextProps} from "@/context/auth/MenssageErrorContext";
import { useContext } from 'react';

export const Error = () => {
    const { menssageError } = useContext<MenssageErrorContextProps>(MenssageErrorContext);

    const margin = 16;

    const customBoxError = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
    };

    if(!menssageError){
        return;
    }

    return (
        <Box sx={customBoxError}>
            <Typography color="error">{menssageError}</Typography>
        </Box>
    );
}