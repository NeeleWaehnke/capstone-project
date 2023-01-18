import StorageCard from './StorageCard';

export default function Storages({
  storages,
  onGetStorages,
  items,
  onGetItems,
}) {
  async function handleRemoveStorage(id, storageToDelete) {
    await fetch('/api/storages/' + id, {
      method: 'DELETE',
    }),
      await fetch('api/items/', {
        method: 'DELETE',
        body: storageToDelete,
      });

    onGetStorages();
    onGetItems();
  }

  async function handleEditStorage(editedStorage, oldStorage, newStorage) {
    await fetch('api/storages/' + editedStorage.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedStorage),
    });
    await fetch('api/items', {
      method: 'PUT',
      body: [oldStorage, newStorage],
    });
    onGetStorages();
    onGetItems();
  }

  return (
    <>
      {storages.map((storage) => {
        return (
          <StorageCard
            key={storage.id}
            id={storage.id}
            name={storage.name}
            items={items}
            onEditStorage={handleEditStorage}
            onGetItems={onGetItems}
            onRemoveStorage={handleRemoveStorage}
          />
        );
      })}
    </>
  );
}
