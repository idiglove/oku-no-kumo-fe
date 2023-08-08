import React from 'react';
import { SessionContext } from './SessionContext';
import { Stack, Alert } from '@mui/material';

function LogoutComponent() {
  const isLoggedOut = true;
  const handleLogout = () => {};

  return (
    <SessionContext.Provider value={{ isLoggedOut, handleLogout }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">You have been logged out successfully.</Alert>
      </Stack>
    </SessionContext.Provider>
  );
}

export default LogoutComponent;
