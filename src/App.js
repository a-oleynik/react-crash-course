import './App.css';
import {ProductCard} from "./components/ProductCard";

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
      <ProductCard product = {product}/>
    </div>
  );
}

export default App;
