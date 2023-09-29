import { useState } from 'react';
import { JoinButton } from './styled';
import JoinUs from './JoinUs';
import Modal from '@mui/material/Modal';

export default function FooterButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <JoinButton onClick={handleOpen}>Join Us</JoinButton>
      <>
        <Modal open={open} onClose={handleClose}>
        <JoinUs />
      </Modal>
      </>
    </div>
  );
}
