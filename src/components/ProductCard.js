import styles from './ProductCard.module.css';
import {useState} from 'react';

export function ProductCard({
                              product,
                              isFavorite,
                              background = "slategrey",
                              onPurchase,
                              onFavorite
                            }) {
  // useState hook should be defined on top of a component
  const [stockCount, setStockCount] = useState(product.stockCount);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    if (stockCount > 0) {
      setStockCount((previousStockCount) => previousStockCount - 1);
      console.log(`stockCount = ${stockCount}`);
    }
  }

  function handleTwoClicks() {
    if (stockCount > 1) {
      setStockCount((previousStockCount) => previousStockCount - 2);
      console.log(`stockCount = ${stockCount}`);
      onPurchase(product);
    }
  }

  return (
    <article className={styles.Container} style={{background}}>
      <button
        className={styles.Favorite}
        onClick={() => onFavorite(product.id)}
      >{isFavorite ? "❤️" : "🤍"}
      </button>
      <h2> {product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width={128}
        height={128}
      />
      <p>Specification: {' '}
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button>
      </p>
      {showMore && (
        <ul className={styles.Specification}>
          {product.specification.map((spec, index) => <li key={index}>{spec}</li>)}
        </ul>)
      }
      <Status stockCount={stockCount}/>
      {stockCount > 0 && (
        <>
          <p>${product.price}</p>
          <button onClick={handleClick}>Buy</button>
        </>
      )}
      {stockCount > 1 && (
        <button onClick={handleTwoClicks}>Buy 2</button>
      )}

    </article>
  );
}

function Status({stockCount}) {
  const notAvailableTemplate = (<p className={styles.NotAvailableStatus}>Out of stock</p>);
  const availableTemplate = (<p className={styles.AvailableStatus}>{stockCount} items available</p>);
  return stockCount === 0 ? notAvailableTemplate : availableTemplate
}