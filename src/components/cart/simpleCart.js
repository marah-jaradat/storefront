import React from "react";
import { connect } from "react-redux";
//import { removeFromCart } from '../../store/actions/cart';
import { removeProductFromCart } from "../../store/reduxToolkitStore/actions/cart";
import CancelIcon from "@mui/icons-material/Cancel";
import { Paper, Typography, Box } from "@mui/material";

const Simplecart = (props) => {
  if (props.products.length > 0) {
    return (
      <Paper
        variant="outline"
        className="cart"
        sx={{ height: `${props.products.length * 43 + 20}px` }}
      >
        {props.products.map((product, idx) => {
          return (
            <Box
              key={idx}
              mt={2}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Typography
                variant="subtitle1"
                pl={2}
                pr={2}
                data-testid={`cart-amount-${product.name}`}
              >
                [{props.amounts[idx]}]
              </Typography>
              <Typography
                variant="subtitle1"
                pl={2}
                pr={2}
                sx={{ flexGrow: 1 }}
                data-testid={`cart-product-${product.name}`}
              >
                {product.name.length < 14
                  ? product.name
                  : product.name.substring(0, 14) + "..."}
              </Typography>
              <CancelIcon
                sx={{ color: "crimson", marginRight: "10px" }}
                onClick={() => props.removeProductFromCart(product)}
                data-testid={`cart-product-removeBtn-${product.name}`}
              />
            </Box>
          );
        })}
      </Paper>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    amounts: state.cart.products.map((product) => {
      return product.amount;
    }),
  };
};

// const mapDispatchToProps = dispatch => ({
//   removeFromCart: (product) => dispatch(removeFromCart(product)),
// });

const mapDispatchToProps = {
  removeProductFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Simplecart);
