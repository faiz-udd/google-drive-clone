// src/components/AddNewMenu.js
import React, { useState } from "react";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { Add, CloudUpload, CreateNewFolder } from "@mui/icons-material";

const AddNewMenu = ({ onAddFile, onAddFolder }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAddClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddFile = () => {
    onAddFile();
    handleClose();
  };

  const handleAddFolder = () => {
    onAddFolder();
    handleClose();
  };

  return (
    <>
      <IconButton color="primary" onClick={handleAddClick} sx={{ position: "fixed", bottom: 80, right: 30, bgcolor: "#1a73e8", color: "#fff", "&:hover": { bgcolor: "#1669c1" } }}>
        <Add />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleAddFile}>
          <ListItemIcon>
            <CloudUpload fontSize="small" />
          </ListItemIcon>
          <ListItemText>Upload File</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAddFolder}>
          <ListItemIcon>
            <CreateNewFolder fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create New Folder</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AddNewMenu;
