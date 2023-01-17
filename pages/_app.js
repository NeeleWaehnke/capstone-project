import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';
import { differenceInCalendarDays } from 'date-fns';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([]);
  const [storages, setStorages] = useState([]);

  async function getItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    setItems(items);
  }

  useEffect(() => {
    getItems();
  }, []);

  async function getStorages() {
    const response = await fetch('/api/storages');
    const storages = await response.json();
    setStorages(storages);
  }

  useEffect(() => {
    getStorages();
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
      <GlobalStyles />
      <Head>
        <link rel="icon" href="/fridge.ico" />
        <title>My Food</title>
      </Head>
      <Component
        {...pageProps}
        items={items}
        onGetItems={getItems}
        storages={storages}
        onGetStorages={getStorages}
        warningItems={warningItems}
        sortedItemsWithDate={sortedItemsWithDate}
      />
    </>
  );
}

export default MyApp;
