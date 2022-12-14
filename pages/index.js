import ItemList from '../components/ItemList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { dummyitems } from '../lib/data';

export default function Home() {
  const [items, setItems] = useState([...dummyitems]);
  function handleAddItem(newItem) {
    setItems([{ name, date, quantity, id: nanoid(), ...newItem }, ...items]);
  }
  console.log(items);
  return (
    <>
      <Header />
      <ItemList items={items} />

      <Footer onAddItem={handleAddItem} />
    </>
  );
}
