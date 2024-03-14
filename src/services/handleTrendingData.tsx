export const handleTrendingData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZiZGRiZDhlNzBjNzBkNGZiMmI5MThlZWM0N2Q5OSIsInN1YiI6IjY1ZjBlYzc2NDcwZWFkMDE2MjliMjdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nsHRNeHjj8zuMGIzb8urmAuwkcacOFwmb_cED4mUT-k",
    },
  };

  return fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((err) => console.error(err));
};
