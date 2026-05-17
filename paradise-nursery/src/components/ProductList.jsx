import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/CartSlice';
import plants from '../data/plants';
import Header from './Header';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Group plants by category
  const categories = [...new Set(plants.map((p) => p.category))];

  // Check if a plant is already in the cart (to disable button)
  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  return (
    <div>
      <Header />
      <div className="product-page">
        <h1>Our Plants</h1>
        {categories.map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img src={plant.thumbnail} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price.toFixed(2)}</p>
                    <button
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id) ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;