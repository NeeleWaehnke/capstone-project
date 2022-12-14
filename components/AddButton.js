import AddIcon from '../public/assets/add-icon.svg';
import styled from 'styled-components';

export default function AddButton({ setAddActive }) {
  return (
    <>
      <StyledButton
        onClick={() => {
          setAddActive(true);
          console.log(true);
        }}
      >
        <StyledAdd />
      </StyledButton>
    </>
  );
}
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  justify-content: right;
`;
const StyledAdd = styled(AddIcon)`
  fill: #ff4d52;
`;
