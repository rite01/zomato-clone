import React from 'react';
import './deliveryCollection.css';
import Slider from 'react-slick'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow'
import DeliveryItem from './deliveryitem';


const deliveryItem =[
  {
    id:1,
    title:'Pizza',
    cover:'https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png?output-format=webp'
  },
  {
    id:2,
    title:'Burger',
    cover:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
  },
  {
    id:3,
    title:'Paneer',
    cover:'https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png'
  },
  {
    id:4,
    title:'Chaat',
    cover:'https://b.zmtcdn.com/data/homepage_dish_data/4/d9452952b432b35d1019ada01cedce7f.png'
  },
  {
    id:5,
    title:'Sandwich',
    cover:'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png?output-format=webp'
  },
  {
    id:6,
    title:'Cake',
    cover:'https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png'
  },
  {
    id:7,
    title:'Thali',
    cover:'https://b.zmtcdn.com/data/homepage_dish_data/4/361f59759ef3ee9c71982b85dadfaf20.png'
  },
  {
    id:8,
    title:'Rolls',
    cover:'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png'
  },
  {
    id:9,
    title:'Chicken',
    cover:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png'
  },
  {
    id:10,
    title:'Fries',
    cover:'https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png'
  }
]

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />

};


const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
      <div className='max-width'>
          <div className='collection-title'>
            Eat what makes you happy
          </div>
          <Slider {...settings}>
            {deliveryItem.map((item) => {
              return <DeliveryItem item={item}/>
            })}
          </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections