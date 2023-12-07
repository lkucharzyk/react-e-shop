import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "./ProductListItem";
import { fetchCategories, fetchProducts } from "./productListSlice";
import { useEffect } from "react";
import ProductListMenu from "./ProductListMenu";

function ProductsList() {
  const dispatch = useDispatch();

  const products = useSelector((store) => store.productList.products);
  const activeCategory = useSelector(
    (store) => store.productList.activeCategory
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <section>
      <ProductListMenu />
      <div>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
