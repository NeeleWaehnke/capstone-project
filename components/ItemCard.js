import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';
import CheckIcon from '../public/assets/check.svg';
import { useState } from 'react';

export default function ItemCard({ name, date, quantity, onRemoveItem, id }) {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <StyledItem>
      {isEdited === true ? (
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            required
          />
          <label htmlFor="date"></label>
          <input type="date" id="date" name="date" required />
          <label htmlFor="quantity"></label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Qty."
          />
          <StyledButton type="submit">
            <CheckIcon />
          </StyledButton>
        </form>
      ) : (
        <>
          <StyledName>{name}</StyledName>
          <StyledQty>Qty:</StyledQty>
          <StyledQtyValue>{quantity}</StyledQtyValue>
          <StyledDate>date:</StyledDate>
          <StyledDateValue>{date}</StyledDateValue>
          <StyledEditButton
            onClick={() => {
              setIsEdited(true);
              console.log(isEdited);
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
        </>
      )}
    </StyledItem>
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

const StyledQty = styled.p`
  margin: 2%;
  grid-area: qty;
  justify-self: center;
  align-self: center;
`;

const StyledQtyValue = styled.div`
  margin: 2%;

  grid-area: qtyvalue;
  justify-self: center;
  align-self: center;
`;
const StyledDateValue = styled.div`
  margin: 2%;
  grid-area: datevalue;
  justify-self: center;
  align-self: center;
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
