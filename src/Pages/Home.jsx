import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };
  const getGameListByGenresId = (id) => {
    GlobalAPI.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 p-2">
      <div className="h-full hidden md:block">
        <GenreList
          genereId={(genereId) => getGameListByGenresId(genereId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-6 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[15]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId
              gameList={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
