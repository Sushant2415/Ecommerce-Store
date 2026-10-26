import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">NEW COLLECTION</p>

          <h1>Style That Speaks For You.</h1>

          <p>
            Discover the latest fashion trends, timeless essentials, and styles
            made for every occasion.
          </p>

          <Link to="/products" className="home-hero__button">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Fashion Categories */}
      <section className="home-section">
        <div className="home-section__heading">
          <p>EXPLORE</p>
          <h2>Shop Your Style</h2>
        </div>

        <div className="home-category-grid">
          <Link to="/products" className="home-category-card">
            <div className="home-category-card__content">
              <span>01</span>
              <h3>Men's Fashion</h3>
              <p>Explore modern styles for him.</p>
            </div>
          </Link>

          <Link to="/products" className="home-category-card">
            <div className="home-category-card__content">
              <span>02</span>
              <h3>Women's Fashion</h3>
              <p>Discover styles made for her.</p>
            </div>
          </Link>

          <Link to="/products" className="home-category-card">
            <div className="home-category-card__content">
              <span>03</span>
              <h3>Trending Now</h3>
              <p>What's trending right now.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Top Selling */}
      <section className="home-section home-top-selling">
        <div className="home-section__heading">
          <p>POPULAR PICKS</p>
          <h2>Top Selling</h2>
          <span>The styles everyone is talking about.</span>
        </div>

        <Link to="/products" className="home-section__link">
          View All Products →
        </Link>
      </section>

      {/* Trending */}
      <section className="home-trending">
        <div className="home-trending__content">
          <p>TRENDING NOW</p>

          <h2>
            Find Your
            <br />
            Next Favorite.
          </h2>

          <p>
            Fresh styles, everyday essentials, and fashion pieces you will want
            to wear again and again.
          </p>

          <Link to="/products" className="home-trending__button">
            Shop Trending
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <p>YOUR STYLE. YOUR CHOICE.</p>

        <h2>Ready to upgrade your wardrobe?</h2>

        <Link to="/products" className="home-cta__button">
          Start Shopping
        </Link>
      </section>
    </main>
  );
};

export default Home;
