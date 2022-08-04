import React from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Footer.scss";
import logo from "../../assets/icons/symbol.svg";
import right from "../../assets/icons/right-icon.svg";
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="footer-line"></div>
        <div className="footer-section">
          <div className="row footer-row">
            <div className="col-xl-3 col-sm-12   logo_title ">
              <img className="logo2" src={logo} alt="logo" />
              <span className="crypto2">crypter</span>
              <h4 className="creative">The New Creative Economy.</h4>
            </div>
            <div className="col-xl-2 col-sm-12 me-5">
              <p className="row_txt_ftr mb-5">Crypter</p>
              <NavLink className="ftr_link" to="/">
                <p className="ftr_link  mt-4">Discover</p>
                <p className="ftr_link  mt-4">Connect wallet</p>
                <p className="ftr_link  mt-4">Create item</p>
              </NavLink>
            </div>
            <div className="col-xl-2 col-sm-12">
              <p className="row_txt_ftr mb-5">Info</p>
              <NavLink to="/">
                <p className="ftr_link mt-4">Download</p>
                <p className="ftr_link  mt-4">Demos</p>
                <p className="ftr_link  mt-4">Support</p>
              </NavLink>
            </div>
            <div className="col-xl-4 me-2 col-sm-12">
              <h5 className="section_letters mb-5">Join Newsletter</h5>
              <p className="ftr_p mb-4">
                Subscribe our newsletter to get more free design course and
                resource
              </p>
              <Form.Control
                className="ftr_form"
                type="text"
                placeholder="Enter Your Email"
              />
              <span className="form ">
                <div className="form_style">
                  <img className="form_icon" src={right} alt="form_icon" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
