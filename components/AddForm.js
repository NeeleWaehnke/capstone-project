import CheckIcon from '../public/assets/check.svg';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import AddButton from './AddButton';

export default function AddForm({ onAddItem }) {
  const [addFormActive, setAddFormActive] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newItem = {
      name: form.name.value,
      date: form.date.value,
      quantity: form.quantity.value,
      id: nanoid(),
    };
    onAddItem(newItem);
    event.target.reset();
    setAddFormActive(false);
  }
  return (
    <StyledSection>
      {addFormActive === true ? (
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
      ) : (
        <AddButton
          setAddActive={setAddFormActive}
          onClick={() => {
            setAddFormActive(true);
          }}
        />
      )}
    </StyledSection>
  );
}

const StyledSection = styled.section`
  position: sticky;
  bottom: 0;
  max-width: 100%;
  margin: 4% 0 0 0;
  display: flex;
  justify-content: right;
`;
const StyledForm = styled.form`
  border: 1px solid black;
  background-color: #c4ced4;
  width: 100%;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 3px;
  right: 10px;
  fill: #ff4d52;
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
  width: 45px;
`;
