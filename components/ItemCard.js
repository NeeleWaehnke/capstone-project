import styled from 'styled-components';

export default function ItemCard({ name, date, quantity }) {
  return (
    <StyledItem>
      <StyledName>{name}</StyledName>
      <StyledQty>Qty:</StyledQty>
      <StyledQtyValue>{quantity}</StyledQtyValue>
      <StyledDate>date:</StyledDate>
      <StyledDateValue>{date}</StyledDateValue>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  border: 1px solid black;
  margin: 1%;
  margin-left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'name . .' 'name qty date' 'name qtyvalue datevalue  ';
  padding: 15px;
`;
const StyledName = styled.h3`
  margin: 2%;
  justify-self: start;
  align-self: center;
  grid-area: name;
  display: grid;
`;

const StyledDate = styled.p`
  margin: 2%;
  grid-area: date;
  justify-self: center;
  align-self: center;
  display: grid;
`;

const StyledQty = styled.p`
  margin: 2%;
  display: grid;
  grid-area: qty;
  justify-self: center;
  align-self: center;
`;

const StyledQtyValue = styled.div`
  margin: 2%;
  display: grid;
  grid-area: qtyvalue;
  justify-self: center;
  align-self: center;
`;
const StyledDateValue = styled.div`
  margin: 2%;
  display: grid;
  grid-area: datevalue;
  justify-self: center;
  align-self: center;
`;
