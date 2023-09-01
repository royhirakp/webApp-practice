import React from "react";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";
import logo from "@/assec/headerLogo.png";
const HeaderIcon = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { sm: "row" },
        justifyContent: "space-between",
      }}
    >
      <Stack>
        <Image src={logo} alt="hii" />
      </Stack>
      <Typography
        sx={{
          fontSize: {
            xs: 10,
            md: 15,
            lg: 20,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // variant="h2"
        // component="h2"
      >
        <b> Web App</b>
      </Typography>
    </Stack>
  );
};

export default HeaderIcon;
