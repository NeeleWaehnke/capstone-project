import styled from 'styled-components';

export default function ItemCard({ name, date, quantity }) {
  return (
    <StyledItem>
      <h3>{name}</h3>

      <p className="qty">Qty:</p>
      <div className="qty-value">{quantity}</div>

      <p className="date">date:</p>
      <div className="date-value">{date}</div>
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
  h3,
  p,
  div {
    margin: 2%;
    display: grid;
  }
  .date {
    grid-area: date;
    justify-self: center;
    align-self: center;
  }
  .date-value {
    grid-area: datevalue;
    justify-self: center;
    align-self: center;
  }
  .qty {
    grid-area: qty;
    justify-self: center;
    align-self: center;
  }
  .qty-value {
    grid-area: qtyvalue;
    justify-self: center;
    align-self: center;
  }
  h3 {
    justify-self: start;
    align-self: center;
    grid-area: name;
  }
`;
