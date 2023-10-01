import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { JoinButton } from './styled';
import JoinUs from './JoinUs';

export default function FooterButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <JoinButton onClick={handleOpen}>Join Us</JoinButton>

      <Modal open={open} onClose={handleClose}>
        <JoinUs />
      </Modal>
    </div>
  );
}
