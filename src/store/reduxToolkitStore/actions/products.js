import axios from "axios";
import { getProducts } from "../slices/products.slice";

export const fetchProducts = () => async (dispatch) => {
  let res = null;
  try {
    res = await axios.get(`${process.env.REACT_APP_API_SERVER}/products`);
  } catch (err) {
    console.log(err);
  }

  dispatch(getProducts(res?.data?.results));
};
