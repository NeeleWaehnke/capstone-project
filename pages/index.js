import ItemList from '../components/ItemList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddForm from '../components/AddForm';
import { useState } from 'react';

export default function Home() {
  const [addActive, setAddActive] = useState(false);

  return (
    <>
      <Header />
      {addActive === true ? (
        <>
          <ItemList /> <AddForm />
        </>
      ) : (
        <ItemList />
      )}

      <Footer setAddActive={setAddActive} />
    </>
  );
}
