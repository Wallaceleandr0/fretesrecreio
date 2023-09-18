import React from 'react'
import Card from '../../components/Card/Card'
import './Services.css'

function Services() {

  const images = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
    "img-6.jpg",
  ]

  return (
    <div className='services'>
      <h3>SERVIÇOS</h3>
      <Card />
      <a href='#'>Fazer Orçamento</a>
      <div className='images-flex'>
      {images.map((img, index) => (
        <img src={img} key={index}/>
        ))}
        </div>
    </div>
    
  )
}

export default Services