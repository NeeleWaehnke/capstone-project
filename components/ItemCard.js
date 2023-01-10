import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';
import CheckIcon from '../public/assets/check.svg';
import { useState } from 'react';

export default function ItemCard({
  name,
  date,
  quantity,
  storage,
  onRemoveItem,
  id,
  onEditItem,
  storages,
}) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const updatedItem = {
      name: form.name.value,
      date: form.date.value,
      id: id,
      quantity: form.quantity.value,
      storage: form.storage.value,
    };

    onEditItem(updatedItem);
    setIsEditing(false);
  }

  function changeDate(date) {
    const changedDate = new Date(date);

    const day = String(changedDate.getDate()).padStart(2, '0');
    const month = String(changedDate.getMonth() + 1).padStart(2, '0');
    const year = changedDate.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <>
      {isEditing === true ? (
        <StyledForm onSubmit={handleEditSubmit}>
          <label htmlFor="name"></label>
          <StyledInput
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            placeholder="name"
          />
          <StyledText htmlFor="date">date:</StyledText>

          <StyledInputDate
            type="date"
            id="date"
            name="date"
            defaultValue={date}
          />
          <StyledQty htmlFor="quantity">Qty:</StyledQty>

          <StyledInputQty
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Qty."
            defaultValue={quantity}
          />
          <label htmlFor="storage"></label>
          <StyledSelector id="storage" name="storage">
            {storages.map((storage) => {
              return (
                <option value={storage.name} key={storage.id}>
                  {storage.name}
                </option>
              );
            })}
          </StyledSelector>
          <StyledButton type="submit">
            <CheckIcon />
          </StyledButton>
        </StyledForm>
      ) : (
        <StyledItem>
          <StyledName>{name}</StyledName>
          <StyledQty>Qty:</StyledQty>
          <StyledValue>{quantity}</StyledValue>
          <StyledText>date:</StyledText>
          <StyledDateValue>{changeDate(date)}</StyledDateValue>
          <StyledStorage>{storage}</StyledStorage>
          <StyledEditButton
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <EditIcon />
          </StyledEditButton>
          <StyledDeleteButton
            onClick={() => {
              onRemoveItem(id);
            }}
          >
            <DeleteIcon />
          </StyledDeleteButton>
        </StyledItem>
      )}
    </>
  );
}

const StyledItem = styled.li`
  border-radius: 5px;
  margin: 1% 1% 2% 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'name qty date edit'
    'name qtyvalue datevalue edit'
    'storage  . . delete  '
    '. . . delete';
  padding: 5px;
  background-color: #fcfffd;
`;
const StyledForm = styled.form`
  border: 1px solid black;
  margin: 1% 1% 2% 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'name qty date .'
    'name qtyvalue datevalue .'
    'storage . . check';

  padding: 5px;
  background-color: #fcfffd;
`;

const StyledInput = styled.input`
  margin: 2%;
  display: flex;
  justify-self: start;
  align-self: end;
  grid-area: name;
  width: 100px;
  height: 28px;
`;

const StyledInputDate = styled(StyledInput)`
  grid-area: datevalue;
  justify-self: center;
  width: 110px;
  height: fit-content;
  align-self: center;
`;
const StyledInputQty = styled(StyledInputDate)`
  grid-area: qtyvalue;
  width: 45px;
`;

const StyledSelector = styled.select`
  grid-area: storage;
  height: fit-content;
  align-self: center;
`;

const StyledName = styled.h3`
  margin: 2%;
  justify-self: start;
  align-self: center;
  grid-area: name;
`;

const StyledText = styled.label`
  margin: 2%;
  grid-area: date;
  justify-self: center;
  align-self: center;
`;

const StyledQty = styled(StyledText)`
  grid-area: qty;
`;
const StyledStorage = styled(StyledText)`
  grid-area: storage;
  justify-self: start;
  align-self: end;
`;

const StyledValue = styled.div`
  margin: 2%;
  grid-area: qtyvalue;
  justify-self: center;
  align-self: center;
`;
const StyledDateValue = styled(StyledValue)`
  grid-area: datevalue;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  justify-self: end;
  align-self: end;
  margin: 1%;
  grid-area: check;
  position: relative;
  right: -12px;
`;
const StyledEditButton = styled(StyledButton)`
  grid-area: edit;
  position: static;
`;
const StyledDeleteButton = styled(StyledButton)`
  grid-area: delete;
  position: static;
`;
