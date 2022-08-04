import React from "react";
import "./CreateNft.scss";
import esco from "../.././assets/img/esco.png";
const CreateNft = () => {
  return (
    <>
      <div className="createNft mb-5">
        <div className="footer-line"></div>

        <div className="row">
          <div className="col-xl-6 col-sm-12">
            <p className="createNft_p">Save your time with Stacks</p>
            <h1>Earn free crypto with Crypter</h1>
            <p className="mb-5 mt-3">A creative agency that lead and inspire</p>
            <div className="createNft_btns ">
              <button className="btn btn-primary me-3 btns "> Learn now</button>
              <button className="btn  btn-light btns"> Discover more</button>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12">
            <img className="esco w-100 d-block" src={esco} alt="esco" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNft;
