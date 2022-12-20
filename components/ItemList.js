import { Fragment } from 'react';
import ItemCard from './ItemCard';
import styled from 'styled-components';
import Link from 'next/link';

export default function ItemList({ items, onRemoveItem, onEditItem }) {
  return (
    <>
      <StyledList>
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              <ItemCard
                id={item.id}
                name={item.name}
                date={item.date}
                quantity={item.quantity}
                onRemoveItem={onRemoveItem}
                onEditItem={onEditItem}
              />
            </Fragment>
          );
        })}
      </StyledList>
      <Link href="/">Go back</Link>
    </>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90vw;
  margin: 0 auto 0 auto; ;
`;
