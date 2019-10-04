import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  /*o React utiliza o conceito de estado, usada pelo useState
  que é qualquer informação que você armazena dentro de um componente
  o email é o texto '', mas ele irá retornar o valor do estado de email em tempo real
  sempre que sofrer uma alteração a variavel sempre estará com seu ultimo valor
  e o setEmail é reponsável por atualizar o estado ou seja, atualizar o valor do email*/
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    //faz a prevenção da ação padrão da pagina e deixa ela no lugar
    event.preventDefault();
    
    //faz uma requisição na api para cadastrar um usuario com o email
    const response = await api.post('/sessions', { email });

    //retorna apenas o email do usuario por desestruturação
    const { _id } = response.data

    //armazena o id do usuario que fica disponível em toda a aplicação no navegador
    localStorage.setItem('user', _id);

    //o history é utilizado para fazer a navegação
    history.push('/dashboard');
  }

    return (
        <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          id="email" 
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          ></input>

          <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    );
}