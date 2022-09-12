import React from "react";
import { useDispatch } from "react-redux";
import { GameCover } from "../gameCover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemsFromCart } from "../../redux/cart/reducer";
import "./orderItem.scss";
export const OrderItem = ({ game }) => {
  console.log(game.title);
  const dispactch = useDispatch();
  const handleClick = () => {
    dispactch(deleteItemsFromCart(game.id));
  };
  return (
    <div className="orderItem">
      <div className="orderItemCover">
        <GameCover image={game.image} />
      </div>
      <div className="orderItemHalf">
        <div className="orderItemTitle">
          <span>{game.title}</span>
        </div>
        <div className="orderItemPrice">
          <span> {game.price} руб.</span>
          <AiOutlineCloseCircle
            size={25}
            className="cartItemDeleteIcon"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
