"use client";

import { Fab, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Tooltip title="Delete">
        <IconButton>
          <Fab color="secondary" aria-label="edit">
            <ModeEditOutlineIcon />
          </Fab>
        </IconButton>
      </Tooltip> */}

      {/* <div>
        <Button onClick={(e) => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div> */}
    </>
  );
};

export default Add;
