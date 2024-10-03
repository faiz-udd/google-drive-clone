// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f1f3f4",
        p: 2,
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Storage Used: 75 GB / 100 GB
      </Typography>
    </Box>
  );
};

export default Footer;
