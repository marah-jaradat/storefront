import axios from "axios";
import { addToCart, removeFromCart } from "../slices/cart.slice";
import { fetchProducts } from "./products";

export const addProductToCart = (product) => async (dispatch) => {
  let updatedProduct = Object.assign({}, product);
  updatedProduct.action = "decrement";
  let res = null;
  try {
    await axios.put(
      `${process.env.REACT_APP_API_SERVER}/products`,
      updatedProduct
    );
  } catch (err) {
    console.log(err);
  }

  //shouldn't ever happen
  if (res?.data?.inventoryCount < 1) {
    return;
  }
  dispatch(fetchProducts());
  dispatch(addToCart(updatedProduct));
};

export const removeProductFromCart = (product) => async (dispatch) => {
  let updatedProduct = Object.assign({}, product);
  updatedProduct.action = "increment";

  try {
    await axios.put(
      `${process.env.REACT_APP_API_SERVER}/products`,
      updatedProduct
    );
  } catch (err) {
    console.log(err);
  }
  dispatch(fetchProducts());
  dispatch(removeFromCart(updatedProduct));
};
