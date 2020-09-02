import React from "react";
import baptism1 from "../../img/IMG_1984.jpeg";
// import baptism2 from "../../img/IMG_2021.jpeg";
import baptism3 from "../../img/IMG_1959.jpeg";

import Video from "../../mp4/Video.mp4";

export function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              id="background-video"
              loop
              autoPlay
              muted
              width="1110"
              height="640"
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{" "}
            <div className="carousel-caption d-none d-md-block">
              <h5>Learn what the Bible says about Baptism</h5>
              <p>See what the process looks like.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={baptism1}
              className="d-block w-100"
              alt="Baptism August 2020"
              loading="lazy"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Take The First Step Toward A New Life!</h5>
              <p>Sign up for our Baptismal Classes Today!</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={baptism3}
              className="d-block w-100"
              alt="Baptism August 2020"
              loading="lazy"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>View Photos & Video From Our Day at Orchage Beach</h5>
              <p>See what the process looks like.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
