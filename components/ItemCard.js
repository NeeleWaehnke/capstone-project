import styled from 'styled-components';
import DeleteIcon from '../public/assets/delete-icon.svg';
import EditIcon from '../public/assets/edit.svg';

export default function ItemCard({ name, date, quantity, onRemoveItem, id }) {
  return (
    <StyledItem>
      <StyledName>{name}</StyledName>
      <StyledQty>Qty:</StyledQty>
      <StyledQtyValue>{quantity}</StyledQtyValue>
      <StyledDate>date:</StyledDate>
      <StyledDateValue>{date}</StyledDateValue>
      <StyledEditButton>
        <StyledEdit />
      </StyledEditButton>
      <StyledButton
        onClick={() => {
          onRemoveItem(id);
        }}
      >
        <StyledDelete />
      </StyledButton>
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

const StyledDelete = styled(DeleteIcon)`
  fill: #ff4d52;
`;

const StyledEdit = styled(EditIcon)`
  fill: #ff4d52;
`;
