import axios from "axios";

export const getProducts = () => async (dispatch) => {
  let res = null;
  try {
    res = await axios.get(`${process.env.REACT_APP_API_SERVER}/products`);
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: "GET_PRODUCTS",
    payload: res?.data?.results,
  });
};
