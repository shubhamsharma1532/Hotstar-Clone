import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2ec0d66f5bdf1dd12eefa0723f1479cf";
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const GlobalAPI = {
  getTrending: () => axios.get(`${API_BASE_URL}/trending/all/day?api_key=${API_KEY}`),
  getMovieByGenreId: (id) => axios.get(`${movieByGenreBaseURL}&with_genres=${id}`),
};

export default GlobalAPI;
