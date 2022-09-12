import React from "react";

import "./itemsInCart.scss";
export const ItemsInCart = ({ quantity = 0 }) => {
  return (
    <>
      {quantity > 0 ? <div className="itemsInCart">{quantity}</div> : null}
      {/* <AiOutlineCloseCircle size={25} className="cartItemDeleteIcon" />;   */}
    </>
  );
};


