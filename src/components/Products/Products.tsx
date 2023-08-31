import React from "react";
import ProductCard from "./ProductCard";
import logo from "@/assec/headerLogo.png";
import Box from "@mui/material/Box";
const Products = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "90%",
        textAlign: "center",
        margin: "0px auto",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
        return <ProductCard key={i * 0.25} />;
      })}
    </Box>
  );
};

export default Products;
