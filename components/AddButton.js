import AddIcon from '../public/assets/add-circle.svg';
import styled from 'styled-components';

export default function AddButton({ onClick }) {
  return (
    <>
      <StyledButton onClick={onClick} aria-label="Add new Item">
        <AddIcon />
      </StyledButton>
    </>
  );
}
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 2%;
  margin-right: 2%;
  position: fixed;
  right: 0;
  bottom: 0;
`;
