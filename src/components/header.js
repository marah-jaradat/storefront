import React from "react";
import { connect } from "react-redux";
import { Box, AppBar, Toolbar, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const Header = ({ cartSize }) => {
  return (
    <AppBar elevation={8} data-testid="header">
      <Toolbar>
        <MenuItem component={Link} to={"/"} sx={{ fontSize: "2rem" }} m={2}>
          Virtual Storefront
        </MenuItem>
        <Box sx={{ flexGrow: 1 }}></Box>
        <MenuItem mr={2} component={Link} to={`/cart`} comp>
          CART ({cartSize})
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    cartSize: state.cart.products.length,
  };
};

export default connect(mapStateToProps)(Header);
