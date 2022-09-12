import React from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteItemsFromCart } from "../../redux/cart/reducer";

import "./cartItem.scss";

export const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItemsFromCart(id));
  };
  return (
    <div className="cartItem">
      <span> {title}</span>
      <div className="cartItemPrice">
        <TiDelete
          size={25}
          className="cartDelete"
          onClick={handleDelete}
        />

        <span>{price} руб.</span>
      </div>
    </div>
  );
};
