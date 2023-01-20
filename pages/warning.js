import Header from '../components/Header';
import ItemList from '../components/ItemList';
import { PagesContainer } from '../components/Container/ContainerStyles';

export default function Warning({ warningItems, onGetItems, storages }) {
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

      <PagesContainer>
        <ItemList
          currentItems={warningItems}
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem}
          storages={storages}
        />
      </PagesContainer>
    </>
  );
}
