import Navbar from '../components/Navbar';

import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Header({ storages }) {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledTitle onClick={() => router.push('/')}>Food at Home</StyledTitle>

      <Navbar storages={storages} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #003559;
  position: fixed;
  top: 0;
  width: 100vw;
  display: grid;
  grid-template-areas: 'heading nav';
  grid-template-columns: 45% 55%;
  grid-template-rows: 100px;
  justify-items: start;
  z-index: 555;
  height: 100px;
  @media (max-width: 340px) {
    height: 110px;
  }
`;
const StyledTitle = styled.h1`
  color: #fcfffd;
  grid-area: heading;
  justify-self: start;
  background-color: #003559;
  margin-left: 3%;
  height: auto;
`;
