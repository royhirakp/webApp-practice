"use client";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Button, Stack, Container, Box, Theme, styled } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SideBar from "@/components/home2/SideBar";
import Feed from "@/components/home2/Feed";
import RightBar from "@/components/home2/RightBar";
import NavBar from "@/components/home2/NavBar";
import Add from "@/components/home2/Add";
const page = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Box>
      {/* nav bar */}
      {/* <NavBar /> */}
      {/* <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <RightBar />
        </Stack> */}
      {/* <Add /> */}
      hirsl
    </Box>
    // </ThemeProvider>
  );
};

export default page;
