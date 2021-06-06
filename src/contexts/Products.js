import React, { createContext, useState } from "react";

const Products = createContext();

const ProductsProvider = ({ children }) => {
  const products = useState({
    featuredProducts: [
      {id: 'crayon_house', title: 'Crayon Bounce House', cost: 150, img: '/img/crayola_bounce.jpg'},
      {id: 'castle_house', title: 'Castle Bounce House', cost: 150, img: '/img/castle.png'},
      {id: 'princess_house', title: 'Princess Bounce House', cost: 125, img: '/img/princess.png'},
      {id: 'slide', title: 'Inflatable Super Slide', cost: 150, img: '/img/super_slide_temp.jpg'}
    ],
    otherProducts: [
      {id: 'chair', title: 'Chair', cost: 2, img: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1158064-847&recipeName=680'},
      {id: 'table', title: 'Table', cost: 10, img: 'https://i5.walmartimages.com/asr/c25a6683-fc0e-4b24-a7f1-bb0e6841dd30_1.e46282d4809ef2cb8ec3c2ec77669bbf.jpeg'},
      {id: 'generator', title: 'Power Generator', cost: 60, img: 'http://mobileimages.lowes.com/product/converted/011675/011675307301.jpg'}
  ]});

  return (
    <Products.Provider value={{ products }}> { children } </Products.Provider>
  )
}

export { Products, ProductsProvider };
