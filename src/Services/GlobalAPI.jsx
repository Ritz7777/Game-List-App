import axios from "axios";

const key = "bd4d9482960e4765be8c41b324a1c419";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
