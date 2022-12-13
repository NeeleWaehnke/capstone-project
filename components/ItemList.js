import { Fragment } from 'react';
import { items } from '../lib/data';
import ItemCard from './ItemCard';

export default function ItemList() {
  return (
    <ul>
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
    </ul>
  );
}
