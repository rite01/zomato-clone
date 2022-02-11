import React from "react";
import "./topbrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const topBrandList = [
  {
    id: 1,
    time: "18 min",
    title: "Apna Sweet",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9157cf4a2b9b8f8761bce88704cc9b0e_1617972257.png?output-format=webp",
  },
  {
    id: 2,
    time: "25 min",
    title: "Guru Kripa",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a7d28fb80d54066761f3d46c17168274_1617972125.png?output-format=webp",
  },
  {
    id: 3,
    time: "38 min",
    title: "Nafees Restaurant",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/948574cd50798ba77c066b93e11b0e24_1617972221.png?output-format=webp",
  },
  {
    id: 4,
    time: "28 min",
    title: "Tinku",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e8615ce7298eee6684772eab78020240_1617972313.png?output-format=webp",
  },
  {
    id: 5,
    time: "18 min",
    title: "Oye24",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a2f78ff22ebc2768bc99cb229733ba6c_1606908119.png?output-format=webp",
  },
  {
    id: 6,
    time: "28 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433238.png?output-format=webp",
  },
  {
    id: 7,
    time: "24 min",
    title: "Vijay Chaat House",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/0513f25efb8f0469075b65c662f986e0_1617972334.png?output-format=webp",
  },
  {
    id: 8,
    time: "8 min",
    title: "Chill Baby",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/69e6914c4ee9482a9c6c15f8bbb2f1f5_1581914915.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title"> Top brands for you</div>
       <Slider {...settings}>
            {topBrandList.map((brand) => {
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                        <div className="br-name">{brand.title}</div>
                        <div className="br-time">{brand.time}</div>
                    </div>
                </div>
            })}
       </Slider>
    </div>
  );
};

export default TopBrands;
