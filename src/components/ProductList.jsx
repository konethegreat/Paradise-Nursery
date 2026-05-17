import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice';
import plants from '../data/plants';
import Header from './Header';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const categories = [...new Set(plants.map(p => p.category))];
  const isInCart = (plantId) => cartItems.some(item => item.id === plantId);

  return (
    <div>
      <Header />
      <div className="product-page">
        <h1>Our Plants</h1>
        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="plant-grid">
              {plants.filter(p => p.category === category).map(plant => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
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