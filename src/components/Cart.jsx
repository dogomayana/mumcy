import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart'

export default function Cart() {
  const {items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem, emptyCart} =useCart();

  const delivery = 200;
  const subTotal = parseInt(`${cartTotal}`)
  const sum = delivery +subTotal

  if(isEmpty) return (
    <div className='py-20 px-4 w-full mx-auto'>
      <h1 className='py-20'>
        <Link to='/'>
        Your Cart is empty Go Shopping
        </Link>
      </h1>
    </div>)
    
  return (
    <div className='py-20 px-2 w-full border border-red-600'>

      <h1 className='mb-3'>Cart ({totalUniqueItems}) total items: ({totalItems})</h1>

      <table className="table-auto w-full mx-auto border border-red-600">
        <tbody className='mb-2'>

          {items.map((item, index)=>(
            <tr key={index} className="my-8">
              <td className=''>
                <span className='block'>
                <img alt={item.name} src={item.image} className="h-[2rem] w-[2rem] object-cover founded-full"/>
                </span>
              </td>

              <td className='flex-col font-medium text-base'>{item.name}
                <span className='block text-sm font-normal'>&#8358;{item.price}</span>
              </td>

              <td className='flex justify-between'>
                <span className='block'>
                  <button onClick={()=> removeItem(item.id)}>Remove</button>
                </span>
                <span className='block'>
                  <button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                </span>
                <span className='block'>
                  {item.quantity}
                </span>
                <span className='block'>
                  <button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                </span>
              </td>
          </tr>
          ))}
      </tbody>
    </table>
    
      <div className='mt-5 w-full mx-auto text-justify'>
        <table className='table-auto w-full'>
          <tbody>
            <tr>
              <td>Sub Total:</td>
              <td>{cartTotal}</td>
            </tr>

            <tr>
              <td>Delivery:</td>
              <td>{delivery}</td>
            </tr>

            <tr>
              <td>Grand Total:</td>
              <td>&#8358; {sum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}