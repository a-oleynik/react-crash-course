import styles from './App.module.css';
import {ProductCard} from "./components/ProductCard";
import {ProductList} from "./components/ProductList";
import {ProductFilter} from "./components/ProductFilter";
import {Fragment} from "react";
import {useState} from "react";


function App() {
  const products = [
    {
      imageSrc: "images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      stockCount: 10,
      price: 999,
    },
    {
      imageSrc: "images/airpods.png",
      title: "AirPods Pro 2",
      specification: [
        "Noise Cancellation",
        "Dust, sweat, and water resistant",
        "Up to 6 hours of listening",
      ],
      stockCount: 0,
      price: 249,
    },
    {
      imageSrc: "images/apple-watch.png",
      title: "Apple Watch 9",
      specification: [
        "45mm or 41mm case size",
        "Always-On Retina display",
        "Up to 18 hours normal use",
      ],
      stockCount: 6,
      price: 399,
    },
  ];
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other value",

  });

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which cost $${product.price}`);
  }

  function handleFilter(key, value) {
    setFilters((previousFilters) => ({
      ...previousFilters,
      price: {
        ...previousFilters.price,
        [key]: value,
      },
    }));
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map(product => (
          <ProductCard
            key={product.title}
            product={product}
            onPurchase={handlePurchase}
          />))}
      </ProductList>
      <h2>Products filtered by price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>
      <ul>
        {products.filter(({price}) => (price >= filters.price.min && price <= filters.price.max))
          .map(({title, price}) => (
            <Fragment key={title}>
              <hr className={styles.ListDivider}/>
              <p className={styles.ListTitle}>{title} costs ${price}</p>
            </Fragment>
          ))}
      </ul>
    </div>
  );
}

export default App;
