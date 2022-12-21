import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';
import useLocalStorageState from 'use-local-storage-state';
import { dummystorage } from '../lib/storageData';

function MyApp({ Component, pageProps }) {
  const [storages, setStorages] = useLocalStorageState('storages', {
    defaultValue: dummystorage,
  });
  return (
    <>
      <GlobalStyles />
      <Head>
        <link rel="icon" href="/fridge.ico" />
        <title>My Food</title>
      </Head>
      <Component {...pageProps} storages={storages} setStorages={setStorages} />
    </>
  );
}

export default MyApp;
