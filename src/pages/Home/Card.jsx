import React from 'react';


const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imagem} alt="Imagem" className='icon-img' />
      <h4>{card.titulo}</h4>
      <p>{card.texto}</p>
    </div>
  );
};

export default Card;