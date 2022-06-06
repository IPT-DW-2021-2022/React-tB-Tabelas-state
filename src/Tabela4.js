/**
 * Tabela4.js
 */


import React from "react";

function Cabecalho() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
            </tr>
        </thead>
    )
}


const Corpo = (props) => {
    // 'map' funciona como um 'foreach()'
    const linhas = props.dadosTabelaIN.map((aluno, index) => {
        return (
            <tr key={index}>
                <td>{aluno.nome}</td>
                <td>{aluno.apelido}</td>
            </tr>
        )
    })

    // esta é a 'resposta' do componente
    return (<tbody>{linhas}</tbody>)
}



class Tabela4 extends React.Component {

    render() {

        const { dadosAlunosIN } = this.props;

        return (
            <table className="table table-striped table-success">
                <Cabecalho />
                <Corpo dadosTabelaIN={dadosAlunosIN} />
            </table>
        )
    }
}


export default Tabela4
