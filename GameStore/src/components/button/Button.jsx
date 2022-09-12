import classNames from "classnames";
import "./button.scss";
export const Button = ({
  onClick = null,
  type = "",
  size = "s",
  children = null,
}) => {
  const btnClass = classNames({
    btn: true,
    "btn--secondary": type === "secondary",
    "btn--primary": type === "primary",
    "btn--medium": size === "m",
    "btn--small": size === "s",
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
