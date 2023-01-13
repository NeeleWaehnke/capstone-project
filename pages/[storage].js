import { useRouter } from 'next/router';
import useLocalStorageState from 'use-local-storage-state';
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddForm from '../components/AddForm';
import styled from 'styled-components';

export default function Storage({ sortedItemsWithDate }) {
  const router = useRouter();
  const { storage } = router.query;

  const [storages] = useLocalStorageState('storages');
  const [items, setItems] = useLocalStorageState('items');

  if (!storages || !items) {
    return null;
  }

  const currentItems = sortedItemsWithDate.filter(
    (item) => item.storage === storage
  );

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
      <Header storages={storages} />
      <StyledDiv>
        <ItemList
          currentItems={currentItems}
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem}
          storages={storages}
        />
      </StyledDiv>
      <AddForm
        onAddItem={handleAddItem}
        storages={storages}
        currentStorage={storage}
      />
    </>
  );
}

const StyledDiv = styled.div`
  margin-top: 150px;
`;
