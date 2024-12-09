import React, { createContext, useState, useCallback } from "react";

export const UIContext = createContext({
  snackbar: {
    isOpen: false,
    hideDuration: 6000,
    onClose: () => {},
    message: "success",
    showMessage: () => {},
  },
});

export const UIProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const onClose = () => {
    setOpen(false);
    setMessage("");
    setSeverity("");
  };

  const showMessage = ({ type = "info", message = "" }) => {
    console.log(type, message);
    setOpen(true);
    setMessage(message);
    setSeverity(type);
  };

  return (
    <UIContext.Provider
      value={{
        snackbar: {
          isOpen: open,
          hideDuration: 6000,
          onClose,
          message,
          showMessage,
          severity,
        },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

/*
<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
  action={action}
/>
*/
