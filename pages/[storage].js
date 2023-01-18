import { useRouter } from 'next/router';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddForm from '../components/AddForm';
import Container from '../components/Container';

export default function Storage({
  sortedItemsWithDate,
  onGetItems,
  storages,
  items,
}) {
  const router = useRouter();
  const { storage } = router.query;

  if (!storages || !items) {
    return null;
  }

  const currentItems = sortedItemsWithDate.filter(
    (item) => item.storage === storage
  );

  if (!currentItems) {
    return null;
  }
  async function handleAddItem(newItem) {
    await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    onGetItems();
  }

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
          currentItems={currentItems}
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem}
          storages={storages}
        />
      </Container>
      <AddForm
        onAddItem={handleAddItem}
        storages={storages}
        currentStorage={storage}
      />
    </>
  );
}
