import { GameCover } from "../gameCover";
import { GameBuy } from "../gameBuy/GameBuy";
import { GameGenre } from "../gameGenre/GameGenre";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/games/reducer";
import "./gameItem.scss";
export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  ///
  const handleClickToPage = () => {
    dispatch(setCurrentGame(game));
    navigate(`app/${game.title}`);
  };

  return (
    <div className="gameItem" onClick={handleClickToPage}>
      <GameCover image={game.image} />
      <div className="gameItemDetails">
        <span className="gameItemTitle"> {game.title}</span>
        <div className="gameItemGenre">
          {game.genres.map((genre, index) => (
            <GameGenre key={index} genre={genre} />
          ))}
        </div>
        <div className="gameItemBtn">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
