import ItemCard from './ItemCard';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function ItemList({
  currentItems,
  onRemoveItem,
  onEditItem,
  storages,
}) {
  const router = useRouter();

  if (!currentItems) {
    return null;
  }

  return (
    <>
      <StyledList>
        {router.pathname === '/warning' && (
          <Disclaimer>
            Here are the items that are close to their best-before date. Use
            them soon!
          </Disclaimer>
        )}
        {currentItems.map((item) => {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
              datetype={item.datetype}
              quantity={item.quantity}
              storage={item.storage}
              onRemoveItem={onRemoveItem}
              onEditItem={onEditItem}
              storages={storages}
            />
          );
        })}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90vw;
  margin: 0 auto 125px auto;
  @media (min-width: 900px) {
    width: 80vw;
  }
`;
const Disclaimer = styled.li`
  background-color: #ff8c00;
  border-radius: 5px;
  margin: 1% 1% 2% 0;
  width: 90vw;
  text-align: center;
  display: flex;
  padding: 1%;
`;
