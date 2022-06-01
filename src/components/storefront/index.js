import React from "react";
import Categories from "./categories";
import ActiveCategory from "./activeCategory";
import Products from "./products";
import SimpleCart from "../cart/simpleCart";
import { Box, Divider } from "@mui/material";

const StoreFront = () => {
  return (
    <Box mt={3}>
      <Box
        mb={2}
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          flexWrap: "wrap",
          maxHeight: "100px",
        }}
      >
        <Categories />
        <SimpleCart />
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <ActiveCategory />
        <Products />
      </Box>
    </Box>
  );
};

export default StoreFront;
