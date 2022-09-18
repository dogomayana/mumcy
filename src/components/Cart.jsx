import React from 'react'
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart'

export default function Cart() {
  const {items, isEmpty, totalItems, totalUniqueItems, cartTotal, updateItemQuantity, removeItem} =useCart();

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
    <div className='py-20 px-2 w-full'>

      <div className='md:w-10/12 md:mx-auto md:mt-10 shadow-md bg-white p-3'>

      <h1 className='mt-5 mb-10 text-lg font-medium'>Cart ({totalUniqueItems}) total items: ({totalItems})</h1>

      <table className="table-auto border-separate md:px-2 border-spacing-y-6 w-full mx-auto border shadow-sm border-yellow-200">
        <tbody className='mb-2'>

          {items.map((item, index)=>(
            <tr key={index} className="my-9" >
              <td className=''>
                <span className='block'>
                <img alt={item.name} src={item.image} className="h-[3rem] w-[3rem] object-cover rounded-full"/>
                </span>
              </td>

              <td className='flex-col font-medium text-base'>{item.name}
                <span className='block text-sm font-normal'>&#8358;{item.price}</span>
              </td>

              <td className='flex justify-between'>
                <span className='block'>
                  <button className='p-1 text-sm font-medium text-red-600 block' onClick={()=> removeItem(item.id)}>Remove</button>
                </span>

                <span className='block'>
                  <button className='p-1' onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                </span>

                <span className='block p-auto text-base text-black'>
                  {item.quantity}
                </span>

                <span className='block'>
                  <button className='p-1' onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </span>

              </td>
          </tr>
          ))}
      </tbody>
    </table>
    
      <div className='mt-10 w-full mx-auto text-justify'>
        <table className='table-auto w-full'>
          <tbody>
            <tr>
              <td className='text-base font-medium text-black'>Sub Total :</td>
              <td>&#8358; {cartTotal}</td>
            </tr>

            <tr>
              <td className='text-base font-medium text-black'>Delivery :</td>
              <td>&#8358; {delivery}</td>
            </tr>

            <tr>
              <td className='text-base font-medium text-black'>Grand Total :</td>
              <td>&#8358; {sum}</td>
            </tr>
          </tbody>
        </table>

        <button className='block w-10/12 md:w-6/12 md:p-4 md:mt-8 mx-auto mt-4 rounded-md font-medium text-base p-2 bg-green-400'> Pay &#8358;{sum}</button>
      </div>
      </div>
    </div>
  )
}