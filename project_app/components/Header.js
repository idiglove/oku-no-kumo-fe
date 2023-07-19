import React, { createContext, useState } from 'react';
import NavBarButtons from './NavBarButtons';
// import JoinUs from './JoinUs';
// import FooterButton from './FooterButton';
import Button from '@mui/material/Button';
import { Container, AppBar, NavBarWrapper, HeaderButtons } from './styled';
import Image from 'next/image';
import styled from 'styled-components';

import UserLogin from './UserLogin';
import Modal from '@mui/material/Modal';
// import {
//   Container,
//   AppBar,
//   NavBarWrapper,
//   HeaderButtons,
//   HeaderButton
// } from './styled';
// import Image from 'next/image';

export const SessionContext = createContext();

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <HeaderButton onClick={handleOpen}>Login</HeaderButton>
              <Modal open={open} onClose={handleClose}>
                <UserLogin />
              </Modal>
              <HeaderButton>Join Us!</HeaderButton>
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
