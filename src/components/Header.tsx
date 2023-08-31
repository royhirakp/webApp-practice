import React from "react";
import { Box } from "@mui/material";
import SearchAppBar from "./Header/AppBar";
import HeaderButtons from "./Header/HeaderButtons";
import HeaderIcon from "./Header/HeaderIcon";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // border: "1px solid",
        // backgroundColor: "#a5a5d0",
        boxSizing: "border-box",
      }}
    >
      <HeaderIcon />
      <SearchAppBar />
      <HeaderButtons />
    </Box>
  );
};

export default Header;
