import { configureStore } from "@reduxjs/toolkit";
import productListSliceReducer from "./components/productsLists/productListSlice";

const store = configureStore({
  reducer: {
    productList: productListSliceReducer,
  },
});

export default store;
