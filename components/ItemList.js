import ItemCard from './ItemCard';
import styled from 'styled-components';
import Link from 'next/link';

export default function ItemList({
  currentItems,
  onRemoveItem,
  onEditItem,
  storages,
}) {
  const dateSortedItems = currentItems.slice().sort(function (a, b) {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);

    return date1 - date2;
  });

  return (
    <>
      <Link href="/">Go back</Link>
      <StyledList>
        {dateSortedItems.map((item) => {
          return (
            <ItemCard
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
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
  margin: 0 auto 0 auto; ;
`;
