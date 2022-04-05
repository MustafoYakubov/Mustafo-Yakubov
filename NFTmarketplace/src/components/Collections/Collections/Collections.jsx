import React from "react";
import "./Collections.scss";
import row1Img from "../../../assets/img/row1-img.jpg";
import row1Img1 from "../../../assets/img/row1-img1.jpg";
import row1Img2 from "../../../assets/img/row1-img2.jpg";
import row1Img3 from "../../../assets/img/row1-img3.jpg";
import row2img from "../../../assets/img/row2-img.jpg";
import row2img1 from "../../../assets/img/row2-img1.jpg";
import row2img2 from "../../../assets/img/row2-img2.jpg";
import row2img3 from "../../../assets/img/row2-img3.jpg";
import woman from "../../../assets/img/woman.jpg";
import CollectionsText from "../CollectionsText/CollectionsText";
const Collections = () => {
  return (
    <>
      <h1 className="collection-h1">Hot Collections</h1>
      <div className="row">
        <div className="col-xl-4">
          <img className="w-100 d-block mt-3 onHoverBig" src={row1Img} alt="eyes" />
          <div className="row  mt-3">
            <div className="col-4">
              <img className="w-100 d-block onHover " src={row1Img1} alt="row1Img1" />
            </div>
            <div className="col-4">
              <img className="w-100 d-block onHover " src={row1Img2} alt="row1Img2" />
            </div>
            <div className="col-4">
              <img className="w-100 d-block  onHover " src={row1Img3} alt="row1Img3" />
            </div>
          </div>
          <CollectionsText />
        </div>
        <div className="col-xl-4">
          <img className="w-100 d-block mt-3  onHoverBig " src={row2img} alt="ball" />
          <div className="row mt-3">
            <div className="col-4">
              <img className="w-100 onHover" src={row2img1} alt="row2img1" />
            </div>
            <div className="col-4 onHover">
              <img className="w-100 onHover" src={row2img2} alt="row2img2" />
            </div>
            <div className="col-4 onHover">
              <img className="w-100 onHover" src={row2img3} alt="row2img3" />
            </div>
            <CollectionsText />
          </div>
        </div>

        <div className="col-xl-4">
          <img
            className="w-100 d-block mt-3 row2-style onHoverBig"
            src={woman}
            alt="ball"
          />
          <div className="row mt-3">
            <div className="col-4">
              <img className="w-100 onHover" src={row1Img3} alt="row2img3" />
            </div>
            <div className="col-4">
              <img className="w-100 onHover" src={row1Img2} alt="row2img2" />
            </div>
            <div className="col-4">
              <img className="w-100 onHover" src={row2img1} alt="row2img1" />
            </div>
            <CollectionsText />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
