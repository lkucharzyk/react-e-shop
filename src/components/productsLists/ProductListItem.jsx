function ProductListItem({ product }) {
  const { title, price } = product;
  return (
    <figure>
      <h3>{title}</h3>
      <div>{price}</div>
    </figure>
  );
}

export default ProductListItem;
