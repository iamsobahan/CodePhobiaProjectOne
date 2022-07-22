import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../constants/images';
import { GiKnifeFork } from 'react-icons/gi';
import { VscCircleLargeOutline } from 'react-icons/vsc';

const Banner = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    fade: true,
    infinite: true,
    arrows: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const clickHandler = () => {
    document
      .getElementById('banner')
      .requestFullscreen()

      .catch((e) => {
        console.log(e);
      });
  };

  const clickHandler2 = () => {
    document.exitFullscreen();
  };

  return (
    <div id="banner" onDoubleClick={clickHandler2}>
      <Slider {...settings}>
        <div className="banner1">
          <img src={images.banner1} alt="" />
          <div className="overlay">
            <div className="reservation">
              <a href="/">Reservation</a>
            </div>
            <div className="promotion">
              <a href="/">Promotion</a>
            </div>

            <div className="largeScreen">
              <VscCircleLargeOutline
                title="Enter Full Screen"
                onDoubleClick={clickHandler}
                className="largeScreenIcon"
              />
            </div>
            <div className="overlayMain overlayMain2">
              <h1>
                <GiKnifeFork className="icon" />
                vonjour A Tous
              </h1>
              <h2>Best restaurent in the town</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia repellat quaerat saepe unde! Quaerat saepe a eos
                suscipit quia consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="banner2">
          <img src={images.banner2} alt="" />
          <div className="overlay">
            <div className="reservation">
              <a href="/">Reservation</a>
            </div>
            <div className="promotion">
              <a href="/">Promotion</a>
            </div>

            <div className="largeScreen">
              <VscCircleLargeOutline
                onDoubleClick={clickHandler}
                className="largeScreenIcon"
              />
            </div>
            <div className="overlayMain overlayMain2">
              <h1>
                <GiKnifeFork className="icon" />
                vonjour A Tous
              </h1>
              <h2>Best restaurent in the town</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia repellat quaerat saepe unde! Quaerat saepe a eos
                suscipit quia consequuntur.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
