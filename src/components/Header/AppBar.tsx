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
    <Stack
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <IconButton
        aria-label="search"
        size="large"
        sx={{ width: "50px", padding: "0" }}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>

      <Stack>
        <TextField
          sx={{
            width: "100%",
            height: "5px",
            fontSize: {
              xs: 4,
              sm: 10,
              md: 15,
            },
          }}
          id="standard-basic"
          label="Search..."
          variant="standard"
        />
      </Stack>
    </Stack>
  );
}
