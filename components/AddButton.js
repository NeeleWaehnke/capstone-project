import AddIcon from '../public/assets/add-icon.svg';
import styled from 'styled-components';

export default function AddButton({ onClick }) {
  return (
    <>
      <StyledButton onClick={onClick}>
        <StyledAdd />
      </StyledButton>
    </>
  );
}
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;
const StyledAdd = styled(AddIcon)`
  fill: #ff4d52;
`;
