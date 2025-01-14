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
        main: '#CEFF1C',
        light: '#e1fe9e',
        dark: '#bae823',
        contrastText: '#fff',
      },
      secondary: {
        main: '#6232FF',
        light: '#9a71f8',
        dark: '#2114df',
        contrastText: '#fff',
      },
      background: {
        default: '#14141A',
        paper:'#14141A'
      },
    },
  });

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}