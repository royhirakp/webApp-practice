"use client";

import React, { useState } from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Mail, NotificationAdd } from "@mui/icons-material";
import { theme } from "@/app/home2/theme";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const Icons = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "none",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: "2px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const NavBar = () => {
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  return (
    <AppBar position="static">
      <Stack>
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            DAAA
          </Typography>
          <AdbIcon sx={{ display: { sm: "none", xs: "block" } }} />
          <Search>
            {" "}
            <InputBase placeholder="search.." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail color="action" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationAdd color="action" />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
              onClick={() => setOpen(true)}
            />
          </Icons>
        </StyledToolbar>

        {/*  */}

        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Typography variant="body1"> Hiark </Typography>
        </UserBox>
      </Stack>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
