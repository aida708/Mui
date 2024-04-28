import { useState } from "react";
import React from "react";
import { Menu, MenuItem, Button } from "@mui/material";

export default function MyMenuu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        OPEN MENU
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </div>
  );
}
