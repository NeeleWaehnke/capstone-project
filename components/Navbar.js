import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { linkTo } from '@storybook/addon-links';
// import { useState } from 'react';

export default function Navbar({ storages }) {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledLink href="/">Home</StyledLink>

      {storages.map((storage) => {
        return (
          <StyledLink
            href={`/${storage.name}`}
            style={{
              backgroundColor:
                router.asPath === `/${storage.name}` ? 'grey' : 'transparent',
            }}
          >
            {storage.name}
          </StyledLink>
        );
      })}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: #003559;
  min-height: 7vh;
  padding: 2%;
  margin-bottom: 2%;
  display: flex;
  padding: 0;
  justify-content: center;
  gap: 2%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fcfffd;
  margin: 1%;
  float: left;

  text-align: center;
`;
