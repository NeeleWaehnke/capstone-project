import Storages from '../components/Storages';
import Header from '../components/Header';
import AddForm from '../components/AddForm';

export default function Home({ storages, setStorages }) {
  return (
    <>
      <Header />
      <Storages storages={storages} setStorages={setStorages} />
    </>
  );
}
