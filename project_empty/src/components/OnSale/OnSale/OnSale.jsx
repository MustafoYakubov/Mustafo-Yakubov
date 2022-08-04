import React from "react";
import "./OnSale.scss";
import eyes from "../../../assets/img/eyes.jpg";
import saler from "../../../assets/img/saler.png";
import ImgSale from "../ImgSale/ImgSale";
import img1 from "../../../assets/img/img-1.jpg";
import img2 from "../../../assets/img/img-2.jpg";
import img3 from "../../../assets/img/img3.png";
import logoSaler from "../../../assets/img/saler.png";
import Salers from "../Salers/Salers";
import saler1 from "../../../assets/img/saler.png";
import saler2 from "../../../assets/img/saler2.png";
import saler3 from "../../../assets/img/saler3.png";
import saler4 from "../../../assets/img/saler51.jpg";
import rightBtn from "../../../assets/icons/rightBtn.svg";
const onSale = () => {
  const imgSale = {
    img1: img1,
    img2: img2,
    img3: img3,
    logoSaler: logoSaler,
    eth: "ETH never die",
    future: "Future coming soon",
    elon: "Elon Musk silver coin 3d print",
    page1: "1 of 12",
    page2: "1 of 3",
    page3: "1 of 4",
    prices1: "0.80 ETH",
    prices2: "1.10 ETH",
    prices3: "0.59 ETH",
  };
  const salers = {
    name1: "Payton Harris",
    name2: "Anita Bins",
    name3: "Jaona Wuckert",
    name4: "Lorena Ledner",
    price1: 2158,
    price2: 1048,
    price3: 3248,
    price4: 4528,
    saler1,
    saler2,
    saler3,
    saler4,
  };
  return (
    <>
      <div className=" row onSaleRow">
        <div className="col-xl-4 col-sm-12">
          <div className="row-1">
            <img className="eyes" src={eyes} alt="eyes" />
            <div className="row-1-text">
              <img className="saler" src={saler} alt="saler" />
              <h4>
                The future of ETH® <span>18 in stock</span>
              </h4>
              <p>
                highest bid <span>1.125 ETH</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-12">
          <div className="row-2">
            <div className="row fatherRow">
              <ImgSale
                img={imgSale.img1}
                textH4={imgSale.eth}
                logo={imgSale.logoSaler}
                page={imgSale.page1}
                prices={imgSale.prices3}
              />
              <ImgSale
                img={img2}
                textH4={imgSale.future}
                logo={imgSale.logoSaler}
                page={imgSale.page2}
                prices={imgSale.prices2}
              />
              <ImgSale
                img={img3}
                textH4={imgSale.elon}
                logo={imgSale.logoSaler}
                page={imgSale.page3}
                prices={imgSale.prices3}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4     col-sm-offset-2 ">
          <div className="row-3">
            <p className="salers-title">Latest upload from creators 🔥</p>
            <Salers
              names={salers.name1}
              price={salers.price1}
              img={salers.saler1}
            />
            <Salers
              name={salers.name2}
              price={salers.price2}
              img={salers.saler2}
            />
            <Salers
              name={salers.name3}
              price={salers.price3}
              img={salers.saler3}
            />
            <Salers
              name={salers.name4}
              price={salers.price4}
              img={salers.saler4}
            />
            <button type="button" className="discover-btn">
              <p>
                Discover more
                <span>
                  <img src={rightBtn} alt="rightBtn" />
                </span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default onSale;
