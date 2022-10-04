import '../styles/globals.css';
import { useRouter } from 'next/router';
import { DokzProvider, ColorModeSwitch, GithubLink, Link } from 'dokz';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleFonts } from 'next-google-fonts';
import { useEffect } from 'react';
import Head from 'next/head';
import { hotjar } from 'react-hotjar';

import theme from '../chakra.config';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.length === 1)
      return gtag.pageview(router.pathname, '我的世界文明游戏');
    gtag.pageview(router.pathname);
  }, [router.events]);

  useEffect(() => {
    hotjar.initialize(
      process.env.NEXT_PUBLIC_HOTJAR_ID,
      process.env.NEXT_PUBLIC_HOTJAR_VERSION
    );
  }, []);

  if (router.pathname.startsWith('/wiki')) {
    return (
      <ChakraProvider>
        <Head>
          <title>我的世界文明游戏</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <DokzProvider
          animate
          docsRootPath='pages/wiki'
          headTitlePrefix='我的世界文明游戏 Wiki - '
          headerLogo={
            <img
              src='/img/logo.png'
              style={{ opacity: 1 }}
              width='50px'
              height='50px'
            />
          }
          headerItems={[
            <GithubLink url='https://github.com/ChromaMinecraft' />,
            <ColorModeSwitch key='1' />,
          ]}
          sidebarOrdering={{
            'index.mdx': true,
            wiki: {
              'index.mdx': true,
              donasi: {
                'index.mdx': true,
              },
              rules: {
                'survival.mdx': true,
                'skyblock.mdx': true,
              },
              tutorial: true,
            },
            more: true,
          }}
        >
          <Component {...pageProps} />
        </DokzProvider>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>我的世界文明游戏</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <GoogleFonts
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet'
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
