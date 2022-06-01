import axios from "axios";

export const addToCart = (product) => async (dispatch) => {
  product.action = "decrement";

  let res = null;
  try {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/products`, product);
  } catch (err) {
    console.log(err);
  }

  //shouldn't ever happen
  if (res?.data?.inventoryCount < 1) {
    return;
  }

  dispatch({
    type: "ADD_TO_CART",
    payload: product,
  });
};

export const removeFromCart = (product) => async (dispatch) => {
  product.action = "increment";

  try {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/products`, product);
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: "REMOVE_FROM_CART",
    payload: product,
  });
};
