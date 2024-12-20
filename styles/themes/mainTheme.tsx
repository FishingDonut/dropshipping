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
        main: '#cdfd54',
        light: '#e1fe9e',
        dark: '#bae823',
        contrastText: '#fff',
      },
      secondary: {
        main: '#6229f3',
        light: '#9a71f8',
        dark: '#2114df',
        contrastText: '#fff',
      },
      background: {
        default: '#151515',
        paper:'#151515'
      },
    },
  });

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
