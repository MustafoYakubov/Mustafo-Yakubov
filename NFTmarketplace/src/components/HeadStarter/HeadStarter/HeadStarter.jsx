import React from "react";
import videoPlayer from "../../../assets/img/videoPlayer.jpg";
import "../HeadStarter/HeadStarter.scss";
import SectionSale from "../sectionSale/SectionSale";
function HeadStarter() {
  return (
    <div>
      {/* <HR LINE > */}
      <div className="line"></div>
      <div className="row ">
        {/* <HEAD TITLE WITH BTN></HEAD> */}
        <div className="header-title">
          <p className="head-p">Create, explore, & collect digital art NFTs.</p>
          <h1 className="head-h">The new creative economy.</h1>
          <button className="head-btn"> Start your search</button>
        </div>
        <div className="col-xxl-6 col-sm-12 sectionImg">
          <img className="videoPlayer" src={videoPlayer} alt="videoPlayer" />
        </div>
        <div className="col-xxl-6 col-sm-12 sectionSale">
          <SectionSale />
        </div>
      </div>
    </div>
  );
}

export default HeadStarter;
