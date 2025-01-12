export function ProductCard({product, background = "slategrey"}) {
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
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul style={{listStyle: "none", padding: 0}}>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
      </ul>
      <button>Buy (From ${product.price})</button>
    </article>
  )
    ;
}