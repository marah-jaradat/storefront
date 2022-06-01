let initialState = {
  products: [],
  filteredProducts: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT_CATEGORY":
      if (action.payload.id) {
        let filteredProducts = state.products.filter(
          (product) => product.categoryId === action.payload.id.toString()
        );
        return { ...state, filteredProducts };
      }
      return { ...state, filteredProducts: state.products };
    case "ADD_TO_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product === action.payload) {
            --product.inventoryCount;
          }
          return product;
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product === action.payload) {
            ++product.inventoryCount;
          }
          return product;
        }),
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
}

export default productsReducer;
