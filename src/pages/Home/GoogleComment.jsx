import { useState, useEffect } from 'react'
import Slider from "react-slick";


function GoogleComment () {
    
    const [infoGoogle, setInfoGoogle] = useState([])

    const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    })

    // useEffect(() => {
    //     const ajustarSettings = () => {
    //         if (window.innerWidth <= 1070) {
    //             setSettings({
    //                 ...settings,
    //                 dots: false,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 autoplaySpeed: 3000,
    //             })
    //         } else if (window.innerWidth <= 750) {
    //             setSettings({
    //                 ...settings,
    //                 dots: false,
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 autoplaySpeed: 3000, 
    //             })
    //         }
    //     }
    //     ajustarSettings()
    //     window.addEventListener("resize", ajustarSettings)
    // })


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