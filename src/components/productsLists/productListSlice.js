import { createSlice } from "@reduxjs/toolkit";

const apiURL = "https://fakestoreapi.com";

const initialState = {
  activeCategory: "all",
  categories: [],
  products: [],
};

const productListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = productListSlice.actions;

export function fetchProducts(category = "all") {
  return async function (dispatch, getState) {
    let url;
    if (category === "all") {
      url = `${apiURL}/products`;
    } else {
      url = `${apiURL}/products/category/${category}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "productsList/setProducts", payload: data });
  };
}

export function fetchCategories() {
  return async function (dispatch, getState) {
    const res = await fetch(`${apiURL}/products/categories`);
    const data = await res.json();
    console.log(data);
    dispatch({ type: "productsList/setCategories", payload: data });
  };
}

export default productListSlice.reducer;
