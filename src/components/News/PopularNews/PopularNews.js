import React, { useEffect, useState } from "react";
import style from "./PopularNews.module.css";
import fakeNews from "../../../Data/fakeNews";

import News from "../News";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const PopularNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(fakeNews);
  }, []);

  return (
    <section className="container mt-5 pt-5 mb-5">
      <div className={style.titleText}>
        <h2 className={style.title}>
          News<span className={style.titleHalf}> & Tips</span>
        </h2>
      </div>

      <div className={style.popularBlog}>
        <div className="row">
          {news?.slice(0, 3).map((blog, index) => (
            <div className="col-md-4" key={index}>
              <News key={blog.id} blog={blog} />
            </div>
          ))}
        </div>
        <div className="blogs-button text-center">
          <button data-aos="fade-right" className={style.btnReadmore}>
            All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularNews;
