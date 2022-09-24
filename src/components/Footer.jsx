import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 py-5'>
            <div className='w-full md:w-6/12 mx-auto pb-6 pt-3 px-2 mt-4'>
                <p className='text-sm text-center md:justify-between mx-auto md:flex text-white'>
                    <span className='block'>
                        <Link to={'/privacy'}>
                            Privacy and Cookies
                        </Link>
                    </span>
                    <span className='block mt-2 md:mt-0'>
                        Contact: thomasstephen252@gmail.com
                    </span>
                </p>
            </div>
            <h1 className='text-center text-base text-white mt-5'>Compiled and Built By AbobTech Devs</h1>
        </footer>
    );
}

export default Footer;
