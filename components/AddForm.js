import CheckIcon from '../public/assets/check.svg';
import styled from 'styled-components';

export default function AddForm({ onAddItem, setAddActive }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const data = {
      name: form.name.value,
      date: form.date.value,
      quantity: form.quantity.value,
    };
    onAddItem(data);
    event.target.reset();
    setAddActive(false);
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <InputName
        type="text"
        id="name"
        name="name"
        placeholder="name"
        required
      />
      <label htmlFor="date"></label>
      <InputDate type="date" id="date" name="date" required />
      <label htmlFor="quantity"></label>
      <InputQty
        type="number"
        id="quantity"
        name="quantity"
        placeholder="Qty."
      />
      <StyledButton type="submit">
        <StyledCheck />
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-bottom: 2%;
  border: 1px solid black;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 3px;
  right: 10px;
`;
const StyledCheck = styled(CheckIcon)`
  fill: #ff4d52;
`;
const InputName = styled.input`
  margin: 1%;
`;
const InputDate = styled.input`
  display: block;
  margin: 1%;
`;
const InputQty = styled.input`
  margin: 1%;
  display: block;
`;
