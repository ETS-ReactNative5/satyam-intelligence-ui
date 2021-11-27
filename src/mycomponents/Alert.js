import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function CustomAlert({message,severity}) {
  return (
      <Alert severity={severity}>{message}</Alert>
  );
}