import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';
import CheckIcon from '../public/assets/check.svg';
import Link from 'next/link';
import { useState } from 'react';

export default function StorageCard({
  name,
  id,
  items,
  onEditStorage,
  onRemoveStorage,
  onItems,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function getNumberOfItems(place, items) {
    const filteredItems = items.filter((item) => item.storage === place);
    return filteredItems.length;
  }
  function handleSubmitEdit(event, items, name) {
    event.preventDefault();
    const form = event.target.elements;
    const updatedStorage = {
      name: form.storage.value,
      id: id,
    };
    let updatedItems = [];
    items.forEach((item) => {
      if (item.storage === name) {
        updatedItems.push({
          ...item,
          storage: form.storage.value,
        });
      } else {
        updatedItems.push({ ...item });
      }
      onEditStorage(updatedStorage, updatedItems);
    });

    setIsEditing(false);
  }

  function handleRemoveConfirmation(items) {
    if (confirm('Deleting this page deletes included items')) {
      const otherItems = items.filter((item) => item.storage !== name);
      onRemoveStorage(id, otherItems);
    } else {
      null;
    }
  }

  return (
    <>
      {isEditing === true ? (
        <form onSubmit={(event) => handleSubmitEdit(event, items, name)}>
          <label htmlFor="storage"></label>
          <input
            type="text"
            id="storage"
            name="storage"
            defaultValue={name}
            required
          />
          <button>
            <CheckIcon />
          </button>
        </form>
      ) : (
        <section>
          <Link href={`/${name}`}>
            <h3>{name}</h3>
          </Link>
          <StyledButton onClick={() => handleRemoveConfirmation(items)}>
            <DeleteIcon />
          </StyledButton>
          <StyledButton
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <EditIcon />
          </StyledButton>

          <p> {getNumberOfItems(name, items)} items</p>
        </section>
      )}
    </>
  );
}
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  justify-self: end;
  align-self: end;
  margin: 1%;
`;
