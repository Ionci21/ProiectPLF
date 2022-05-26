const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    titlulCategoriei: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    titlulCategoriei: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    titlulCategoriei: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    titlulCategoriei: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    titlulCategoriei: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    titlulCategoriei: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMisteryMovies: {
    titlulCategoriei: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFiMovies: {
    titlulCategoriei: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWesternMovies: {
    titlulCategoriei: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimationMovies: {
    titlulCategoriei: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    titlulCategoriei: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
