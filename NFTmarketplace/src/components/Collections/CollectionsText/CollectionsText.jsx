import React from "react";
import "./CollectionsText.scss";
import logoSaler from "../../../assets/img/saler.png";
const CollectionsText = () => {
  return (
    <div>
      <h3 className="collection-h3">Awesome collections</h3>
      <div className="collection_infos d-flex">
        <img className="logoSaler" src={logoSaler} alt="logoSaler" />
        <p>By Hilda Nikolous</p>
        <button type="button"> 28 ITEMS</button>
      </div>
    </div>
  );
};

export default CollectionsText;
