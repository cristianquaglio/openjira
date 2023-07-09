import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { EntriesProvider } from '@/context/entries';
import { UIProvider } from '@/context/ui';

import '@/styles/globals.css';
import { lightTheme, darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SnackbarProvider maxSnack={3}>
            <EntriesProvider>
                <UIProvider>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </UIProvider>
            </EntriesProvider>
        </SnackbarProvider>
    );
}
