import "../css/BannerCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const isSmallScreen = window.innerWidth <= 500

const images = isSmallScreen
? ["small-banner-1.png", "small-banner-2.png"]
: ["banner-1.png", "banner-2.png"]


const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Intervalo de tempo em milissegundos
  };

  return (
    <div className="banner-carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Banner ${index + 1}`} style={{ width: "100%", objectFit: "cover" }} />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;