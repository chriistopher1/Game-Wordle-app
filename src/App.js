import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Play from "./pages/play";
import GameOver from "./pages/game-over";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="/game-over" element={<GameOver />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
