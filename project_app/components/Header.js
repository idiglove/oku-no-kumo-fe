import React from 'react';
import NavBarButtons from './NavBarButtons';
// import JoinUs from './JoinUs';
// import FooterButton from './FooterButton';
import Button from '@mui/material/Button';
import { Container, AppBar, NavBarWrapper, HeaderButtons } from './styled';
import Image from 'next/image';
import styled from 'styled-components';

export default function Header(props) {
  return (
    <>
      <AppBar height={props.height}>
        <NavBarWrapper>
          <Container>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              left={50}
              right={50}
              alt="Ain't Board Logo"
            />
            <HeaderButtons>
              <HeaderButton>Login</HeaderButton>
              <HeaderButton>JoinUs</HeaderButton>
              {/* <FooterButton>JoinUs</FooterButton> */}
            </HeaderButtons>
            <div>
              <NavBarButtons />
            </div>
          </Container>
        </NavBarWrapper>
        {props.header}
      </AppBar>
    </>
  );
}

const HeaderButton = styled(Button)`
  background-color: rgb(250, 250, 235) !important;
  color: rgb(0, 0, 0) !important;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04) !important;
  }
`;

const FooterButton = styled(Button)`
  background-color: rgb(250, 250, 235) !important;
  color: rgb(0, 0, 0) !important;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04) !important;
  }
`;
