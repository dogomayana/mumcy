import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 py-5 mt-44'>
            <div className='w-full md:w-6/12 mx-auto pb-6 pt-3 px-2 mt-4'>
                <p className='text-sm text-center text-white'>
                    <span className='block md:ml-8'>
                        <Link to={'/privacy'}>
                            Privacy and Cookies
                        </Link>
                    </span>
                    <span className='block mt-2 md:mx-8 md:mt-4'>
                        Contact: thomasstephen252@gmail.com
                    </span>
                </p>
            </div>
            <h1 className='text-center text-base text-white mt-5'>Compiled and Built By AbobTech Devs <span className=' text-red-600'>&#10084;</span></h1>
        </footer>
    );
}

export default Footer;
