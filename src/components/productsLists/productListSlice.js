import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "placki", price: 21 },
    { id: 2, name: "kaczki", price: 37 },
    { id: 3, name: "flaczki", price: 2137 },
  ],
};

const productListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export function fetchProducts() {
  return async function (dispatch, getState) {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch({ type: "productsList/setProducts", payload: data });
  };
}

export default productListSlice.reducer;
