import { Box } from '@mui/material';

const layout = async({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => { 
    const customBoxMain = {
        position: "center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    };

    return (
        <Box sx={customBoxMain}>
            {children}
        </Box>
    );
}

export default layout; 