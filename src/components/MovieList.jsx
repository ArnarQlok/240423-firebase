import { useEffect, useState } from "react";

const MovieList = () => {
  // Lagra filmerna från firebase så vi kan visa dem - READ
  const [movieList, setMovieList] = useState([]);

  // States för att hantera inputs för att skapa en ny film - CREATE
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  // State för att kunna uppdatera en existerande film - UPDATE
  const [updatedTitle, setUpdatedTitle] = useState("");

  const getMovieList = async () => {
    try {
      // READ DATA FROM DATABASE
      // SET THE MOVIELIST STATE
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const handleAddMovie = async () => {
    try {
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };
  const handleUpdateMovie = async (id) => {
    try {
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h1>Movie List</h1>
      <div>
        <input
          type="text"
          placeholder="Movie title..."
          value={newMovieTitle}
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Release Date..."
          value={newReleaseDate}
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          id="checkbox"
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label htmlFor="checkbox">Recieved an Oscar</label>
        <button onClick={handleAddMovie}>Submit Movie</button>
      </div>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <h3>
              {movie.title} ({movie.releaseDate})
            </h3>
            <p>{"No Oscar"}</p>
            <button onClick={() => handleDeleteMovie(movie.id)}>
              Delete Movie
            </button>
            <br />
            <input
              type="text"
              placeholder="update title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => handleUpdateMovie(movie.id)}>
              Update Title
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MovieList;
