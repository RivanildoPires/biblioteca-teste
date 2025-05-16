import "./App.css";
import TelaInicial from "./components/TelaInicial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListarLivros from "./components/ListarLivros";
import Livro from "./components/Livro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/livros" element={<ListarLivros />} />
        <Route path="/livro" element={<Livro />} />
      </Routes>
    </Router>
  );
}

export default App;
