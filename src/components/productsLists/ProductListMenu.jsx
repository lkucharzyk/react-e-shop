import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "./productListSlice";

function ProductListMenu() {
  const categories = useSelector((store) => store.productList.categories);
  const dispatch = useDispatch();

  function onChangeCategory(e) {
    dispatch(setActiveCategory(e.target.value));
  }

  return (
    <div>
      <select name="category" onChange={onChangeCategory}>
        <option key="all" value="all">
          Category...
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductListMenu;
