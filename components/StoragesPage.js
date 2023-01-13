import { nanoid } from 'nanoid';
import styled from 'styled-components';
import StorageCard from './StorageCard';

export default function Storages({ storages, onStorage, items, onItems }) {
  function handleSubmitAdd(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newStorage = {
      name: form.storage.value,
      id: nanoid(),
    };
    onStorage([newStorage, ...storages]);

    event.target.reset();
  }
  function handleEditStorage(updatedStorage, updatedItem) {
    onStorage(
      storages.map((storage) => {
        if (storage.id === updatedStorage.id) {
          return updatedStorage;
        } else {
          return storage;
        }
      })
    );
    onItems(updatedItem);
  }
  function handleRemoveStorage(id, otherItems) {
    onStorage(storages.filter((storage) => storage.id !== id));
    onItems(otherItems);
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
            onItems={onItems}
            onRemoveStorage={handleRemoveStorage}
          />
        );
      })}
    </>
  );
}
