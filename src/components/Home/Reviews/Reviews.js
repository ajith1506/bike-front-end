import React, { useEffect, useState } from "react";

import style from "./Reviews.module.css";
import allReviews from "../../../Data/allReviews.js";
import HomePageReview from "./HomePageReview/HomePageReview";

const Reviews = () => {
  const [review, setReview] = useState([]);
  // console.log(review)
  useEffect(() => {
    setReview(allReviews);
  }, [setReview]);

  return (
    <section className="container mt-5 pt-5 mb-5">
      <div className={style.titleText}>
        <h2 className={style.title}>
          What Customer<span className={style.titleHalf}> Says About Us</span>
        </h2>
      </div>

      <div className={style.popularBlog}>
        <div className="row">
          {review?.slice(0, 5).map((item, index) => (
            <div className="col-md-4" key={index}>
              <HomePageReview key={item.id} item={item} />
            </div>
          ))}
        </div>
        <div className="blogs-button text-center mt-5">
          <button data-aos="fade-right" className={style.btnReadmore}>
            All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
