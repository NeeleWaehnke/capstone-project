import { Fragment } from 'react';
import { dummyitems } from '../lib/data';
import ItemCard from './ItemCard';
import styled from 'styled-components';

export default function ItemList({ items }) {
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
`;
