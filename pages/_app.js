import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="icon" href="/fridge.ico" />
        <title>My Food</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
