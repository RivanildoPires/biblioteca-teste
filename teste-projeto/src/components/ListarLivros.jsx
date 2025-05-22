import React, { useState, useEffect } from "react";
import "./ListarLivros.css";
import java from "../assets/java.png";
import Header from "./Header";

const ListarLivros = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <Header />

      <div className="container">
        <aside className="categories">
          <h4>Livros</h4>
          <div className="separator">
            <div className="line"></div>
          </div>
          <ul>
            <li>Ciências da Computação</li>
            <li>Direito</li>
            <li>Educação Fisica</li>
            <li>Marketing</li>
            <li>Matemática</li>
          </ul>
        </aside>
        <div className="container-main">
          <main className="main-content">
            <section className="section-livros">
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
              <div className="livro">
                <img src={java} alt="" /> <h5>Designer Patterns</h5>
              </div>
            </section>
          </main>
        </div>
      </div>
      <footer>
        <h3>
          Faculdade Católica da Paraíba. © 2025 - Todos os direitos reservados.
        </h3>
      </footer>
    </div>
  );
};

export default ListarLivros;