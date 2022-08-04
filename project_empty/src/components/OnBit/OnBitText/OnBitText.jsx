import React from "react";
import "./OnBitText.scss";
import avatars from "../../../assets/icons/avatars.svg";
import regulation from "../../../assets/icons/reg.svg"
const OnBitText = () => {
  return (
    <>
      <div className="title_of_nft d-flex">
        <h5 className="me-5">Amazing digital art</h5>
        <span>2.45 ETH</span>
      </div>
      <div className="followers d-flex ">
        <img className="me-5" src={avatars} alt="avatars" />
        <span>3 in stock</span>
      </div>
      <div className="onBitLine"></div>

      <div className="onbit_footer d-flex ">
          <img className="me-4" src={regulation} alt="regulation" />
          <p >Highest bid <span className="me-3">0.001 ETH <span>New bid 🔥</span> </span></p>
      </div>
    </>
  );
};

export default OnBitText;
