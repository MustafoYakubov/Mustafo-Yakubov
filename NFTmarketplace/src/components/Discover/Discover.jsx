import React from "react";
import HeadStarter from "../HeadStarter/HeadStarter/HeadStarter";

import OnSale from "../OnSale/OnSale/OnSale";
import SectionCarousel from "../SectionCarousel/SectionCarousel/SectionCarousel";
import OnBit from "../OnBit/OnBit/OnBit";
import "./Discover.scss";
import CreateNft from "../CreateNft/CreateNft";
import Collections from "../Collections/Collections/Collections";

export default function Discover() {
  return (
    <>
      <div className="container">
        <HeadStarter />
        <OnSale />
      </div>
      <div className="container-fluid  container-style">
        <div className="container">
          <SectionCarousel />
        </div>
      </div>
      <div className="container">
        <OnBit />
        <Collections />
        <CreateNft />
      </div>
    </>
  );
}
