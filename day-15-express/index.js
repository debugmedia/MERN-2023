const express = require("express");
const app = express();
const useList = [{ name: "test" }];
const movieList = require("./movies.json");
const cors = require("cors");

app.use(cors());
app.use(express.json());

console.log(movieList.length);

app.get("/api/movies", (req, res) => {
  const { movieName } = req.query;
  let filteredMovies = [];
  if (movieName) {
    filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLowerCase())
    );
  } else {
    filteredMovies = movieList;
  }

  res.json({
    results: filteredMovies,
  });
});

app.post("/api/movies", (req, res) => {
  const { movieName } = req.body;
  movieList.push({
    id: Date.now(),
    title: movieName,
    poster_path: "",
  });
  console.log(movieList.length);
  res.json({
    results: movieList,
  });
});

app.delete("/api/movies", (req, res) => {
  const { movieName } = req.body;

  const filteredMovieList = movieList.filter(
    (movie) => movie.title.toLowerCase() !== movieName.toLowerCase()
  );

  res.json({
    results: filteredMovieList,
  });
});

const PORT = 3005;
app.listen(PORT, () => console.log(`Server Started in ${PORT}`));

// Todo
// All Todo List - GET
// Add Todo - POST
// Edit Todo - PUT
// Delete Todo - DELETE
