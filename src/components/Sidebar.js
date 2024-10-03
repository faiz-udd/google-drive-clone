// src/components/Sidebar.js
import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, Box, Typography, LinearProgress } from "@mui/material";
import {
  Dashboard,
  People,
  Star,
  Delete,
  Settings,
  Help,
  CloudUpload,
  CreateNewFolder,
} from "@mui/icons-material";

const Sidebar = () => {
  const items = [
    { text: "My Drive", icon: <Dashboard color="primary" /> },
    { text: "Shared with me", icon: <People color="primary" /> },
    { text: "Starred", icon: <Star color="primary" /> },
    { text: "Trash", icon: <Delete color="primary" /> },
  ];

  const bottomItems = [
    { text: "Settings", icon: <Settings color="primary" /> },
    { text: "Help", icon: <Help color="primary" /> },
  ];

  // Mock storage data
  const storageUsed = 75; // in GB
  const totalStorage = 100; // in GB

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 240 },
        bgcolor: "#f9f9f9",
        height: "calc(100vh - 64px)", // Adjust height based on Navbar
        position: "sticky",
        top: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: 2,
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* Storage Usage */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Storage Used: {storageUsed} GB / {totalStorage} GB
        </Typography>
        <LinearProgress variant="determinate" value={(storageUsed / totalStorage) * 100} sx={{ height: 10, borderRadius: 5, mt: 1 }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
