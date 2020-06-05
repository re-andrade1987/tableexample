import React, { useState } from 'react';
import './App.css';
import Table from './table'

const Form = (callback) => {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };
  const handleSubmit = callback => event => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
  };
  const enviarContato = () => {
    // faça o que for preciso :)
    console.log(values);
  };


  return (
    <div className="App">
      <h1>Dados dos clientes</h1>
      <form className="form" >
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Digite o seu nome"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
        />
        <input
          onChange={handleChange}
          type="text"
          name="message"
          placeholder="Mensagem"
        />
        <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
      </form>
      <Table />
    </div>
  );
}


export default Form;