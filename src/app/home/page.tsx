import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header";
import Products from "@/components/Products/Products";
const page = () => {
  return (
    <Box
    // minHeight="100%"
    // sx={
    //   {
    //     // boxSizing: "border-box",
    //     // padding: "20px",
    //     // margin: 3,
    //     // padding: {
    //     //   xs: 1,
    //     //   sm: 2,
    //     //   md: 3,
    //     //   lg: 4,
    //     //   xl: 5,
    //     // },
    //   }
    // }
    >
      <Header />
      <Products />
    </Box>
  );
};

export default page;
