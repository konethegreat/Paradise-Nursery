import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery </h1>
        <p>
          Discover a world of lush, vibrant plants that bring life and beauty to your home.
          From air-purifying plants to aromatic herbs and stunning flowers, we have everything
          you need to transform your space into a personal paradise.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/products">
            <button className="get-started-btn">Explore Plants</button>
          </Link>
          <Link to="/about">
            <button className="get-started-btn" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '2px solid white' }}>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;