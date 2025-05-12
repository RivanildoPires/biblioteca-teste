import { useState } from "react";
import "./TelaInicial.css";
import logo from "../assets/logo.png";

const TelaInicial = () => {
  const [name, setName] = useState("Rivanildo");

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <div className="navbar-inner">
            <div className="navbar-top">
              <img src={logo} alt="logo-biblioteca" />

              <h1>Bem Vindo {name}</h1>
              <ul className="list">
                <li>
                  <a href="#">Livros Reservado</a>
                </li>
                <li>
                  <a href="#">Meu Perfil</a>
                </li>
                <li>
                  <a href="#">Sair</a>
                </li>
              </ul>
            </div>
              <table className="table">
                <tr>
                  <th>Livros</th>
                  <th>Artigos</th>
                  <th>TCC</th>
                  <th>Material Acadêmico</th>
                </tr>
              </table>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-container">
          <section>
            <h2>Biblioteca Monsenhor Luiz Gualberto de Andrade</h2>
            <p>
              A Biblioteca Monsenhor Luiz Gualberto de Andrade possui uma área
              de 228,60 m², com espaços destinados ao acervo, recepção,
              atendimento, processamento técnico e estudo. Conta com 4 terminais
              de consulta, 11 cabines de estudo individual, 1 sala de estudo em
              grupo e 1 sala para o bibliotecário, além de 3 terminais para
              empréstimos, devoluções e reservas.
            </p>
          </section>
          <section>
            <h3>Horário de Funcionamento:</h3>
            <p>
              Segunda a sexta-feira: 07h15 às 11h15, 13h00 às 17h00 e 18h00 às
              22h00
            </p>
            <p>E-mail: biblioteca@faculdadecatolicadaparaiba.edu.br</p>
          </section>
          <section>
            <h3>Serviços Oferecidos:</h3>
            <p>
              Empréstimos, devoluções, renovações, pesquisas no acervo físico e
              digital, orientação ao uso do sistema SIABI, normalização de
              trabalhos acadêmicos, elaboração de fichas catalográficas,
              referências conforme a ABNT, auxílio a publicações, acesso à
              internet/wi-fi, visita guiada e apoio a projetos acadêmicos
            </p>
          </section>
          <section>
            <h3>Acervo e Sistema</h3>
            <p>
              O acervo está informatizado por meio do sistema SIABI, permitindo
              empréstimos e reservas online, envio de avisos por e-mail e
              emissão de relatórios diários.
            </p>
            <p>E-mail do Acervo: acervo@faculdadecatolicadaparaiba.edu.br</p>
          </section>
        </div>
      </main>

      <footer>
        <h3>
          Faculdade Católica da Paraíba. © 2025 - Todos os direitos reservados.
        </h3>
      </footer>
    </div>
  );
};

export default TelaInicial;
