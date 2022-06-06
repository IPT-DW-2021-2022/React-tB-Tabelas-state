/**
 * App.js
 */

import React from "react";
import Tabela4 from "./Tabela4";

class App extends React.Component {
  render() {
    // definição de dados em modo 'props'
    // estes dados têm uma grande particularidade: Não se podem alterar
    // https://www.json.org/json-en.html
    const alunos = [
      {
        nome: "Ana",
        apelido: "Silva",
      },
      {
        nome: "Mário",
        apelido: "Lopes",
      },
    ]


    return (
      <div className="container">
        <h1>Alunos</h1>

        <h4>Quarta tabela</h4>
        <p>Uso de dados externos ao componente (State)</p>
        <Tabela4 dadosAlunosIN={alunos} />

        <br /><br />
      </div>
    )
  }

}
export default App;
