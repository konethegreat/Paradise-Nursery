import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';

function Header() {
  const totalItems = useSelector(selectTotalQuantity);

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-name">🌿 Paradise Nursery</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart" className="cart-link">
          Cart 🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Header;