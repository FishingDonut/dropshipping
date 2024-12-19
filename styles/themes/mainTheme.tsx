"use client";

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

export default function ThemeMain({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
