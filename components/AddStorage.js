import styled from 'styled-components';

export default function AddStorageForm() {
  return (
    <StyledAddStorage onSubmit={handleSubmitAdd}>
      <label htmlFor="storage">Add a new storage option: </label>
      <input type="text" id="storage" name="storage" required />
      <button>Add</button>
    </StyledAddStorage>
  );
}
const StyledAddStorage = styled.form`
  background-color: #006daa;
`;
