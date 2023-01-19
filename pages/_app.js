import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';
import { differenceInCalendarDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import fetchData from '../helper/fetchData';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [items, setItems] = useState([]);
  const [storages, setStorages] = useState([]);

  async function handleGetItems() {
    const items = await fetchData('api/items');
    setItems(items);
  }
  async function handleGetStorages() {
    const storages = await fetchData('api/storages');
    setStorages(storages);
  }

  useEffect(() => {
    handleGetItems();
    handleGetStorages();
  }, []);

  const dateSortedItems = items.slice().sort(function (a, b) {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);

    return date1 - date2;
  });

  function calculateDifference(date) {
    const itemDate = new Date(date);
    const now = new Date();
    const difference = differenceInCalendarDays(itemDate, now);
    return difference;
  }
  function includeDifference(items) {
    const newItems = items.map((item) =>
      calculateDifference(item.date) < 4
        ? { ...item, warningActive: true }
        : item
    );
    return newItems;
  }
  const sortedItemsWithDate = includeDifference(dateSortedItems);

  const warningItems = sortedItemsWithDate.filter(
    (item) => item.warningActive === true && item.datetype === 'best-before'
  );
  return (
    <>
      <SessionProvider session={session}>
        <GlobalStyles />
        <Head>
          <link rel="icon" href="/fridge.ico" />
          <title>My Food</title>
        </Head>
        <Component
          {...pageProps}
          items={items}
          onGetItems={handleGetItems}
          storages={storages}
          onGetStorages={handleGetStorages}
          warningItems={warningItems}
          sortedItemsWithDate={sortedItemsWithDate}
        />
      </SessionProvider>
    </>
  );
}

export default MyApp;
