import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalCost,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/CartSlice';

function CartItem() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalCost = useSelector(selectTotalCost);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1>🛒 Your Cart is Empty</h1>
          <p>Looks like you haven't added any plants yet. Let's fix that!</p>
          <Link to="/products">
            <button className="continue-shopping-btn">Start Shopping</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>
      <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <p style={{ color: '#666', margin: '0.5rem 0' }}>Total Items: <strong style={{ color: '#2d6a4f', fontSize: '1.2rem' }}>{totalQuantity}</strong></p>
        <p style={{ color: '#666', margin: '0.5rem 0' }}>Total Cost: <strong style={{ color: '#f4a261', fontSize: '1.3rem' }}>${totalCost.toFixed(2)}</strong></p>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="cart-item-thumb" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-item-actions">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                +
              </button>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-buttons">
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;