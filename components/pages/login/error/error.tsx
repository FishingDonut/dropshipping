'use client';

import { Box, Typography } from "@mui/material"
import { MenssageErrorContext, MenssageErrorContextProps} from "@/context/login/MenssageErrorContext";
import { useContext } from 'react';

export const Error = () => {
    const { menssageError } = useContext<MenssageErrorContextProps>(MenssageErrorContext);

    if(!menssageError){
        return;
    }

    return (
        <Box>
            <Typography>{menssageError}</Typography>
        </Box>
    );
}