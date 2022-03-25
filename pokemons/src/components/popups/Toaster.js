import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';

export default function Toaster(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.result.isOpen);
  }, [props.result.isOpen])

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert
              elevation={6}
              ref={ref} variant="filled"
              {...props}
            />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={ open }
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={ props.result.success }
        sx={{ width: '100%' }}
      >
        { props.result.text }
      </Alert>
    </Snackbar>
  );
}