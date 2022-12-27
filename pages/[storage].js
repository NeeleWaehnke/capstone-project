import { useRouter } from 'next/router';
import useLocalStorageState from 'use-local-storage-state';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddForm from '../components/AddForm';
import { dummyitems } from '../lib/data';

export default function Storage() {
  const router = useRouter();
  const { storage } = router.query;

  const [storages] = useLocalStorageState('storages');
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dummyitems,
  });

  if (!storages || !items) {
    return null;
  }

  const currentItems = items.filter((item) => item.storage === storage);

  if (!currentItems) {
    return null;
  }
  function handleAddItem(newItem) {
    setItems([{ ...newItem }, ...items]);
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
        currentItems={currentItems}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        storages={storages}
      />
      <AddForm
        onAddItem={handleAddItem}
        storages={storages}
        currentStorage={storage}
      />
    </>
  );
}
