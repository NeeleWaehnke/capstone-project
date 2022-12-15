import { Fragment } from 'react';
import ItemCard from './ItemCard';
import styled from 'styled-components';

export default function ItemList({ items, onRemoveItem }) {
  return (
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
            />
          </Fragment>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  width: 90vw;
  margin: 0 auto 0 auto; ;
`;
