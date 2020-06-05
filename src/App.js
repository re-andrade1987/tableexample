import React, { useState } from 'react';
import './App.css';
import Table from './table'

const Form = (callback) => {
  const [values, setValues] = useState({});

  const list = [
    {id: 1, name: 'select 1'},
    {id: 2, name: 'select 2'},
    {id: 3, name: 'select 3'},
    {id: 4, name: 'select 4'},
  ];

  const handleChange = (event) => {
    e.preventDefault()
    alert(selectValue) 
  };

  function handleCreate(e) {
    e.preventDefault()
    alert(selectValue)  
  }



  return (
    <div className="App">
      <h1>Dados dos clientes</h1>
      <form className="form" select value={selectValue} onChange={e => setSelectValue(e.target.value)} >
        <input
          type="text"
          name="name"
          placeholder="Digite o seu nome"
        />
        <input
          type="text"
          name="email"
          placeholder="Digite o seu e-mail"
        />
        <input
          type="text"
          name="message"
          placeholder="Mensagem"
        />
        <button type="submit">Enviar</button>
      </form>
      <Table />
    </div>
  );
}


export default Form;