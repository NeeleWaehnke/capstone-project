import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';

export default function Warning({ warningItems }) {
  const [items, setItems] = useLocalStorageState('items');
  const [storages] = useLocalStorageState('storages');

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
        currentItems={warningItems}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        storages={storages}
      />
    </>
  );
}
