import styles from './ProductCard.module.css'

export function ProductCard({product, background = "slategrey", onPurchase}) {
  return (
    <article className={styles.Container} style={{background}}>
      <h2> {product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width={128}
        height={128}
      />
      <p>Specification:</p>
      <ul className={styles.Specification}>
        {product.specification.map((spec, index) => <li key={index}>{spec}</li>)}
      </ul>
      <Status stockCount={product.stockCount}/>
      {product.stockCount > 0 && (
        <button onClick={() => onPurchase(product)}>Buy (From ${product.price})</button>)}
    </article>
  );
}

function Status({stockCount}) {
  const notAvailableTemplate = (<p className={styles.NotAvailableStatus}>Out of stock</p>);
  const availableTemplate = (<p className={styles.AvailableStatus}>{stockCount} items available</p>);
  return stockCount === 0 ? notAvailableTemplate : availableTemplate
}