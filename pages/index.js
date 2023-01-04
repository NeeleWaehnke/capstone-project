import StoragesPage from '../components/StoragesPage';
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
  function handleStorage(storage) {
    setStorages(storage);
  }

  return (
    <>
      <Header />
      <StoragesPage storages={storages} onStorage={handleStorage} />
      <WarningPage />
    </>
  );
}
