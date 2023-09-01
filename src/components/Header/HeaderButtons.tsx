"use client";
import React from "react";
import { Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
const HeaderButtons = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: {
            md: "block",
            xs: "none",
          },
        }}
      >
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </Stack>

      {/* menu button  */}

      <Stack sx={{ width: "10%" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
          sx={{
            mr: 2,
            width: "100%",
            display: {
              md: "none",
            },
            [theme.breakpoints.down("sm")]: {
              width: "auto", // Adjust this value as needed
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Stack>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderButtons;
