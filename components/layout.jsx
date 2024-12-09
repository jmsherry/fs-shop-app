import React, { use } from "react";
import {
  Typography,
  Container,
  Box,
  Snackbar,
  Alert,
  IconButton,
  CloseIcon,
} from "@/components/mui";
import Header from "@/components/header";
import useUI from "@/components/contexts/UI.hook";

function layout({ children }) {
  const { snackbar: {isOpen:open, hideDuration, onClose:handleClose, severity, message, showMessage }} = useUI();
  // console.log(open, hideDuration, handleClose, severity, message, showMessage);
  return (
    <Box>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          <Typography sx={{ margin: 0 }}>{message}</Typography>
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default layout;
