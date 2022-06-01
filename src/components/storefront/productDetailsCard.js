import React from "react";
import { connect } from "react-redux";
//import { addToCart } from '../../store/actions/cart';
import { addProductToCart } from "../../store/reduxToolkitStore/actions/cart";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ products, product, addProductToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }} data-testid={`product-${product.productName}`}>
      <CardMedia
        component="img"
        height="160"
        image={product.imageUrl}
        alt={product.productName}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          data-testid={`product-name-${product.name}`}
        >
          {product.name}
        </Typography>
        <Typography
          variant="subtext1"
          color="text.secondary"
          data-testid={`product-description-${product.name}`}
        >
          {product.description}
        </Typography>
        <Typography
          mt={2}
          variant="h6"
          color="text.secondary"
          data-testid={`product-cost-${product.name}`}
        >
          Cost: {product.price}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          data-testid={`product-count-${product.name}`}
        >
          Amount in Stock:{" "}
          {
            products.find((productFromStore) => product === productFromStore)
              .inventoryCount
          }
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => addProductToCart(product)}
          data-testid={`addToCart-btn-${product.name}`}
        >
          Add to Cart
        </Button>
        <Button
          size="small"
          component={Link}
          to={`/products/${product.id}`}
          data-testid={`details-btn-${product.name}`}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.filteredProducts,
  };
};

// const mapDispatchToProps = dispatch => ({
//   addToCart: (product) => dispatch(addToCart(product)),
// });

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsCard);
