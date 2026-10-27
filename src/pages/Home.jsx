import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section
        className="home-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">WELCOME TO OUR STORE</p>

          <h1>Everything You Need, All In One Place.</h1>

          <p>
            Shop the latest products, best deals, and everyday essentials at
            great prices.
          </p>

          <Link to="/products" className="home-hero__button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section">
        <div className="home-section__heading">
          <p>EXPLORE</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="home-category-grid">
          <Link
            to="/products"
            className="home-category-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="home-category-card__content">
              <span>01</span>
              <h3>Electronics</h3>
              <p>Phones, gadgets and more.</p>
            </div>
          </Link>

          <Link
            to="/products"
            className="home-category-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="home-category-card__content">
              <span>02</span>
              <h3>Fashion</h3>
              <p>Clothes, shoes and accessories.</p>
            </div>
          </Link>

          <Link
            to="/products"
            className="home-category-card"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80')",
            }}
          >
            <div className="home-category-card__content">
              <span>03</span>
              <h3>Home & Living</h3>
              <p>Everything for your home.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Top Selling */}
      <section className="home-section home-top-selling">
        <div className="home-section__heading">
          <p>POPULAR PRODUCTS</p>
          <h2>Top Selling</h2>
          <span>Check out products loved by our customers.</span>
        </div>

        <Link to="/products" className="home-section__link">
          View All Products →
        </Link>
      </section>

      {/* Trending */}
      <section
        className="home-trending"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="home-trending__content">
          <p>BEST DEALS</p>

          <h2>
            Find Great
            <br />
            Products.
          </h2>

          <p>
            Discover useful products, everyday essentials and great deals all in
            one place.
          </p>

          <Link to="/products" className="home-trending__button">
            Explore Products
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta">
        <p>SHOP. DISCOVER. ENJOY.</p>

        <h2>Find something you'll love.</h2>

        <Link to="/products" className="home-cta__button">
          Start Shopping
        </Link>
      </section>
    </main>
  );
};

export default Home;
