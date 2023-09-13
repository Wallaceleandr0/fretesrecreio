import Card from './Card'
import React, { useEffect, useState } from 'react';

function Servicos () {

    const [card, setCard] = useState([]);

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

    return (
        <div className='servicos-bg'>
            <h3>NOSSOS SERVIÇOS</h3>
            <p className='p-top'>Conte com nossos profissionais altamente qualificados para embalar itens de todos os tamanhos com precisão, cumprindo todas as normas de mudanças.</p>
            <div className='cards'>
                {card.map((item) => (
                    <Card key={item.id} card={item} />
                ))}
            </div>
            <h3>COMO TRABALHAMOS</h3>
            <p className='p-h3'>Escolha a Conforte Transportadora para confiança e cuidado. Nossos veículos de grande porte e equipamentos de segurança protegem seus móveis com excelência!</p>
            <div className='item-img'>
                {images.map((item) => (
                    <img src={item}/>
                ))}
            </div>
        </div>
    )
}

export default Servicos