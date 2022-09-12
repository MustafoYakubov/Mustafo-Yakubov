import React, { useState } from "react";
import { useCallback } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartMenu } from "../cartMenu/CartMenu";
import { ItemsInCart } from "../itemsInCart/ItemsInCart";
import { calcTotalPrice } from "../utils";
import "./cartBlog.scss";

export const CartBlog = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cardBlock">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={35}
        className="cartBlock_icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      <span className="cartBlock_price">
        {totalPrice !== 0 ? `${totalPrice} руб.` : "Корзина"}
        {isCartMenuVisible && (
          <CartMenu
            items={items}
            onClick={handleClick}
            setIsCartMenuVisible={setIsCartMenuVisible}
          />
        )}
      </span>
    </div>
  );
};
