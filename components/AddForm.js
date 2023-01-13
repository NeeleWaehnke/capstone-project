import CheckIcon from '../public/assets/check-circle.svg';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import AddButton from './AddButton';

export default function AddForm({ onAddItem, storages, currentStorage }) {
  const [addFormActive, setAddFormActive] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newItem = {
      name: form.name.value,
      date: form.date.value,
      quantity: form.quantity.value,
      storage: form.storage.value,
      id: nanoid(),
      datetype: form.datetype.value,
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
          <StyledRadio>
            <InputRadio
              type="radio"
              id="best-before"
              name="datetype"
              value="best-before"
            />

            <InputLabel htmlFor="best-before">best before</InputLabel>
            <InputRadio2
              type="radio"
              id="stored-since"
              name="datetype"
              value="stored-since"
            />
            <InputLabel2 htmlFor="stored-since">stored since</InputLabel2>
          </StyledRadio>
          <label htmlFor="date"></label>
          <InputDate type="date" id="date" name="date" required />
          <label htmlFor="quantity"></label>
          <InputQty
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Qty."
          />
          <label htmlFor="storage"></label>
          <InputStorage
            id="storage"
            name="storage"
            defaultValue={currentStorage}
          >
            {storages.map((storage) => {
              return (
                <option key={storage.id} value={storage.name}>
                  {storage.name}
                </option>
              );
            })}
          </InputStorage>
          <StyledButton type="submit">
            <CheckIcon />
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
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 4% 0 0 0;
  display: flex;
  justify-content: right;
`;
const StyledForm = styled.form`
  background-color: #006daa;
  width: 100%;
  height: 120px;
  padding: 2% 0 2% 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'names place qty '
    'date  radio check'
    '. . .';
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 3px;
  right: 3px;
  grid-area: check;
  align-self: end;
  justify-self: end;
`;

const InputName = styled.input`
  margin: 1% 3% 2% 3%;
  padding: 1% 0.5% 1% 1%;
  grid-area: names;
  justify-self: center;
  display: flex;
  width: 95%;
  border: none;
  border-radius: 5px;
  background-color: #fcf7e9;
  &:focus {
    outline: #ff3c1a 2px solid;
  }
`;
const InputDate = styled(InputName)`
  grid-area: date;
  margin-top: 4%;
  height: 35px;
`;
const InputQty = styled(InputName)`
  width: 50px;
  grid-area: qty;
  justify-self: start;
`;

const InputStorage = styled.select`
  margin: 1% 3% 2% 3%;
  grid-area: place;
  width: 95%;
  padding: 1% 0.5% 1% 1%;
  display: flex;
  border: none;
  border-radius: 5px;
  height: 35px;
  align-self: center;
  background-color: #fcf7e9;
  &:focus {
    outline: #ff3c1a 2px solid;
  }
`;

const InputRadio = styled.input`
  grid-area: button1;
  width: 15px;
  justify-self: center;
  &:checked {
    accent-color: #ff3c1a;
  }
`;

const InputRadio2 = styled(InputRadio)`
  grid-area: button2;
`;

const InputLabel = styled.label`
  grid-area: label1;
  color: #fcfffd;
  margin-left: 2%;
  justify-self: start;
`;
const InputLabel2 = styled(InputLabel)`
  grid-area: label2;
`;
const StyledRadio = styled.div`
  grid-area: radio;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto auto;
  grid-template-areas:
    'button1 label1'
    'button2 label2';
`;
