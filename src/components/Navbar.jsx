import React from 'react';
import { Link } from 'react-router-dom';
import {useCart} from 'react-use-cart'

const Navbar = () => {
  const {totalItems} =useCart();
  
    return (
        <nav>
            <div className='flex justify-between p-4 px-4 fixed w-full bg-yellow-400'>
                <div className='font-bold text-lg'>
                    Logo
                </div>

                <div className='block'>
                    <img src="https://img.icons8.com/glyph-neue/64/000000/shopping-cart.png" alt='cart' className='h-7 relative'/>
                    <span className='block absolute top-3 right-2 w-5 h-5 font-medium text-base text-center rounded-full bg-red-600 text-white'>
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
