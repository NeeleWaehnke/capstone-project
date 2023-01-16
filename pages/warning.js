import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';
import Container from '../components/Container';

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
  console.log(storages);
  return (
    <>
      <Header storages={storages} />
      <Container>
        <ItemList
          currentItems={warningItems}
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem}
          storages={storages}
        />
      </Container>
    </>
  );
}
