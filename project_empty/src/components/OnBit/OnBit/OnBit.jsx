import React, { useState } from "react";
import OnBitText from "../OnBitText/OnBitText";
import woman from "../../../assets/img/woman.jpg";
import pyramid from "../../../assets/img/pyramid.jpg";
import ball from "../../../assets/img/ball.jpg";
import building from "../../../assets/img/building.jpg";
import Carousel from "react-bootstrap/Carousel";
// import Item from "react-bootstrap/Item";
import "./OnBit.scss";
const OnBit = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className="onbit_title">Hot Bid</h1>
      <div className="section_hotBid">
        <div className="row">
          <div className="col-3">
            <img className="w-100 imgHover" src={woman} alt="woman" />
            <OnBitText />
          </div>
          <div className="col-3">
            <img className="w-100 imgHover" src={pyramid} alt="pyramid" />
            <OnBitText />
          </div>

          <div className="col-3 ">
            <img className="w-100 imgHover" src={ball} alt="ball" />
            <OnBitText />
          </div>
          <div className="col-3">
            <img className="w-100 imgHover" src={building} alt="building" />
            <OnBitText />
          </div>
          <button className="btn-load mt-5">Load More </button>
        </div>
      </div>
      {/* // CAROUSEL FOR MOBILE */}
      {/* ///// */}
      {/* MOBILE CAROUSEL  !!! */}
      <div className="carousel-mobile">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 mobile_carousel_img"
              src={woman}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mobile_carousel_img "
              src={pyramid}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100  mobile_carousel_img"
              src={ball}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mobile_carousel_img"
              src={building}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <OnBitText />
      </div>
    </>
  );
};

export default OnBit;
