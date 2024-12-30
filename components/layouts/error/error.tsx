'use client';

import { Box, Typography } from "@mui/material"
import { MessageErrorContext, MessageErrorContextProps} from "@/context/auth/MessageErrorContext";
import { useContext } from 'react';

export const Error = () => {
    const { messageError } = useContext<MessageErrorContextProps>(MessageErrorContext);

    const margin = 16;

    const customBoxError = {
        marginBottom: margin + 'px',
        display: 'flex',
        flexDirection: 'column',
    };

    if(!messageError){
        return;
    }

    return (
        <Box sx={customBoxError}>
            <Typography color="error">{messageError}</Typography>
        </Box>
    );
}