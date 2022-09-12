import React from "react";
import { GameItem } from "../../components/gameItem/GameItem";
import "./HomePage.scss";
const games = [
  {
    image: "/game-covers/forza_5.jpeg",
    title: "Forza Horizon 5",
    genres: ["Гонки", "Симулятор", "Открытый мир"],
    price: 2343,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: Math.random(),
    description:
      "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: "/game-covers/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Экшен", "Шутер", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 2433,
    id: Math.random(),
    description:
      "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.",
  },
  {
    image: "/game-covers/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Протагонистка"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 3021,
    id: Math.random(),
    description:
      "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.",
  },
  {
    image: "/game-covers/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Экшен"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 789,
    id: Math.random(),
    description:
      "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.",
  },
  {
    image: "/game-covers/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Шутер"],
    price: 982,
    id: Math.random(),
    description:
      "Tom Clancy's Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: "/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "РПГ", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 2863,
    id: Math.random(),
    description:
      "Assassins Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassins Creed.",
  },
  {
    image: "/game-covers/blackops.jpg",
    title: "Call of duty Black ops 3",
    genres: ["Шутер", "Экшен"],
    video: "https://www.youtube.com/embed/PGh3tm78aoM",
    price: 3063,
    id: Math.random(),
    description:
      "В Call of Duty®: Black Ops III используется новая цепная система плавного движения, позволяющая игрокам ловко перемещаться по окружающей среде, используя контролируемые прыжки, силовые скольжения, бег по стенам, плавание и быстрое маскирование во множестве способов.",
  },
  {
    image: "/game-covers/fallGuys.png",
    title: "Fall Guys",
    genres: ["Симулятор", "Мультиплейер"],
    video: "https://www.youtube.com/embed/Wj3dUvGLjNQ",
    price: 2503,
    id: Math.random(),
    description:
      "Fall Guys (ранее Fall Guys: Ultimate Knockout) — платформер в жанре королевской битвы, разработанный Mediatonic. В игре участвуют до 60 игроков, которые управляют мармеладными существами и соревнуются друг с другом в серии случайно выбранных мини-игр, таких как полоса препятствий или теги",
  },
  {
    image: "/game-covers/csgo.png",
    title: "CS Go",
    genres: ["Шутер", "Мультиплейер"],
    video: "https://www.youtube.com/embed/edYCtaNueQY",
    price: 3903,
    id: Math.random(),
    description:
      "Counter-Strike: Global Offensive — многопользовательский шутер от первого лица 2012 года, разработанный Valve и Hidden Path Entertainment. Это четвертая игра в серии Counter-Strike.",
  },
];
export const HomePage = () => {
  return (
    <div className="homePage">
      {games.map((game, index) => (
        <GameItem game={game} key={index} />
      ))}
    </div>
  );
};
