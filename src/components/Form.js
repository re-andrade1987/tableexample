import React, { useState } from 'react';
import '../index.css';
import api from '../services/api';


const Form = () => {
  const [formPost, setFormPost] = useState([
    { id: '', title: '', body: '' }

  ]);

  const handleChange = (event) => {
    setFormPost({ ...formPost, [event.target.id]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    api.post('posts', {

    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <h1>Escrever Posts</h1>
      <form className="form" onSubmit={handleSubmit}  >
        <input
          type="t"
          name="id"
          placeholder="Escreva o id"
          value={formPost.id} onChange={handleChange} required />
        <input
          type="text"
          name="title"
          placeholder="Escreva o titulo"
          value={formPost.title} onChange={handleChange} required
        />
        <input
          type="text"
          name="body"
          placeholder=" Escreva sua mensagem"
          value={formPost.body} onChange={handleChange} required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


export default Form;