import React from "react";
import style from "./Aboutus.module.css";
import carVideo from "../../img/video.mp4";
import signature from "../../img/signature.png";
import { Link } from "react-router-dom";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import auto from "../../img/auto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "@trendyol-js/react-carousel";
import ReactPlayer from "react-player";
import aboutOne from "../../img/img1.jpg";
import aboutTwo from "../../img/img1.jpg";
import aboutThree from "../../img/img1.jpg";
import aboutFive from "../../img/img1.jpg";
import aboutSix from "../../img/img1.jpg";
import Footer from "../Home/Footer/Footer";
import GlobalNavbar from "../GlobalNavbar/GlobalNavbar";

export default function Aboutus() {
  return (
    <section className="mb-4" id={style.about}>
      <div className="video">
        <video
          autoPlay
          loop
          muted
          id={style.video}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={carVideo} type="video/mp4" />
        </video>
      </div>
      <GlobalNavbar />
      <div className="container" id={style.aboutContainer}>
        <div className={style.aboutBox}>
          <h1 className={style.slideTitle}> We care your bike as you do</h1>{" "}
          <br />
          <h2 class={style.TitleTwo}>We love your bike as you do</h2>
          <div className={style.btn}>
            <Link to="/contacts">
              <button className={style.btnReadmore}>Contact</button>
            </Link>
            <Link to="/login">
              <button className={style.btnReadmore}>Book</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className={style.logo}>
          <img className={style.aboutLogo} src={auto} alt="" />
        </div>
        <div className={style.qoute}>
          <h5 className={style.title}>
            “Every mountain top is within reach if you just keep climbing.”
          </h5>
          <span className={style.para}>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorperadipiscing elit, sed diam nonummy <br />
            nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </span>
        </div>

        <div className="mt-4 pt-4 mb-3">
          <div className="row">
            <div className="col-md-7">
              <div className={style.colLeft}>
                <h4 className={style.aboutTitle}>WP Theme for Mechanics!</h4>
                <p className={style.aboutPara}>
                  Mauris accumsan eros needs to put vulputate free. Even the
                  developer elitism, but a more varied element, is the teaching
                  of life. But neither felis pellentesque, lacinia dui sed,
                  ultricies sapien Children's medical bed, to be followed or put
                  makeup football itself
                  <br />
                  <br />
                  Some people hate it, but it's a little targeted, but it needs
                  treatment. It is important that the employee is afraid of the
                  real estate of the casino. It's going to be fun He needs the
                  law unless he wants members. Mauris not as long as, and
                  lacinia sapien Sometimes the pain is the pain anxiety Until
                  homework is done by the employee to drink Even if not before,
                  it will be followed by investing a time neither Unfortunately,
                  it is not the case. Even the poisoned eleifend urn he needs
                  chocolate. At present, who cares about God's care and the bed
                  of life.
                  <br />
                  <br />
                  Mauris not the time, and Lacinia sapien. Sometimes pain trucks
                  pain anxiety yeast Until the homework to be drunk by an
                  employee. Even if not before, he needs to be followed invest
                  a, time a nor Until then, as a developer. Yes the poisoned
                  eleifend urn needs chocolate. Who is in now? God's concern to
                  adorn the bed of life.{" "}
                </p>
              </div>
              <div className="row mt-4 pt-4">
                <div className="col-md-7">
                  <div className={style.video}>
                    <ReactPlayer
                      controls
                      width="100%"
                      height="15rem"
                      borderRadius="2rem"
                      url="https://youtu.be/Qvqwk2Kccag"
                    />
                  </div>
                </div>
                <div className="col-md-5 d-flex flex-row-reverse">
                  <div className="" id={style.founder}>
                    <h4>Kazi Rahat</h4>
                    <div className={style.activity}>
                      <ul>
                        <li>Over 900 Five Star Reviews</li>
                        <li>Free Diagnosis & Brake Checks</li>
                        <li>No Appointment Necessary</li>
                        <li>Free Loaner bikes or Shuttle</li>
                      </ul>
                      <div className={style.img}>
                        <img src={signature} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div
                className="w-100 d-flex flex-row-reverse"
                id={style.colRight}
              >
                <div className={style.wrapper}>
                  <div className={style.featureIcon}>
                    <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                  </div>
                  <p className={style.FeatureTitle}>free apointments</p>{" "}
                  <hr className={style.hr} />
                  <div className={style.appointText}>
                    <p>Free Diagnosis & Brake Checks</p>
                    <p>Message with photo and video</p>
                    <p>Expect free call from us</p>
                  </div>
                  <button className={style.readMore}>Read more </button>
                </div>
              </div>
              <div
                className="w-100 d-flex flex-row-reverse mt-2"
                id={style.colRight}
              >
                <div className={style.wrapper}>
                  <div className={style.featureIcon}>
                    <FontAwesomeIcon className={style.icon} icon={faPhone} />
                  </div>
                  <h4 className={style.phnNumber}>
                    <span>24hr Hotline</span> +880148724875
                  </h4>{" "}
                  <hr className={style.hr} />
                  <div className={style.phoneText}>
                    <p>Mobile: 02 562-958</p>
                    <p>Fax: 02 562-95</p>
                    <p>Email: autoRepair@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={style.Carousel} className="slider container mt-5 mb-5">
        <h1 className={style.CarouselTitle}>Gallery</h1>
        <Carousel
          children={true}
          infinite={true}
          show={3.5}
          slide={4}
          swiping={true}
          transition={0.5}
          responsive={true}
        >
          <img className={style.caroImg} src={aboutOne} alt="" />
          <img className={style.caroImg} src={aboutTwo} alt="" />
          <img className={style.caroImg} src={aboutThree} alt="" />
          <img className={style.caroImg} src={aboutFive} alt="" />
          <img className={style.caroImg} src={aboutSix} alt="" />
        </Carousel>
      </div>
      <Footer />
    </section>
  );
}
