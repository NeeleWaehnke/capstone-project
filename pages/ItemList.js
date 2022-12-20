import ItemList from '../components/ItemList';
import Header from '../components/Header';
import AddForm from '../components/AddForm';
import { dummyitems } from '../lib/data';
import useLocalStorageState from 'use-local-storage-state';

export default function List() {
  const [items, setItems] = useLocalStorageState('', {
    defaultValue: dummyitems,
  });
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
