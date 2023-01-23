import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';
import LogoutIcon from '../public/assets/logout.svg';

export default function LoginSection() {
  const { data: session } = useSession();

  return (
    <StyledLoginSection>
      {session ? (
        <>
          <p>Welcome {session?.user?.name}!</p>
          <StyledLogoutButton onClick={signOut} aria-label="Sign out">
            <LogoutIcon />
          </StyledLogoutButton>
        </>
      ) : (
        <StyledLoginButton onClick={() => signIn()}>Sign in</StyledLoginButton>
      )}
    </StyledLoginSection>
  );
}

const StyledLoginSection = styled.section`
  position: fixed;
  top: 100px;
  height: 45px;
  background-color: #003559;
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  color: #fcfffd;
  z-index: 444;
  @media (max-width: 340px) {
    top: 110px;
  }
`;

const StyledLoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ff3c1a;
  color: #fcfffd;
  width: 90px;
  margin: 5px;
`;

const StyledLogoutButton = styled(StyledLoginButton)`
  background-color: transparent;
`;
