import React from 'react';
import { Link } from 'react-router-dom';
import foods from './../data/foods.json';

const Foods = () => {
    return (
        <div className='pb-16 pt-8 w-full -mt-6 rounded-t-3xl  bg-white'>

            <div className='w-full md:w-10/12 mx-auto md:flex'>

            
        {
            foods.map((food, index)=>(
                <div key={index} className='card rounded-md w-11/12 md:w-6/12 shadow-sm mt-2 mx-auto border border-red-200 p-2'>

                    <div className='cardPics block overflow-hidden w-[120px] h-[120px] rounded-full mx-auto'>
                        <img src={food.image} alt={food.name} className='w-[720px] h-[180px] object-cover'/>
                    </div>
                    
                    <div className='mt-3 mx-auto'>
                        <p className='cardTitle font-medium mt-1 mb-3 text-base text-black px-3'>
                            <Link to={`/foods/${food.name}`}>
                                {food.name}
                            </Link>
                            <span className='inline-block float-right'>&#8358;{food.price}</span>
                        </p>
                        <p className='cardTitle mt-1 text-base text-black text-justify p-1'>{food.desc}</p>
                    </div>
                    <button className='block bg-green-300 w-11/12 mx-auto my-4 p-3 text-lg font-medium'> Add to cart</button>
                </div>
            ))
        }

        </div>
        </div>
    );
}

export default Foods;
