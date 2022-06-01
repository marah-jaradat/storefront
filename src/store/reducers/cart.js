const getCartStorage = () => {
  let storage = localStorage.getItem("cart");

  if (!storage) return [];
  storage = JSON.parse(storage);

  return storage;
};
let initialState = {
  products: getCartStorage(),
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      let cartItem = action.payload;

      if (state.products.includes(cartItem)) {
        let updatedProducts = state.products.map((product) => {
          if (product === cartItem) {
            ++product.amount;
          }
          return product;
        });
        updateCartStorage(updatedProducts);
        return state;
      } else {
        cartItem.amount = 1;
      }
      let updatedProducts = [...state.products, cartItem];
      updateCartStorage(updatedProducts);
      return { ...state, products: updatedProducts };
    }
    case "REMOVE_FROM_CART": {
      let updatedProducts = state.products.filter((product) => {
        if (product === action.payload && product.amount > 0) {
          --product.amount;
          return product.amount > 0;
        }
        return product !== action.payload;
      });
      updateCartStorage(updatedProducts);
      return { ...state, products: updatedProducts };
    }

    default:
      return state;
  }
}

const updateCartStorage = (products) => {
  localStorage.setItem("cart", JSON.stringify(products));
};

export default cartReducer;
