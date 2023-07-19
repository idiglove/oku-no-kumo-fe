import React from 'react';
import { SessionContext } from './SessionContext'; // Assuming SessionContext is imported from a separate file
import { Stack, Alert } from '@mui/material'; // Assuming you're using Material-UI

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
