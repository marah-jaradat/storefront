import axios from "axios";

export const selectCategory = (category) => async (dispatch) => {
  dispatch({
    type: "SELECT_CATEGORY",
    payload: category,
  });
};

export const getCategories = () => async (dispatch) => {
  let res = null;
  try {
    res = await axios.get(`${process.env.REACT_APP_API_SERVER}/categories`);
  } catch (err) {
    console.log(err);
  }

  dispatch({
    type: "GET_CATEGORIES",
    payload: res?.data?.results,
  });
};
