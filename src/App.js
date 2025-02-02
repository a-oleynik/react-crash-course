import styles from './App.module.css';
import {ProductCard} from "./components/ProductCard";
import {ProductList} from "./components/ProductList";
import {ProductFilter} from "./components/ProductFilter";
import {products as productsData} from "./data/products";
import {Fragment} from "react";
import {useState} from "react";


function App() {
  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    price: {
      min: 0,
      max: 999,
    },
    other: "other value",

  });
  const [favorites, setFavorites] = useState([]);

  function handlePurchase(productId, stockCount) {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === productId ? {
      ...product,
      stockCount
    } : product));
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

  function handleFavorite(productId) {
    if (favorites.includes(productId)) {
      setFavorites((previousFavorites) => previousFavorites.filter((id) => id !== productId));
    } else {
      setFavorites((previousFavorites) => [...previousFavorites, productId]);
    }
  }

  return (
    <div className={styles.App}>
      <ProductList>
        {products.map(product => (
          <ProductCard
            key={product.title}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onPurchase={handlePurchase}
            onFavorite={handleFavorite}
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
