import React, { useState } from "react";
import style from "./Appointment.module.css";
import LeftMan from "../../../img/bikerepair2 (1).jpg";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function Appointment() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function sendMail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_prk10jd",
        "template_46ktyhj",
        e.target,
        "OLJgbdK1FoBr1Sxy8"
      )
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "Your email has been sent successfully.",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to send email. Please try again later.",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
      });
  }

  return (
    <section className="mb-2" id={style.appointment}>
      <div data-aos="fade-up" className="container">
        <div className={style.headTitle}>
          <h3 className={style.title}>Get a free appointment</h3>
          <FontAwesomeIcon icon={faChevronDown} className={style.fontIcon} />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div data-aos="fade-up" className={style.colLeft}>
              <img className={style.LeftImg} src={LeftMan} alt="" />
            </div>
          </div>
          <div className="col-md-8">
            <div data-aos="fade-up" className="mb-5" id={style.colRight}>
              <div data-aos="zoom-in-up" className="container" id={style.form}>
                <form className="row g-3" onSubmit={sendMail}>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Your message"
                      name="message"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className={style.slideContact}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
