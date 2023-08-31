"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
// import SearchIcon from "@mui/icons-material/Search";

export default function SearchAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="open drawer"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="div"
    //         sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
    //       >
    //         MUI
    //       </Typography>

    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Stack sx={{ display: "flex", flexDirection: "row" }}>
      <IconButton aria-label="search" size="large">
        <SearchIcon fontSize="inherit" />
      </IconButton>

      <TextField
        sx={{
          width: {
            xs: "5rem",
            sm: "15rem",
            md: "30rem",
            xl: "40rem",
          },
        }}
        id="standard-basic"
        label="Search...."
        variant="standard"
      />
    </Stack>
  );
}
