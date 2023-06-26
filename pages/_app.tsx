import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import '@/styles/globals.css';

const basicTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={basicTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
