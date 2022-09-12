import { Link } from "react-router-dom";
import { CartBlog } from "../cartBlog/CartBlog";
import { GiGamepad } from "react-icons/gi";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header_title">
          Game Store
        </Link>
        <GiGamepad className="logo" size="40px" style={{ padding: "10px 10px" }} />
        <div className="wrapper header_card_btn">
          <CartBlog />
        </div>
      </div>
    </div>
  );
};
