import { Close } from "@mui/icons-material";
import { IconButton, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import "./shared.css";

function Popup({ open, children, setOpen, title }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper className="popup">
        <div className="popup-header">
          <Typography className="title">{title}</Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </div>
        <div className="popup-body">{children}</div>
      </Paper>
    </Modal>
  );
}

export default Popup;
