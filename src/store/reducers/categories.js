let initCategory = {
  displayName: "All",
  normalizedName: "all",
  description: "",
};

let initialState = {
  categories: [initCategory],
  currentCategory: initCategory,
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CATEGORY":
      if (action.payload.displayName === "All") {
        return { categories: state.categories, currentCategory: initCategory };
      } else if (state.categories.includes(action.payload)) {
        return {
          categories: state.categories,
          currentCategory: action.payload,
        };
      } else {
        return {
          categories: state.categories,
          currentCategory: state.currentCategory,
        };
      }

    case "GET_CATEGORIES":
      return { ...state, categories: state.categories.concat(action.payload) };
    default:
      return state;
  }
}

export default categoriesReducer;
