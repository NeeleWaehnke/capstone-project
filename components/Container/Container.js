import styled from 'styled-components';

export default function Container({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
const StyledDiv = styled.div`
  @media (min-height: 700px) {
    margin-top: 110px;
  }
  @media (min-height: 1000px) {
    margin-top: 170px;
  }
  @media (max-width: 340px) {
    margin-top: 140px;
  }
  margin-top: 100px;
  margin-bottom: 100px;
`;
