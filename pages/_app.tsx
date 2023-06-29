import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import '@/styles/globals.css';
import { lightTheme, darkTheme } from '../themes';
import { UIProvider } from '@/context/ui';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <UIProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </UIProvider>
    );
}
