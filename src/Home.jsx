import React from 'react'
import FoodItems from './components/FoodItems'
import Hero from './components/Hero'
import data from './data'

export default function Home() {
  return (
    <>
      <Hero/>
    <div className='w-full mx-auto -mt-4 mb-20 py-2 rounded-t-3xl bg-white'>
      <div className='md:w-11/12 flex flex-wrap mx-auto'>

        {data.products.map((item, index)=>(
          
        <FoodItems image={item.image} name={item.name} desc={item.desc} item={item} price={item.price} key={index}/>
        ))}
        </div>

    </div>
    </>
  )
}
