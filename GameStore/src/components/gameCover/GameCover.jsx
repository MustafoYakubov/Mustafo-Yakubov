import "./gameCover.scss";
export const GameCover = ({ image = null }) => {
  return (
    <div className="gameCover" style={{ backgroundImage: `url(${image})` }} />
  );
};
