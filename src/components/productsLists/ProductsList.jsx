import { useSelector } from "react-redux";

function ProductsList() {
  const products = useSelector((store) => store.productList.products);
  console.log(products);
  return <section></section>;
}

export default ProductsList;
