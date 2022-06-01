import React from "react";
import { connect } from "react-redux";
import ProductDetailsCard from "./productDetailsCard";
import { Box, Typography } from "@mui/material";

const Products = (props) => {
  return (
    <Box
      mt={3}
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      data-testid="product-list"
    >
      {props.products?.length === 0 && (
        <Typography variant="h5">
          Nothing is currently being offered from this category
        </Typography>
      )}
      {props.products?.map((product, idx) => {
        return product.inventoryCount > 0 ? (
          <ProductDetailsCard key={idx} product={product} />
        ) : null;
      })}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredProducts,
    counts: state.products.filteredProducts.map((product) => {
      return product.inventoryCount;
    }),
  };
};

// const mapDispatchToProps = dispatch => ({
//   selectCategory: (category) => dispatch({type: 'SELECT_CATEGORY', payload: category}),
// });

export default connect(mapStateToProps)(Products);
