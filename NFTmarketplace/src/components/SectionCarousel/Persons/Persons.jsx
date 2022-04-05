import React from "react";
import "./Persons.scss";
import achieved1 from "../../../assets/icons/badge1.svg";
import plus from "../../../assets/icons/plus.svg";
import top from "../../../assets/icons/up.svg";
import person1 from "../../../assets/img/person1.jpg";
import heart from "../../../assets/icons/heart.svg";
export const Persons = (props) => {
  const { images, badges, names } = props;

  return (
    <div className="card">
      <div className="card-head">
        <div className="achieved  d-flex">
          <img className="achivied_img" src={badges} alt="achieved" />
          <div>
            <img className="plus" src={plus} alt="plus" />
            <span>
              <img className="top" src={top} alt="top" />
            </span>
          </div>
        </div>
        <div className="card-line"></div>
        <div className="card-body">
          <img className="person_img" src={images} alt="person" />
          <span>
            <img className="heart" src={heart} alt="diamond" />
          </span>
          <div className="person_name">{names}</div>
          <div className="item_price">
            2.456 <span>ETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};
