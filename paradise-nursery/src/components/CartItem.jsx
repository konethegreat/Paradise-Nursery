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
        <h2>Your Cart is Empty</h2>
        <Link to="/products">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>

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