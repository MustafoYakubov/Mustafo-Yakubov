import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemsFromCart, setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button/Button";
import "./gameBuy.scss";

const GameBuy = ({ game = {} }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemInCart);
  const isInItemsCart = items.some((item) => item.id === game.id);
  const handeClick = (e) => {
    e.stopPropagation();
    if (isInItemsCart) {
      dispatch(deleteItemsFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="gameBuy">
      <span className="gameBuy_price">{game.price} руб </span>
      <Button
        className="gameBuyBtn"
        onClick={handeClick}
        size="s"
        type={isInItemsCart ? "secondary" : "primary"}
      >
        {isInItemsCart ? (
          <p className="moveIntoCart">Убрать из корзины</p>
        ) : (
          <p className="moveIntoCart">В Корзину</p>
        )}
      </Button>
    </div>
  );
};

export { GameBuy };
