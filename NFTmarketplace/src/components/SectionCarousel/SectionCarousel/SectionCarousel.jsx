import React from "react";
import { Persons } from "../Persons/Persons";
import badge1 from "../../../assets/icons/badge1.svg";
import badge2 from "../../../assets/icons/badge2.svg";
import badge3 from "../../../assets/icons/badge3.svg";
import badge4 from "../../../assets/icons/badge4.svg";
import badge5 from "../../../assets/icons/badge5.svg";
import person1 from "../../../assets/img/person1.jpg";
import person2 from "../../../assets/img/person2.jpg";
import person3 from "../../../assets/img/person3.jpg";
import person4 from "../../../assets/img/person4.jpg";
import person5 from "../../../assets/img/person5.jpg";

import "./SectionCarousel.scss";

const SectionCarousel = () => {
  const personImages = {
    person1,
    person2,
    person3,
    person4,
    person5,
  };
  const badges = {
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
  };
  const personNames = {
    name1: "Edd Harris",
    name2: "Odell Hane",
    name3: "Marlee Kupha",
    name4: "Payton Kunde",
    name5: "Payton Buckr",
  };

  return (
    <div className="  section_carousel">
      <div className="carousel-head">
        <h4>Popular</h4>
        <div className="dropdown dropdown-text">
          <button
            className="btn  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Salers
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" to="*">
                Edd Harris
              </a>
            </li>
            <li>
              <a className="dropdown-item" to="*">
                Odell Hane
              </a>
            </li>
            <li>
              <a className="dropdown-item" to="*">
                Marlee Kuphal
              </a>
            </li>
          </ul>
          <div className="dropdwonstyle">
            <div className="dropdown2">
              <button
                className="btn  dropdown-toggle dropdown2-text"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Today
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" to="*">
                    Edd Harris
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="*">
                    Odell Hane
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" to="*">
                    Marlee Kuphal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-2  col-sm-12 cols-margin">
          <Persons
            images={personImages.person1}
            badges={badges.badge1}
            names={personNames.name1}
          />
        </div>
        <div className="col-xl-2 col-sm-12 cols-margin">
          <Persons
            images={personImages.person2}
            badges={badges.badge2}
            names={personNames.name2}
          />
        </div>
        <div className="col-xl-2  col-sm-12 cols-margin">
          <Persons
            images={personImages.person3}
            badges={badges.badge3}
            names={personNames.name3}
          />
        </div>
        <div className="col-xl-2  col-sm-12 cols-margin">
          <Persons
            images={personImages.person4}
            badges={badges.badge4}
            names={personNames.name4}
          />
        </div>
        <div className="col-xl-2  col-sm-12 cols-margin">
          <Persons
            images={personImages.person5}
            badges={badges.badge5}
            names={personNames.name5}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCarousel;
