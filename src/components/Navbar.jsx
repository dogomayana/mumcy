import React from 'react';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart'

const Navbar = () => {
  const {totalItems} =useCart();
  
    return (
        <nav>
            <div className='flex justify-between p-4 px-4 md:px-10 fixed w-full bg-yellow-400'>
                <div className='font-bold text-lg'>
                    <span className='cursor-pointer'>
                    <Link to="/">
                        MB Ofe-Aku
                    </Link>
                    </span>
                </div>

                <div className='block'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-black font-semibold relative">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className='block absolute top-3 right-2 md:right-7 w-5 h-5 font-medium text-base text-center rounded-full bg-red-600 text-white cursor-pointer'>
                    <Link to={`/cart`}>
                        {totalItems}
                    </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
