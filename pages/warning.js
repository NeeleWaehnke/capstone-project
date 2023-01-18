import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';
import Container from '../components/Container';

export default function Warning({ warningItems, onGetItems, storages, items }) {
  async function handleRemoveItem(id) {
    await fetch('/api/items/' + id, {
      method: 'DELETE',
    });
    onGetItems();
  }
  async function handleEditItem(editedItem) {
    await fetch('api/items/' + editedItem.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedItem),
    });
    onGetItems();
  }

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
