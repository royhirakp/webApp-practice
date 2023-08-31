import React from "react";
import { Typography, Stack } from "@mui/material";
import Image from "next/image";
import logo from "@/assec/headerLogo.png";
const HeaderIcon = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "inherit",
        justifyContent: "space-between",
      }}
    >
      {/* <Stack> */}
      <Image style={{ minWidth: 69 }} height={50} src={logo} alt="hii" />
      {/* </Stack> */}
      <Typography
        sx={{
          fontSize: {
            xs: 15,
            md: 20,
            xl: 30,
          },
          //   ml: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        // variant="h2"
        // component="h2"
      >
        Web App
      </Typography>
    </Stack>
  );
};

export default HeaderIcon;
