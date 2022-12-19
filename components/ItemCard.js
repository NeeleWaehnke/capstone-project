import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';
import CheckIcon from '../public/assets/check.svg';
import { useState } from 'react';

export default function ItemCard({
  name,
  date,
  quantity,
  onRemoveItem,
  id,
  onEditItem,
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
    };

    onEditItem(updatedItem);
    setIsEditing(false);
  }
  const dateString = date;
  console.log(Date.now());
  function changeDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }
  console.log(dateString);
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
          <label htmlFor="date"></label>
          <StyledDate>date:</StyledDate>
          <StyledInputDate
            type="date"
            id="date"
            name="date"
            defaultValue={date}
          />
          <label htmlFor="quantity"></label>
          <StyledQty>Qty:</StyledQty>
          <StyledInputQty
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Qty."
            defaultValue={quantity}
          />
          <StyledButton type="submit">
            <CheckIcon />
          </StyledButton>
        </StyledForm>
      ) : (
        <StyledItem>
          <StyledName>{name}</StyledName>
          <StyledQty>Qty:</StyledQty>
          <StyledValue>{quantity}</StyledValue>
          <StyledDate>date:</StyledDate>
          <StyledDateValue>{changeDate(dateString)}</StyledDateValue>
          <StyledEditButton
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <EditIcon />
          </StyledEditButton>
          <StyledButton
            onClick={() => {
              onRemoveItem(id);
            }}
          >
            <DeleteIcon />
          </StyledButton>
        </StyledItem>
      )}
    </>
  );
}

const StyledItem = styled.li`
  border: 1px solid black;
  margin: 1% 1% 2% 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    'name qty date edit'
    'name qtyvalue datevalue edit'
    'name  . . delete  '
    '. . . delete';
  padding: 5px;
`;
const StyledForm = styled.form`
  border: 1px solid black;
  margin: 1% 1% 2% 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20px auto;
  grid-template-areas:
    '. qty date .'
    'name qtyvalue datevalue .'
    'name . . .';

  padding: 5px;
`;

const StyledInput = styled.input`
  margin: 2%;
  display: flex;
  justify-self: start;
  align-self: center;
  grid-area: name;
  width: 100px;
`;

const StyledInputDate = styled(StyledInput)`
  grid-area: datevalue;
  justify-self: center;
  width: 110px;
`;
const StyledInputQty = styled(StyledInput)`
  grid-area: qtyvalue;
  justify-self: center;
  width: 45px;
`;

const StyledName = styled.h3`
  margin: 2%;
  justify-self: start;
  align-self: center;
  grid-area: name;
`;

const StyledDate = styled.p`
  margin: 2%;
  grid-area: date;
  justify-self: center;
  align-self: center;
`;

const StyledQty = styled(StyledDate)`
  grid-area: qty;
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
  grid-area: delete;
  justify-self: end;
  align-self: end;
  margin: 1%;
`;
const StyledEditButton = styled(StyledButton)`
  grid-area: edit;
`;
