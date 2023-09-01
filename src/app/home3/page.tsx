import React from "react";
import { Box } from "@mui/material";
import SideBar from "@/components/home2/SideBar";
import Feed from "@/components/home2/Feed";
import RightBar from "@/components/home2/RightBar";
import { Button, Stack, Container, Theme, styled } from "@mui/material";
import NavBar from "@/components/home2/NavBar";

const page = () => {
  return (
    <Box>
      <NavBar />
      <Stack
        direction="row"
        // sx={{ paddingLeft: "10%", paddingRight: "10%" }}
        spacing={2}
        justifyContent="space-between"
      >
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
};

export default page;
