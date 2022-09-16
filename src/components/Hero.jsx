import React from 'react';

const Hero = () => {
    return (
        <>
        <div className='w-full pt-8 bg-gradient-to-b from-yellow-400 to-yellow-200'>
            <div className='md:w-11/12 mx-auto md:flex px-2 py-16 md:space-x-3'>
                <div className='w-full md:w-[50%] p-1 py-4 mt-6'>
                    <h1 className='text-lg font-semibold text-justify'>Ofe-aku special is prepared with the best traditional recipe</h1>
                </div>

                <div className='w-full bg-white p-3 md:w-[50%] md:h-[240px] border border-grey-400 my-2 block md:overflow-hidden'>
                    <span className='block w-[200px] h-[160px] my-auto mx-auto rounded-full  md:w-32'>
                        <img src='https://cdn-0.generatormix.com/images/thumbs/random-foods-generator.jpg'
                        alt='food'
                        className='w-[300px] h-40 mx-auto rounded-full'
                    />
                    </span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero;
