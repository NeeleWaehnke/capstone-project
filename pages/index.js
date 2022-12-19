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
  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEditItem(updatedItem) {
    setItems(
      items.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        } else {
          return item;
        }
      })
    );
  }
  console.log(items);
  return (
    <>
      <Header />
      <ItemList
        items={items}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
      />
      <AddForm onAddItem={handleAddItem} />
    </>
  );
}
