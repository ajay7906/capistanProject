import { Routes, Route } from "react-router-dom";
import './App.css'
import Info from "./pages/Info";
import Showcase from "./pages/Showcase/Index";
import Movies from "./pages/Movies";
import RegisterForm from "./componenets/RegisterForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/info" element={<Info />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<h1>404 Route not found 😞</h1>} />
    </Routes>
  );
}

export default App;

// /register -> Register
// /movies -> Movies
// /info -> Info
// /showcase -> Showcase