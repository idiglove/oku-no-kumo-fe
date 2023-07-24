import React, { createContext, useState } from 'react';
import NavBarButtons from './NavBarButtons';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { Container, AppBar, NavBarWrapper, HeaderButtons } from './styled';
import Image from 'next/image';
import styled from 'styled-components';
import HeaderJoin from './HeaderJoin';
import UserLogin from './UserLogin';
import Modal from '@mui/material/Modal';

export const SessionContext = createContext();
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {},
  '& .MuiDialogActions-root': {}
}));

function BootstrapDialogTitle() {
  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      style={{ padding: '30px', backgroundColor: 'blue' }}
    >
      <IconButton
        aria-label="close"
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
}

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
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle
                  id="customized-dialog-title"
                  onClose={handleClose}
                ></BootstrapDialogTitle>
              </BootstrapDialog>
              <HeaderJoin />
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
