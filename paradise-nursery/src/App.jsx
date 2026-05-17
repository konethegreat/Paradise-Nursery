import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;