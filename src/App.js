import './App.css';
import {ProductCard} from "./components/ProductCard";
import {ProductList} from "./components/ProductList";

function App() {
  const product = {
    title: "iPhone 15 Pro",
    imageSrc: "images/iphone.png",
    specifications: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };

  return (
    <div className="App">
      <ProductList>
        <ProductCard width="96px" height="96px" background="darkolivegreen" product={product}/>
        <ProductCard width="64px" height="64px" product={product}/>
        <ProductCard width="128px" height="128px" background="peru" product={product}/>
      </ProductList>
    </div>
  );
}

export default App;
