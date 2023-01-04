import ItemCard from './ItemCard';
import styled from 'styled-components';
import Link from 'next/link';
import { differenceInCalendarDays } from 'date-fns';
import { useRouter } from 'next/router';

export default function ItemList({
  currentItems,
  onRemoveItem,
  onEditItem,
  storages,
}) {
  const { pathname } = useRouter();

  if (!currentItems) {
    return null;
  }
  const dateSortedItems = currentItems.slice().sort(function (a, b) {
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);

    return date1 - date2;
  });

  function calculateDifference(date) {
    const itemDate = new Date(date);
    const now = new Date();
    const difference = differenceInCalendarDays(itemDate, now);
    return difference;
  }
  function includeDifference(items) {
    const newItems = items.map((item) =>
      calculateDifference(item.date) < 4
        ? { ...item, warningActive: true }
        : item
    );
    return newItems;
  }
  const sortedItemsWithDate = includeDifference(dateSortedItems);

  const warningItems = sortedItemsWithDate.filter(
    (item) => item.warningActive === true
  );

  return (
    <>
      <Link href="/">Go back</Link>
      <StyledList>
        {pathname === '/warning'
          ? warningItems.map((item) => {
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
            })
          : sortedItemsWithDate.map((item) => {
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
