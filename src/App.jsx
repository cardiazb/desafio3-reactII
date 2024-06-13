import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Personajes from "./views/Personajes";
import NotFound from "./views/NotFound";
import Personaje from "./views/Personaje";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/personajes" element={<Personajes />}></Route>
          <Route path="/personajes/:name" element={<Personaje />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
