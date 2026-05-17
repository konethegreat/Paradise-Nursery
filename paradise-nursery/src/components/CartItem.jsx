import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectTotalQuantity,
  removeItem,
  updateQuantity,
} from '../redux/CartSlice';
import Header from './Header';

function CartItem() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();

  // Explicit total amount function
  const calculateTotalAmount = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div>
      <Header />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${calculateTotalAmount().toFixed(2)}</p>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.name} className="cart-item-thumb" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price.toFixed(2)}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                    }
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                    }
                  >
                    +
                  </button>
                  <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-buttons">
          <Link to="/products">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;