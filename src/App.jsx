import "./App.css";
import Auth from "./components/Auth";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Auth />} />
        <Route path="/" index element={<MovieList />} />
      </Routes>
    </Router>
  );
}

export default App;
