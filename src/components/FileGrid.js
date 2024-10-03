// src/components/FileGrid.js
import React from "react";
import { Grid, Card, CardContent, Typography, CardActionArea } from "@mui/material";
import { Description, Folder, TableChart, Slideshow } from "@mui/icons-material";

const getIcon = (type) => {
  switch (type) {
    case "document":
      return <Description sx={{ fontSize: 50, color: "#1a73e8" }} />;
    case "folder":
      return <Folder sx={{ fontSize: 50, color: "#34a853" }} />;
    case "spreadsheet":
      return <TableChart sx={{ fontSize: 50, color: "#fbbc05" }} />;
    case "presentation":
      return <Slideshow sx={{ fontSize: 50, color: "#ea4335" }} />;
    default:
      return <Description sx={{ fontSize: 50, color: "#1a73e8" }} />;
  }
};

const FileGrid = ({ files }) => {
  return (
    <Grid container spacing={2} padding={2}>
      {files.map((file) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={file.id}>
          <Card sx={{ height: "100%" }}>
            <CardActionArea sx={{ padding: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              {getIcon(file.type)}
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="body2" noWrap>
                  {file.name}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Modified: {file.modified}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FileGrid;
