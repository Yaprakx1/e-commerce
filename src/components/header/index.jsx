import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCategories } from "../../redux/categorySlice";

const Header = () => {
  const userState = useSelector((state) => state.userState);
  const categoryState = useSelector((state) => state.categoryState);
  console.log(categoryState);
  return (
    <>
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-6 hidden-xs">
              <p className="top-text">Flexible Delivery, Fast Delivery.</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12">
              <ul>
                <li>+180-123-4567</li>
                <li>info@demo.com</li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logo.png" />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="search-bg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here"
                />
                <button type="Submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="account-section">
                <ul>
                  {userState.user ? (
                    <>
                      <li>
                        <Link to="user" className="title hidden-xs">
                          My Account
                        </Link>
                      </li>
                      <li className="hidden-xs">|</li>
                      <li>
                        <Link to="#" className="title hidden-xs">
                          Logout
                        </Link>
                      </li>
                      <li className="hidden-xs">|</li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="auth/login" className="title hidden-xs">
                          Login
                        </Link>
                      </li>
                      <li className="hidden-xs">|</li>
                      <li>
                        <Link to="auth/register" className="title hidden-xs">
                          Register
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <a href="#" className="title">
                      <i className="fa fa-shopping-cart"></i>{" "}
                      <sup className="cart-quantity">1</sup>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div id="navigation">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="has-sub">
                      <Link to="#">PRODUCTS</Link>
                      <ul>
                        <li></li>
                        {categoryState.categories.map((item, index) => (
                          <li key={index}>
                            <Link to={"/product/list"}>{item.name}</Link>
                          </li>
                        ))}
                        <li></li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li className="has-sub">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="checkout.html">Checkout Form</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>{" "}
                        </li>
                        <li>
                          <Link to="/auth/login">Login</Link>{" "}
                        </li>
                        <li>
                          <Link to="/auth/register">Signup</Link>{" "}
                        </li>
                        <li>
                          <a href="404-page.html">404-page</a>{" "}
                        </li>
                        <li>
                          <a href="styleguide.html">styleguide</a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <a href="#">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-default.html">Blog Default</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <a href="template-feature.html">Template Feature</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
