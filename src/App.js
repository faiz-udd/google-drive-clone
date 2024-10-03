// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FileGrid from "./components/FileGrid";
import Footer from "./components/Footer";
import AddNewMenu from "./components/AddNewMenu";
import { Box, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import filesData from "./data/files";

function App() {
  const [files, setFiles] = useState(filesData);
  const [openFileDialog, setOpenFileDialog] = useState(false);
  const [openFolderDialog, setOpenFolderDialog] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFolderName, setNewFolderName] = useState("");

  // Calculate storage used
  const storageUsed = files.length * 5; // Assume each file/folder uses 5GB
  const totalStorage = 100;

  const handleAddFile = () => {
    setOpenFileDialog(true);
  };

  const handleAddFolder = () => {
    setOpenFolderDialog(true);
  };

  const handleFileSubmit = () => {
    if (newFileName.trim() === "") return;
    const newFile = {
      id: files.length + 1,
      name: newFileName,
      type: "document", // Default type
      modified: new Date().toISOString().split("T")[0],
    };
    setFiles([...files, newFile]);
    setNewFileName("");
    setOpenFileDialog(false);
  };

  const handleFolderSubmit = () => {
    if (newFolderName.trim() === "") return;
    const newFolder = {
      id: files.length + 1,
      name: newFolderName,
      type: "folder",
      modified: new Date().toISOString().split("T")[0],
    };
    setFiles([...files, newFolder]);
    setNewFolderName("");
    setOpenFolderDialog(false);
  };

  return (
    <div>
      <Navbar />
      <Box display="flex" minHeight="calc(100vh - 64px - 40px)">
        <Sidebar />
        <Box flexGrow={1} marginTop={2}>
          <FileGrid files={files} />
        </Box>
      </Box>
      <Footer />
      <AddNewMenu onAddFile={handleAddFile} onAddFolder={handleAddFolder} />

      {/* Dialog for Adding New File */}
      <Dialog open={openFileDialog} onClose={() => setOpenFileDialog(false)}>
        <DialogTitle>Add New File</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="File Name"
            type="text"
            fullWidth
            variant="standard"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFileDialog(false)}>Cancel</Button>
          <Button onClick={handleFileSubmit}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Adding New Folder */}
      <Dialog open={openFolderDialog} onClose={() => setOpenFolderDialog(false)}>
        <DialogTitle>Create New Folder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Folder Name"
            type="text"
            fullWidth
            variant="standard"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenFolderDialog(false)}>Cancel</Button>
          <Button onClick={handleFolderSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
