import { calcTotalPrice } from "../utils";
import { Button } from "../button/Button";
import { CartItem } from "../cartItem/CartItem";
import "./cartMenu.scss";
export const CartMenu = ({ items, onClick = null, setIsCartMenuVisible }) => {
  return (
    <div className="cartMenu">
      <div className="cartMenuGamesList">
        {items.map((game, index) => (
          <CartItem
            key={index}
            title={game.title}
            price={game.price}
            id={game.id}
          />
        ))}
      </div>
      {items.length > 0 ? (
        <div className="cartMenuArrange">
          <div className="cartMenuTotalPrice">
            <span>Итого :</span>
            <span> {calcTotalPrice(items)} руб.</span>
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        </div>
      ) : (
        "Корзина Пусто"
      )}
    </div>
  );
};
