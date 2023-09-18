import React from 'react';
import { useState, useEffect } from 'react'
import './Card.css'

const Card = () => {

  const [card, setCard] = useState([])

  useEffect(() => {
    // Realiza uma requisição para buscar o arquivo JSON
    fetch('/card.json')
      .then((response) => response.json())
      .then((jsonData) => setCard(jsonData))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    
    <div className="cards">
      {card.map((card, index) => (
        <div key={index} className="card">
          <img src={card.imagem}  alt="Imagem" className='icon-img' />
          <h4>{card.titulo}</h4>
          <p>{card.texto}</p>
        </div>
      ))}
    </div>
    
  );
};

export default Card;
