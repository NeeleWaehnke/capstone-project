import AddIcon from '../public/assets/add-circle.svg';
import styled from 'styled-components';

export default function AddButton({ onClick }) {
  return (
    <>
      <StyledButton onClick={onClick}>
        <AddIcon />
      </StyledButton>
    </>
  );
}
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  margin-bottom: 2%;
`;
