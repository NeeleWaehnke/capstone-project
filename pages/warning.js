import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';
import { dummyitems } from '../lib/data';

export default function Warning({
  handleEditItem,
  handleRemoveItem,
  storages,
}) {
  const [items, setItems] = useLocalStorageState('items', {
    defaultValue: dummyitems,
  });
  const warningItems = items.filter((item) => item.warningActive === true);
  console.log('warning:', warningItems);
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
