import Storages from '../components/Storages';
import Header from '../components/Header';
import useLocalStorageState from 'use-local-storage-state';


export default function Home({ storages, setStorages }) {
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dummyitems,
  });
  return (
    <>
      <Header />
      <Storages storages={storages} setStorages={setStorages} />
    </>
  );
}
