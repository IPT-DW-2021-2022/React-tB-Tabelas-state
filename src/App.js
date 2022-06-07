/**
 * App.js
 */

import React from "react";
import Formulario from "./Formulario";
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

  /**
   * remove um aluno do STATE
   * @param {*} aluno 
   */
  handleRemoveAluno = (aluno) => {
    // importar o conteúdo do 'state' para dentro do método
    const { alunos } = this.state;

    // remover o 'aluno ' do state
    this.setState({
      // filter <=> where
      alunos: alunos.filter((aa, i) => {
        return i !== aluno;
        /**
         * "2" == 2  ----> Verdade
         * "2" === 2  ---> Falso
         * */
      })
    })
  }

  /**
   * Adiciona um novo aluno ao STATE
   * @param {*} aluno 
   */
  handleNovoAluno = (aluno) => {
    // ... - este operador tem como missão juntar arrays
    this.setState({ alunos: [...this.state.alunos, aluno] })
  }



  render() {
    // referenciar os dados armazenados em STATE, para dentro do método
    const { alunos } = this.state;

    return (
      <div className="container">
        <h1>Alunos</h1>
        <Formulario novoAlunoOUT={this.handleNovoAluno} />

        <br />
        <h4>Quarta tabela</h4>
        <p>Uso de dados externos ao componente (State)</p>
        <Tabela4 dadosAlunosIN={alunos} alunoApagarOUT={this.handleRemoveAluno} />

        <br /><br />
      </div>
    )
  }

}
export default App;
