import Link from 'next/link';
import ArrowIcon from '../public/assets/arrow-icon.svg';
import WarningIcon from '../public/assets/warning.svg';
import styled from 'styled-components';

export default function WarningPage({ warningItems }) {
  return (
    <StyledCardContainer>
      <StyledTitle>
        <WarningIcon />
      </StyledTitle>

      <StyledItemCounter></StyledItemCounter>
      <StyledArrowLink href="/warning">
        <ArrowIcon />
      </StyledArrowLink>

      <StyledItemCounter>
        {warningItems.length} {warningItems.length === 1 ? 'item' : 'items'}
      </StyledItemCounter>
    </StyledCardContainer>
  );
}
const StyledCardContainer = styled.section`
  border-radius: 5px;
  background-color: #fcfffd;
  width: 90vw;
  height: 75px;
  margin: 0 auto 2% auto;
  display: grid;
  grid-template-areas:
    'name  items . link'
    'name  items  . link';
  grid-template-rows: 50% 50%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
`;
const StyledTitle = styled.h2`
  grid-area: name;
  margin: 4% 1% 1% 4%;
  align-self: center;
  font-size: 1.5rem;
`;
const StyledItemCounter = styled.p`
  grid-area: items;
  text-align: center;
  align-self: center;
`;
const StyledArrowLink = styled(Link)`
  grid-area: link;
  align-self: center;
  justify-self: end;
  width: 50px;
`;
