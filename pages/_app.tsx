import { useState } from 'react';
import type { AppProps } from 'next/app'
import { useColorScheme } from '@mantine/hooks';
import { SessionProvider } from "next-auth/react"
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

import Layout from '@/components/Layout';

import '@/global/global.css'


export default function App({ Component, pageProps }: AppProps) {

  // Themes
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
