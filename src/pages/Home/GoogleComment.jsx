import { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GoogleComment () {
    
    const [infoGoogle, setInfoGoogle] = useState([])

    const settings = {};

    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 5000, 

    function ajustarSettings () {
        
        }

useEffect(() => {
    // Realiza uma requisição para buscar o arquivo JSON
    fetch('/google-comment.json')
      .then((response) => response.json())
      .then((jsonData) => setInfoGoogle(jsonData))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

    return (
        <Slider className='slider' {...settings}>
       {infoGoogle.map((item) => (
        <div className='info-google'>
        <img src={item.imgGoogle} className='google-icon'/>
        <img src={item.imgProfile} className='profile-icon' />
        <h4>{item.name}</h4>
        <p>{item.text}</p>
        </div>
       ))}
       </Slider>
    )
}

export default GoogleComment