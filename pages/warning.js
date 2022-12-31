import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';

export default function Warning({
  handleEditItem,
  handleRemoveItem,
  storages,
}) {
  const [items] = useLocalStorageState('items');

  return (
    <>
      <Header />
      <ItemList
        currentItems={items}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        storages={storages}
      />
    </>
  );
}
