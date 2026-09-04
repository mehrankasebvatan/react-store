import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            {/* Brand */}
            <Link to="/" className="navbar-brand">
              ShopHub
            </Link>

            {/* Desktop Links */}
            <div className="navbar-links">
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/checkout" className="navbar-link">
                Cart
              </Link>
            </div>

            {/* Desktop Auth */}
            {!user ? (
                <div className="navbar-auth">
                  <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-primary">
                      Login
                    </Link>
                    <Link to="/auth" className="btn btn-secondary">
                      Signup
                    </Link>
                  </div>
                </div>
            ) : (
                <div className="navbar-user">
                  <span className="navbar-greeting">Hello, {user.email}</span>
                  <button className="btn btn-secondary" onClick={logout}>
                    Logout
                  </button>
                </div>
            )}

            {/* Burger Button (mobile only) */}
            <button
                className={`navbar-toggle ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
              <span className="navbar-toggle-bar"></span>
              <span className="navbar-toggle-bar"></span>
              <span className="navbar-toggle-bar"></span>
            </button>
          </div>
        </nav>

        {/* Overlay */}
        <div
            className={`navbar-overlay ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div className={`navbar-drawer ${isOpen ? "open" : ""}`}>
          <button
              className="navbar-drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
          >
            ✕
          </button>

          <div className="navbar-drawer-links">
            <Link to="/" className="navbar-drawer-link">
              Home
            </Link>
            <Link to="/checkout" className="navbar-drawer-link">
              Cart
            </Link>
          </div>

          <div className="navbar-drawer-divider" />

          {/* Auth section inside drawer */}
          {!user ? (
              <div className="navbar-drawer-auth">
                <Link to="/auth" className="btn btn-primary btn-block">
                  Login
                </Link>
                <Link to="/auth" className="btn btn-secondary btn-block">
                  Signup
                </Link>
              </div>
          ) : (
              <div className="navbar-drawer-auth">
                <span className="navbar-drawer-greeting">Hello, {user.email}</span>
                <button
                    className="btn btn-secondary btn-block"
                    onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
          )}
        </div>
      </>
  );
};

export default Navbar;