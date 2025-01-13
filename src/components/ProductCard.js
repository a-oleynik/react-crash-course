export function ProductCard({product, background = "slategrey", onPurchase, ...restProps}) {
  return (
    <article style={{
      background,
      width: "100%",
      border: "1px solid white",
      borderRadius: "8px",
      padding: "16px",
      textAlign: "center"
    }}>
      <h2> {product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        {...restProps}
      />
      <p>Specification:</p>
      <ul style={{listStyle: "none", padding: 0}}>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>
      <button onClick={() => onPurchase(product)}>Buy (From ${product.price})</button>
    </article>
  );
}