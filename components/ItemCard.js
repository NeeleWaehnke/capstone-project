import { items } from '../lib/data';

export default function ItemCard({ name, date, quantity }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>Qty: {quantity}</p>
      <p>date: {date}</p>
    </li>
  );
}
