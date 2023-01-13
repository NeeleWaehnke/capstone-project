import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function Header({ storages }) {
  const router = useRouter();

  return (
    <StyledHeader>
      <StyledTitle onClick={() => router.push('/')}>My Fridge</StyledTitle>
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
  grid-template-rows: 12vh;
  justify-items: start;
`;
const StyledTitle = styled.h1`
  color: #fcfffd;

  grid-area: heading;
  justify-self: start;

  margin-left: 3%;
`;
