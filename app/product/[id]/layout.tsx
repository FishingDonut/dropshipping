import { Box } from '@mui/material';

const layout = async({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => { 
    const customBoxMain = {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'
    };

    return (
        <Box sx={customBoxMain}>
            {children}
        </Box>
    );
}

export default layout; 