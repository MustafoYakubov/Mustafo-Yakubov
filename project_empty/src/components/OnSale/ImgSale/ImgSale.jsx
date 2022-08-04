import React from "react";
import "./ImgSale.scss";
const ImgSale = (props) => {
  const { img, textH4, logo, page, prices } = props;
  return (
    <div className="fatherRow2 row">
      <div className="col-5">
        <img className="imgSale" src={img} alt="img" />
      </div>
      <div className="col-7">
        <h4 className="imgH4">{textH4}</h4>
        <div className="infos">
          <img className="logos" src={logo} alt="logo" />
          <p className="price">{prices}</p>
          <p className="pages">{page}</p>
        </div>
        <button type="button" className="imgBtn">
          <p>Place a bid</p>
        </button>
      </div>
    </div>
  );
};

export default ImgSale;
