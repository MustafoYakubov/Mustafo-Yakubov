import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { OrderItem } from "../orderItem/OrderItem";
import { calcTotalPrice } from "../utils";
import "./orderPage.scss";
export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemInCart);
  if (items.length < 0) {
    return <h1>Ваша Корзина Пусто</h1>;
  }
  console.log(items.title);
  return (
    <div className="orderPage">
      <div className="orderPageLeft">
        {items.map((game, index) => (
          <OrderItem game={game} key={index} />
        ))}
      </div>
      <div className="orderPageRight">
        {items.length > 0 ? (
          <div className="orderPageTotalPrice">
            <span>
              {items.length} товаров на сумму {calcTotalPrice(items)} руб.
            </span>
          </div>
        ) : (
          <div>
            <h1>Пусто</h1>
            <Link className="orderPageLink" to="/">
              Домашняя страница
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
