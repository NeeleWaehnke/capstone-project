import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '../public/assets/hamburger-menu.svg';
import CloseIcon from '../public/assets/close-icon.svg';
import { useState } from 'react';

export default function Navbar({ storages }) {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const isactive = {
    yes: '#Ff3c1a',
    no: 'transparent',
  };

  return (
    <StyledNav>
      <StyledButton
        onClick={() => {
          setIsMenuActive((curr) => !curr);
        }}
        isMenuActive={isMenuActive}
      >
        {isMenuActive ? <CloseIcon /> : <MenuIcon />}
      </StyledButton>
      <StyledNavMenu>
        <StyledLink
          href="/"
          key="Home"
          prop={router.asPath === '/' ? { isactive } : null}
        >
          Home
        </StyledLink>
        {storages.map((storage) => {
          return (
            <StyledLink
              key={storage.name}
              href={`/${storage.name}`}
              prop={router.asPath === `/${storage.name}` ? { isactive } : null}
            >
              {storage.name}
            </StyledLink>
          );
        })}
      </StyledNavMenu>
      {isMenuActive && (
        <StyledNavMenuMobile>
          <StyledLinkMobile href="/" key="Home">
            Home
          </StyledLinkMobile>
          {storages.map((storage) => {
            return (
              <StyledLinkMobile
                key={storage.name}
                href={`/${storage.name}`}
                prop={
                  router.asPath === `/${storage.name}` ? { isactive } : null
                }
              >
                {storage.name}
              </StyledLinkMobile>
            );
          })}
        </StyledNavMenuMobile>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: #003559;
  width: 100%;
  grid-area: nav;
  align-self: end;
  justify-self: end;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 22px;
  background-color: ${(props) => (props.prop ? '#ff3c1a' : 'transparent')};
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledNavMenu = styled.section`
  @media (max-width: 600px) {
    display: none;
  }
  float: right;
  display: flex;
  margin-right: 2%;
  align-self: end;
  justify-self: end;
`;
const StyledNavMenuMobile = styled.section`
  @media (max-width: 600px) {
    display: flex;
  }

  position: fixed;
  top: 5%;
  right: 0;
  height: fit-content;
  width: 50%;
  flex-flow: column nowrap;
  justify-content: center;
  background-color: #003559;
`;
const StyledLinkMobile = styled(StyledLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  margin-right: 2%;
  text-decoration: none;
  font-size: 17px;
  background-color: ${(props) => (props.prop ? '#ff3c1a' : 'transparent')};
  @media (min-width: 600px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  z-index: 555;
  position: relative;
  top: ${(props) => (props.isMenuActive ? '0' : '-5px')};
  border: none;
  background-color: transparent;
  margin: 2%;
  display: none;
  @media (max-width: 600px) {
    display: block;
    float: right;
  }
`;
