import AddButton from './AddButton';
import AddForm from './AddForm';
import { useState } from 'react';
import styled from 'styled-components';

export default function Footer({ onAddItem }) {
  const [addActive, setAddActive] = useState(false);
  return (
    <StyledSection>
      {addActive === true ? (
        <AddForm onAddItem={onAddItem} setAddActive={setAddActive} />
      ) : (
        <AddButton setAddActive={setAddActive} />
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
