import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';
import CheckIcon from '../public/assets/check.svg';
import ArrowIcon from '../public/assets/arrow-icon.svg';
import Link from 'next/link';
import { useState } from 'react';

export default function StorageCard({
  name,
  id,
  items,
  onEditStorage,
  onRemoveStorage,
  onGetItems,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function getNumberOfItems(place, items) {
    const filteredItems = items.filter((item) => item.storage === place);
    return filteredItems.length;
  }
  function handleSubmitEdit(event, name, id) {
    event.preventDefault();
    const form = event.target.elements;
    const editedStorage = {
      name: form.storage.value,
      id: id,
    };
    const oldStorage = name;
    const newStorage = form.storage.value;

    onEditStorage(editedStorage, oldStorage, newStorage);
    setIsEditing(false);
  }

  function handleRemoveConfirmation() {
    if (confirm('Deleting this page deletes included items')) {
      onRemoveStorage(id, name);
    }
  }

  return (
    <>
      {isEditing === true ? (
        <form onSubmit={(event) => handleSubmitEdit(event, name, id)}>
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
        <StyledCardContainer>
          <StyledTitle>{name}</StyledTitle>
          <StyledDeleteButton onClick={() => handleRemoveConfirmation()}>
            <DeleteIcon />
          </StyledDeleteButton>
          <StyledButton
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <EditIcon />
          </StyledButton>
          <StyledItemCounter>
            {getNumberOfItems(name, items)} items
          </StyledItemCounter>
          <StyledArrowLink href={`/${name}`}>
            <ArrowIcon />
          </StyledArrowLink>
        </StyledCardContainer>
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
  grid-area: button;
`;

const StyledDeleteButton = styled(StyledButton)`
  position: relative;
  bottom: 30px;
`;

const StyledCardContainer = styled.section`
  border-radius: 5px;
  background-color: #fcfffd;
  width: 90vw;
  height: 75px;
  margin: 0 auto 2% auto;
  display: grid;
  grid-template-areas:
    'name  items button link'
    'name  items  button link';
  grid-template-rows: 50% 50%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
`;

const StyledTitle = styled.h3`
  grid-area: name;
  margin: 4% 1% 1% 4%;
  align-self: center;
  justify-self: start;
  font-size: 1.5rem;
`;

const StyledItemCounter = styled.p`
  grid-area: items;
  text-align: center;
  align-self: center;
  justify-self: center;
`;
const StyledArrowLink = styled(Link)`
  position: relative;
  top: 2px;
  grid-area: link;
  width: 50px;
  align-self: center;
  justify-self: end;
`;
