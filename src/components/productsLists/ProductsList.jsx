import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "./ProductListItem";
import { fetchProducts } from "./productListSlice";
import { useEffect } from "react";

function ProductsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((store) => store.productList.products);

  return (
    <section>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
