import React from 'react'
import Produkt from './Produkt';
import './Produkts.css'

export default function Produkts() {
    const products = [
        {
          id: 1,
          name: "MacBook",
          price: 100000,
          left: 31,
          image: "http://intocode.ru/d/react-project-1/images/1.jpg",
        },
        {
          id: 2,
          name: "Galaxy",
          price: 35999,
          left: 11,
          image: "http://intocode.ru/d/react-project-1/images/2.jpg",
        },
        {
          id: 3,
          name: "Скутер",
          price: 65500,
          left: 0,
          image: "http://intocode.ru/d/react-project-1/images/3.jpg",
        },
        {
          id: 4,
          name: "Монитор Samsung",
          price: 12000,
          left: 7,
          image: "http://intocode.ru/d/react-project-1/images/4.jpg",
        },
        {
          id: 5,
          name: "Респераторная маска",
          price: 500,
          left: 24,
          image: "http://intocode.ru/d/react-project-1/images/5.jpg",
        },
        {
          id: 6,
          name: "Стиральная машина",
          price: 100000,
          left: 0,
          image: "http://intocode.ru/d/react-project-1/images/6.jpg",
        },
      ];
    
  return ( 
     <div className="divMain">
      <div className="praviBlock">
        <h3>Гаджеты и аксессуары</h3> <hr /> <h3>Бытовая техника</h3> <hr />
        <h3> Прочее</h3>
      </div>
      <div className='leviBlok'>
    {products.map((item) => {
        return (
      <div className='divProdukts'>
      <Produkt name={item.name} price={item.price} image={item.image} />
      </div>
        )
    })}</div> </div>
  )
}
