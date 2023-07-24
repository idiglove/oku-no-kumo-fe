import { useState } from 'react';
import Button from '@mui/material/Button';
import JoinUs from './JoinUs';
import Modal from '@mui/material/Modal';

export default function FooterButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>JoinUs</Button>
      <Modal open={open} onClose={handleClose}>
        <JoinUs />
      </Modal>
    </div>
  );
}
