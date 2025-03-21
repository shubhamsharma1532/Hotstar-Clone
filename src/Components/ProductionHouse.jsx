import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
      alt: "Disney",
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
      alt: "Pixar",
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
      alt: "Marvel",
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
      alt: "Star Wars",
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
      alt: "National Geographic",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-6 py-2 px-5 md:px-16">
      {productionHouseList.map((item, index) => (
        <div
          className="relative border-2 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer shadow-2xl shadow-gray-700 border-gray-500 rounded-2xl overflow-hidden"
          key={index}
        >
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full rounded-2xl z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          ></video>

          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover rounded-2xl z-[1] hover:opacity-0 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
