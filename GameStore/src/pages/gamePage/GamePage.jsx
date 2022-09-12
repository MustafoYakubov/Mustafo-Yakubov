import React from "react";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/gameCover/GameCover";
import { GameGenre } from "../../components/gameGenre/GameGenre";
import { GameBuy } from "../../components/gameBuy/GameBuy";
import "./gamePage.scss";
export const GamePage = () => {
  const games = useSelector((state) => state.games.currentGame);
  if (!games) return null;

  return (
    <>
      <h1 className="gamePageTitle">{games.title}</h1>
      <div className="gamePage">
        <div className="gamePageContent">
          <div className="gamePageLeft">
            <iframe
              className="iframeOfGamePage"
              src={games.video}
              width="90%"
              height="400px"
              title="you tube video player"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="gamePageRight">
            <GameCover image={games.image} />
            <p className="secondaryText">{games.description}</p>
            <p>
              <p className="gameGenreTitle"> Популяные метки этого продукта:</p>
              {games.genres.map((genre, index) => (
                <GameGenre key={index} genre={genre} />
              ))}
            </p>
            <div className="gamePageBuyGame">
              <GameBuy game={games} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
