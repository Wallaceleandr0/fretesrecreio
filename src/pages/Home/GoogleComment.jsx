import { useState, useEffect } from 'react'
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'

function GoogleComment () {
    
    const [infoGoogle, setInfoGoogle] = useState([])

    const isLargeScreen = useMediaQuery({ minWidth: 1070 })
    const isSmallScreen = useMediaQuery({ maxWidth: 620 })

    const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isLargeScreen ? 3 : isSmallScreen ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
        <div key={item.id} className='info-google'>
        <img src={item.imgGoogle} className='google-icon'/>
        <img src={item.imgProfile} className='profile-icon' />
        <img src={item.stars} className='stars'/>
        <h4>{item.name}</h4>
        <p>{item.text}</p>
        </div>
       ))}
       </Slider>
    )
}

export default GoogleComment