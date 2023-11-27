import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "placki", price: 21 },
    { name: "kaczki", price: 37 },
    { name: "flaczki", price: 2137 },
  ],
};

const productListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
});

console.log(productListSlice);

export default productListSlice.reducer;
