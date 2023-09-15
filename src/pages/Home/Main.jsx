import Card from './Card'
import './Main.css'
import React, { useEffect, useState } from 'react';

import GoogleComment from './GoogleComment'

function Main () {

    const [card, setCard] = useState([]);
    const [comment, setComment] = useState([])

    const images = [
        "item-1.png",
        "item-2.png",
        "item-3.png",
        "item-4.png"
    ]

    useEffect(() => {
        // Realiza uma requisição para buscar o arquivo JSON
        fetch('/card.json')
          .then((response) => response.json())
          .then((jsonData) => setCard(jsonData))
          .catch((error) => console.error('Erro ao buscar dados:', error));
      }, []);

    useEffect(() => {
        fetch('/google-comment.json')
        .then((response) => response.json())
        .then((jsonData) => setComment(jsonData))
        .catch((error) => console.error('Erro ao buscar dados', error))
    })

    return (
        <div className='servicos-bg'>
            <h3>NOSSOS SERVIÇOS</h3>
            <p className='p-top'>Conte com nossos profissionais altamente qualificados para embalar itens de todos os tamanhos com precisão, cumprindo todas as normas de mudanças.</p>
            <div className='cards'>
                {card.map((item, index) => (
                    <Card key={index} card={item} />
                ))}
            </div>
            <h3>COMO TRABALHAMOS</h3>
            <p className='p-h3'>Escolha a Conforte Transportadora para confiança e cuidado. Nossos veículos de grande porte e equipamentos de segurança protegem seus móveis com excelência!</p>
            <div className='item-img'>
                {images.map((item, index) => (
                    <img key={index} src={item}/>
                ))}
            </div>
            <div className='depoimentos'>
                <h3>DEPOIMENTOS DE NOSSOS CLIENTES!</h3>
                <p>Esses são alguns comentários de clientes satisfeitos que nos avaliaram no Google.</p>
                <GoogleComment />
            </div>
        </div>
    )
}

export default Main