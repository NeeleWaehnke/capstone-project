import Header from '../components/Header';
import ItemList from '../components/ItemList';
import useLocalStorageState from 'use-local-storage-state';
import styled from 'styled-components';

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
