import ItemCard from './ItemCard';
import styled from 'styled-components';
import Link from 'next/link';

export default function ItemList({
  currentItems,
  onRemoveItem,
  onEditItem,
  storages,
}) {
  if (!currentItems) {
    return null;
  }

  return (
    <>
      <Link href="/">Go back</Link>
      <StyledList>
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
`;
