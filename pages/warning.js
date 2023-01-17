import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';
import styled from 'styled-components';

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
      <StyledDiv>
        <ItemList
          currentItems={warningItems}
          onRemoveItem={handleRemoveItem}
          onEditItem={handleEditItem}
          storages={storages}
        />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  margin-top: 100px;
  margin-bottom: 75px;
`;
