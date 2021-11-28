import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function CustomSkeleton() {
  return (
    <Box sx={{ width: 130 }}>
      <Skeleton animation="wave" />
    </Box>
  );
}