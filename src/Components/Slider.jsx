import React from "react";
import Slider from "react-slick";
import userData from "./SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container w-3/4 m-auto mt-20 text-black ">
      <Slider {...settings}>
        {userData.map((data, index) => (
          <div key={index} className="p-10 border-[2px] bg-blue-200 rounded-md">
            <h1 className="text-center text-2xl">{data.name}</h1>
            <h2 className="text-lg text-center">{data.age}</h2>
            <p className="text-[16px]">{data.about}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
