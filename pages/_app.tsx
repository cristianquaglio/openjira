import type { AppProps } from 'next/app';
import { EntriesProvider } from '@/context/entries';
import { UIProvider } from '@/context/ui';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import '@/styles/globals.css';
import { lightTheme, darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <EntriesProvider>
            <UIProvider>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </UIProvider>
        </EntriesProvider>
    );
}
