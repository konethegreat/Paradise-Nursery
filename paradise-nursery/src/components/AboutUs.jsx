function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <h1>About Paradise Nursery</h1>
          <p className="tagline">Bringing Nature Home Since 2015</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Paradise Nursery, we believe that every home deserves a touch of nature.
              Our mission is to provide high-quality, carefully cultivated plants that not only
              beautify your space but also improve your air quality and well-being. We're committed
              to sustainable practices and ethical sourcing.
            </p>
          </div>

          <div className="about-section">
            <h2>Who We Are</h2>
            <p>
              Founded in 2015, Paradise Nursery started as a small family business with a passion
              for plants. Today, we've grown into a trusted source for plant enthusiasts and beginners alike.
              Our team of experienced horticulturists carefully selects each plant to ensure they arrive
              healthy and ready to thrive in your home.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Quality:</strong> We only sell premium, healthy plants</li>
              <li><strong>Sustainability:</strong> Eco-friendly practices in everything we do</li>
              <li><strong>Education:</strong> Helping customers learn plant care</li>
              <li><strong>Community:</strong> Supporting local growers and conservation efforts</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🌱 Healthy Plants</h3>
                <p>All plants are inspected and nurtured before shipping</p>
              </div>
              <div className="benefit-card">
                <h3>📚 Care Guides</h3>
                <p>Detailed care instructions included with every order</p>
              </div>
              <div className="benefit-card">
                <h3>🌍 Eco-Friendly</h3>
                <p>Sustainable packaging and carbon-neutral shipping</p>
              </div>
              <div className="benefit-card">
                <h3>💬 Support</h3>
                <p>Our team is here to help with any plant questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
