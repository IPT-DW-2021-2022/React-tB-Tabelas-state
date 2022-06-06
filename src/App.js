/**
 * App.js
 */

import React from "react";
import Tabela4 from "./Tabela4";

class App extends React.Component {

  // definição de dados em modo 'STATE'
  // estes dados têm uma grande particularidade: PODEM ser alterados
  // https://www.json.org/json-en.html
  state = {
    alunos: [
      {
        nome: "Ana",
        apelido: "Silva",
      },
      {
        nome: "Mário",
        apelido: "Lopes",
      },
    ]
  }



  render() {
    // deferenciar os dados armazenados em STATE, para dentro do método
    const { alunos } = this.state;

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
