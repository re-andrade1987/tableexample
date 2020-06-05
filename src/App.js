import React, { Component } from 'react';
import './App.css';

class Table extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>email</th>
            <th>Sexo</th>
            <th>Profissão</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: '',
      senha: '',
    };
    this.cadastrar = this.cadastrar.bind(this)

  }
  cadastrar(e) {
    const { nome, email, senha } = this.state;
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h2>Dados Cliente</h2>
        <form className="form" onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type="Name" name="Name" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
          <label>Email:</label>
          <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          <label>Senha:</label>
          <input type="password" name="senha" valeu={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
          <button>Cadastrar</button>
        </form>
        <div>
          <h3>{this.state.nome}</h3>
          <h3>{this.state.email}</h3>
        </div>
        <Table />
      </div>
    );
  }

}

export default App;
