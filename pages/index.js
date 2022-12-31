import Storages from '../components/Storages';
import Header from '../components/Header';
import WarningPage from '../components/WarningPage';
import useLocalStorageState from 'use-local-storage-state';
import { dummyitems } from '../lib/data';
import { dummystorage } from '../lib/storageData';

export default function Home() {
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dummyitems,
  });
  const [storages, setStorages] = useLocalStorageState('storages', {
    defaultValue: dummystorage,
  });
  function handleStorage(prop) {
    setStorages(prop);
  }
  function handleItems(prop) {
    setItems(prop);
  }

  return (
    <>
      <Header />
      <Storages
        storages={storages}
        onStorage={handleStorage}
        onItems={handleItems}
      />
      <WarningPage />
    </>
  );
}
