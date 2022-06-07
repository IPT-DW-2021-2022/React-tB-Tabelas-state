/**
 * Formulario.js
 */

import React from "react";

class Formulario extends React.Component {
    // criar objeto para recolher os dados do formulário
    novoAluno = {
        nome: "",
        apelido: "",
    }

    // atribuir este novo objeto ao State,
    // senão não serão acessíveis
    state = this.novoAluno;

    /**
     * função para processar os dados recolhidos pelas textboxs
     * @param {*} evento : os dados recolhidos 
     */
    handleAdicao = (evento) => {
        // extrair os dados do 'evento'
        // name  -> nome da textbox
        // value -> o que o utilizador escreveu na textbox
        const { name, value } = evento.target;

        // adicionar os dados extraídos, ao state
        this.setState({
            [name]: value,
        })
    }

    /**
     * Processar os dados recolhidos
     * e exportá-los para fora do Formulário
     */
    handleSubmitForm = () => {
        // o parâmetro 'novoAlunoOUT' é o parâmetro de exportação 
        // dos dados do <Formulario />
        this.props.novoAlunoOUT(this.state);
        this.setState(this.novoAluno);
    }

    render() {
        const { nome, apelido } = this.state;

        return (
            <form>
                Nome aluno:
                <input type="text"
                    name="nome"
                    required="required"
                    value={nome}
                    onChange={this.handleAdicao}
                /><br />
                Apelido:
                <input type="text"
                    name="apelido"
                    value={apelido}
                    onChange={this.handleAdicao}
                /> <br />
                <input type="button"
                    value="Guardar"
                    onClick={this.handleSubmitForm} />
            </form>
        )
    }
}

export default Formulario;