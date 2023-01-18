import styled from 'styled-components';
import AddBoxIcon from '../public/assets/add-box.svg';

export default function AddStorageForm({ onGetStorages }) {
  async function handleAddStorage(newStorage) {
    await fetch('/api/storages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStorage),
    });
    onGetStorages();
  }

  function handleSubmitAdd(event) {
    event.preventDefault();
    const form = event.target.elements;
    const newStorage = {
      name: form.storage.value,
    };
    handleAddStorage(newStorage);

    event.target.reset();
  }
  return (
    <StyledAddStorage onSubmit={handleSubmitAdd}>
      <StyledLabel htmlFor="storage">
        Add a new storage place for your items:{' '}
      </StyledLabel>
      <StyledInput
        type="text"
        id="storage"
        name="storage"
        placeholder="Type here ..."
        required
      />
      <StyledButton>
        <AddBoxIcon />
      </StyledButton>
    </StyledAddStorage>
  );
}
const StyledAddStorage = styled.form`
  background-color: #006daa;
  height: auto;
  position: fixed;
  bottom: 0vh;
  padding: 1%;
  color: #fcfffd;
  width: 100vw;
`;
const StyledInput = styled.input`
  width: 80vw;
  border: none;
  border-radius: 5px;
  position: relative;
  bottom: 5px;
  height: 25px;
  left: 5px;
  &:focus {
    outline: #ff3c1a 2px solid;
  }
`;

const StyledLabel = styled.label`
  margin: 2% 2% 0 2%;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;
  right: -20px;
  bottom: -3px;
`;
