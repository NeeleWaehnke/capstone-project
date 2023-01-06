import GlobalStyles from '../components/GlobalStyles';
import Head from 'next/head';
import useLocalStorageState from 'use-local-storage-state';
import { dummyitems } from '../lib/data';
import { dummystorage } from '../lib/storageData';
import { differenceInCalendarDays } from 'date-fns';

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dummyitems,
  });
  const [storages, setStorages] = useLocalStorageState('storages', {
    defaultValue: dummystorage,
  });
  function handleStorage(storage) {
    setStorages(storage);
  }

  function handleItems(item) {
    setItems(item);
  }
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
    (item) => item.warningActive === true
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
        storages={storages}
        onItems={handleItems}
        onStorage={handleStorage}
        warningItems={warningItems}
        sortedItemsWithDate={sortedItemsWithDate}
      />
    </>
  );
}

export default MyApp;
