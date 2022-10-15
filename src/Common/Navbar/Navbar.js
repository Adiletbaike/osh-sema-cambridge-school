import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const { i18n, t } = useTranslation(["common"]);
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length >= 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                {t("aboutus")}
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                {t("gallery")}
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={closeMobileMenu}>
                {t("destinations")}
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                {t("blog")}
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                {t("testimonial")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                {t("contactus")}
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            {/* <li>
              <Link to='/sign-in'>
                <i className='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i className='far fa-chevron-right'></i>Register
              </Link>
            </li> */}
            
            <li className="select">
              <select id="lang"
                className="lang_flag"
                onChange={handleLanguageChange}
                value={localStorage.getItem("i18nextLng")}
              >
                <option value="en"> English</option>
                <option value="ky"> Кыргызча</option>
              </select>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
              {/* <span class="fi fi-us"></span>
              <span class="fi fi-kg"></span> */}
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src="images/sema-logo.png" alt="" />
          </div>

          <div className="contact flex_space ">
            <div className="box flex_space">
              <div className="icons">
                <i className="fal fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+996 3222 5-51-47</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i className="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">16@sebat.edu.kg</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
