import ItemList from '../components/ItemList';
import Header from '../components/Header';
import AddForm from '../components/AddForm';
import { useState } from 'react';
import { dummyitems } from '../lib/data';

export default function Home() {
  const [items, setItems] = useState(dummyitems);
  function handleAddItem(newItem) {
    setItems([{ name, date, quantity, ...newItem }, ...items]);
  }

  return (
    <>
      <Header />
      <ItemList items={items} />
      <AddForm onAddItem={handleAddItem} />
    </>
  );
}
