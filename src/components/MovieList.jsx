import { useEffect, useState } from "react";

// Koppling till vår databas
import { db, auth } from "../app/firebase";

// Metoder för vår databas
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const MovieList = () => {
  // Lagra filmerna från firebase så vi kan visa dem - READ
  const [movieList, setMovieList] = useState([]);

  // States för att hantera inputs för att skapa en ny film - CREATE
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  // State för att kunna uppdatera en existerande film - UPDATE
  const [updatedTitle, setUpdatedTitle] = useState("");

  // Hämta collection referens
  const movieCollection = collection(db, "movies");

  const getMovieList = async () => {
    try {
      // READ DATA FROM DATABASE
      // SET THE MOVIELIST STATE
      const response = await getDocs(movieCollection);
      const data = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const handleAddMovie = async () => {
    try {
      await addDoc(movieCollection, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        hasOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid,
        userEmail: auth?.currentUser?.email,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await updateDoc(movieDoc, { title: updatedTitle });
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
      <ul style={{ listStyle: "none" }}>
        {movieList.map((movie) => (
          <li key={movie.id}>
            <h3>
              {movie.title} ({movie.releaseDate})
            </h3>
            <p>{movie.hasOscar ? "Got Oscar" : "No Oscar"}</p>
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
