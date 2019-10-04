import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom'
//faz a importação do css
import './style.css';

export default function Dashboard() {
    //inicializa como uma lista vazia pois o spots recene por padrão um array
    const [spots, setSpots] = useState([])

    /*1 parametro funcao, 2 parametro um array de dependências
     quando a variavel do array de dependências sofrer alterações
     a funçao irá executar novamente, quando está vazio executa apenas 1 vez */
    useEffect(() => {
        async function loadSpots(){
            //retorna o id do usuario logado em local store com a key user
            const user_id = localStorage.getItem('user')
            //faz a requisição dos spots que este usuario tem cadastrado
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setSpots(response.data)
        }

        loadSpots();
    }, []);

    return (
        <>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
        </ul>

        <Link to="/new">
            <button className="btn">Cadastrar novo spot</button>
        </Link>
        </>
    );
}