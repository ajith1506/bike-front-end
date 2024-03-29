import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import carousel from "../../../img/pexels-andrea-piacquadio-3817843 (1).jpg";
import carouselTwo from "../../../img/pexels-andrea-piacquadio-3822843 (2).jpg";
import carouselThree from "../../../img/pexels-nishant-aneja-2393818 (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../Context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [color, setColor] = useState(false);

  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    // changeColor()
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className={style.navContainer}>
      <nav
        id={color ? style.navbar && style.navbarBG : style.navbar}
        className="navbar navbar-expand-lg fixed-top  navbar-light navbar-inverse"
      >
        <div className="container-fluid">
          <Link to="/">
            {" "}
            <span className={style.logo}>Auto</span>
            <span className={style.logoTwo}>Repair</span>{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <FontAwesomeIcon className={style.arrow} icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  id={color ? style.item && style.liColor : style.item}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {user ? (
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    id={color ? style.item && style.liColor : style.item}
                    to="/dashboard/welcome"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                " "
              )}

              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  id={color ? style.item && style.liColor : style.item}
                  to="/allServices"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  id={color ? style.item && style.liColor : style.item}
                  to="/Products"
                >
                  Products
                </Link>
              </li>
              {/* <li className="nav-item">
                                <Link className="nav-link fw-bold" id={color ? style.item && style.liColor : style.item} to="/blogs">Blogs</Link>
                            </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  id={color ? style.item && style.liColor : style.item}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  id={color ? style.item && style.liColor : style.item}
                  to="/contacts"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {user ? (
                  // <Link className="nav-link fw-bold" id={color ? style.item && style.liColor : style.item} to="/" style={{ color: 'white' }}>
                  //     {user.username}
                  // </Link>
                  <button
                    className="nav-link fw-bold"
                    id={color ? style.item && style.liColor : style.item}
                    onClick={handlelogout}
                    style={{ border: "none", backgroundColor: "#00000000" }}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    className="nav-link fw-bold"
                    id={color ? style.item && style.liColor : style.item}
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div id={style.img} className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel} className={style.banner} alt="..." />
            <div className="carousel-caption">
              <h2 className={style.slideTitle}>We Are Professional </h2>
              <h3 className={style.slideText}>
                we will modify your bike as you want will fix your bike problem
              </h3>
              <Link to="/contacts">
                {" "}
                <button className={style.slideContact}>Contact Now</button>{" "}
              </Link>
              <Link to="/allServices">
                {" "}
                <button className={style.slideContact}>Book Now</button>{" "}
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselTwo} className={style.banner} alt="..." />
            <div className="carousel-caption">
              <h2 className={style.slideTitle}>We are creative</h2>
              <h3 className={style.slideText}>
                We will fix your bike as you bought dammn new
              </h3>
              <Link to="/contacts">
                {" "}
                <button className={style.slideContact}>Contact Now</button>{" "}
              </Link>
              <Link to="/contacts">
                {" "}
                <button className={style.slideContact}>Book Now</button>{" "}
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselThree} className={style.banner} alt="..." />
            <div className="carousel-caption">
              <h2 className={style.slideTitle}>
                We are<span> dedicated</span>
              </h2>
              <h3 className={style.slideText}>
                We care about your Bike as you do
              </h3>
              <Link to="/contacts">
                {" "}
                <button className={style.slideContact}>Contact Now</button>{" "}
              </Link>
              <Link to="/contacts">
                {" "}
                <button className={style.slideContact}>Book Now</button>{" "}
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
