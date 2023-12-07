function ProductListItem({ product }) {
  const { title, price, image } = product;

  const dolars = Math.floor(price);
  const cents = ((price - dolars) * 100).toString().slice(0, 2);

  return (
    <figure style={{ border: "1px solid black" }}>
      <img src={image} style={{ width: "150px" }} />
      <h3>{title}</h3>
      <div style={{ fontSize: "25px" }}>
        ${dolars}
        <span style={{ fontSize: "15px", verticalAlign: "super" }}>
          {cents}
        </span>
      </div>
    </figure>
  );
}

export default ProductListItem;
