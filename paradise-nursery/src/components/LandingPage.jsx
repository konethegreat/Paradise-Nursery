import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Your one-stop shop for beautiful houseplants. We bring nature indoors
          with a handpicked selection of lush, air‑purifying greenery.
        </p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;