import React from "react";
import Slider from "react-slick";

// Logo Imports
import yamaha from "../assets/brands/yamaha.jpg";
import bajaj from "../assets/brands/bajaj.jpg";
import honda from "../assets/brands/honda.jpg";
import KTM from "../assets/brands/ktm.jpg";
import TVS from "../assets/brands/tvs.jpg";
import suzuki from "../assets/brands/suzuki.jpg";
import RE from "../assets/brands/royal-enfield.jpg";
import hero from "../assets/brands/hero.jpg";
import Crossfire from "../assets/brands/crossfire.jpg";
import ace from "../assets/brands/ace.jpg";
import aprilla from "../assets/brands/aprilia.jpg";
import asian from "../assets/brands/asian.jpg";
import beneli from "../assets/brands/benelli.jpg";
import BMW from "../assets/brands/bmw.jpg";
import cfmoto from "../assets/brands/cfmoto.jpg";
import crossx from "../assets/brands/crossx.jpg";
import haojue from "../assets/brands/haojue copy.jpg";
import HDB from "../assets/brands/Harley-Davidson-Bike.jpg";
import hartford from "../assets/brands/hartford-motorcycl-logo.jpg";
import husqvarna from "../assets/brands/Husqvarna.jpg";
import italjet from "../assets/brands/italjet.jpg";
import Jawa from "../assets/brands/Jawa3.jpg";
import Kawasaki from "../assets/brands/Kawasaki.jpg";
import mahindra from "../assets/brands/mahindra.jpg";
import yatri from "../assets/brands/yatri-motorcycles-nepal-logo-gadgetsgaadi.jpg";
import runner from "../assets/brands/runner.jpg";

const brands = [
  { name: "Yamaha", logo: yamaha },
  { name: "Honda", logo: honda },
  { name: "Bajaj", logo: bajaj },
  { name: "KTM", logo: KTM },
  { name: "TVS", logo: TVS },
  { name: "Suzuki", logo: suzuki },
  { name: "Royal Enfield", logo: RE },
  { name: "Hero", logo: hero },
  { name: "Crossfire", logo: Crossfire },
  { name: "Ace", logo: ace },
  { name: "Aprilla", logo: aprilla },
  { name: "Asian", logo: asian },
  { name: "Benelli", logo: beneli },
  { name: "BMW", logo: BMW },
  { name: "CF Moto", logo: cfmoto },
  { name: "CrossX", logo: crossx },
  { name: "Haojue", logo: haojue },
  { name: "Harley Davidson", logo: HDB },
  { name: "Hartford", logo: hartford },
  { name: "Husqvarna", logo: husqvarna },
  { name: "Italjet", logo: italjet },
  { name: "Jawa", logo: Jawa },
  { name: "Kawasaki", logo: Kawasaki },
  { name: "Mahindra", logo: mahindra },
  { name: "Yatri", logo: yatri },
  { name: "Runner", logo: runner },
];

const BrandCarousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 h-[60vh]">
      <h2 className="text-3xl font-normal text-center mb-8 text-gray-800">
        All Motorcycle Brands
      </h2>
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.name} className="px-2">
            <div className="bg-white  rounded-md flex flex-col items-center justify-center p-6 w-full h-44 border transition-transform hover:scale-105 duration-300">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
              <p className=" text-2xl font-serif text-center text-gray-600">
                {brand.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandCarousel;
