import { useState } from 'react';
import Button from '@mui/material/Button';
import UserLogin from './UserLogin';
import Modal from '@mui/material/Modal';

export default function HeaderButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <UserLogin />
      </Modal>
    </div>
  );
}
