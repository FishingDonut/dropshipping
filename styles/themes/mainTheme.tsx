"use client";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

export default function ThemeMain({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#baf329',
      },
      secondary: {
        main: '#6229f3',
      },
    },
  });

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
