import React from "react";
import "./Salers.scss";
import saler1 from "../../../assets/img/saler1.png";
const Salers = (props) => {
  const { names, price, img } = props;
  return (
    <div className="section-salers row">
      <div className="col-12">
        <img className="saler1" src={img} alt="saler1" />
        <h5 className="salers-name">{names}</h5>

        <h6 className="salers-cash">
          {price} <span>ETH</span>
        </h6>
      </div>
      <div color="0" className="line-salers"></div>
    </div>
  );
};

export default Salers;
