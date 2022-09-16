import React from 'react'
import FoodItems from './components/FoodItems'
import Hero from './components/Hero'
import data from './data'

export default function Home() {
  return (
    <>
      <Hero/>
    <div className='w-full mx-auto flex flex-wrap -my-4 py-2 rounded-t-2xl bg-white'>
        {data.products.map((item, index)=>(

        <FoodItems image={item.image} name={item.name} desc={item.desc} item={item} price={item.price} key={index}/>
        ))}

    </div>
    </>
  )
}
