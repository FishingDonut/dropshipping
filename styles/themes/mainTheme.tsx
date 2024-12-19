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
        light: '#cff974',
        dark: '#93b100',
        contrastText: '#fff',
      },
      secondary: {
        main: '#6229f3',
        light: '#9a71f8',
        dark: '#2114df',
        contrastText: '#fff',
      },
    },
  });

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
