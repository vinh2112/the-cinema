const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "09777f41c69d381e600765e5952d569f",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
