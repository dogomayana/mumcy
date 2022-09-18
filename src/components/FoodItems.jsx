import React from 'react'
import { useCart} from 'react-use-cart'


export default function FoodItems(props) {

    const { addItem} = useCart();

  return (
    <div className='card rounded-md w-11/12 md:w-3/12 shadow-md mt-4 md:mt-8 mx-auto p-2 bg-white'>
        <div className='cardPics block overflow-hidden w-[120px] h-[120px] rounded-full mx-auto'>
            <img src={props.image} alt={props.name} className='w-[720px] h-[180px] object'/>
        </div>
        
        <div className='mt-8 mx-auto'>
            <p className='cardTitle font-medium mt-1 mb-3 text-lg text-black px-3'>
                    {props.name}
                <span className='inline-block float-right'>&#8358;{props.price}</span>
            </p>
            <p className='cardTitle mt-2 text-base text-justify p-1'>{props.desc}</p>
        </div>

        <div>
            <button onClick={()=> addItem(props.item)}  className='block bg-green-300 w-11/12 mx-auto my-4 p-2 rounded text-lg font-medium'> Add to cart</button>
        </div>
    </div>
  )
}
