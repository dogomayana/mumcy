import React from 'react';

const Hero = () => {
    return (
        <>
        <div className='w-full pt-20 pb-20 bg-gradient-to-b from-yellow-400 to-yellow-200'>
            <div className='md:w-11/12 mx-auto md:flex px-4 md:gap-x-20'>
                <div className='w-full md:w-[45%] p-1 py-4 mt-6'>
                    <h1 className='text-xl font-bold text-justify'>
                        Mama Benji Banga-Stew.
                    </h1>
                    <p className='text-base md:text-lg mt-3 text-justify'>
                        Banga stew is a substitute for the regular tomatoes stew and it&apos;s made with the juice from palm fruit. It can be eaten with any swallow, and any type of food you can your regular stew with.
                    </p>
                </div>

                <div className='w-full p-3 md:w-[45%] my-2 block md:overflow-hidden bg-white rounded-2xl'>
                    <span className='block my-auto mx-auto rounded-full'>
                        <img src='https://cdn-0.generatormix.com/images/thumbs/random-foods-generator.jpg'
                        alt='food'
                        className='w-44 h-40 md:w-[320px] md:h-[240px] mx-auto rounded-full my-auto'
                    />
                    </span>
                </div>
            </div>

            <div className='Order w-full mx-auto p-3 mt-12 md:w-6/12 md:my-20'>
                <h1 className='text-center my-1 text-lg font-semibold md:font-bold md:text-xl'>Order Placement.</h1>
                <p className='text-base font-medium text-justify md:text-lg'>
                    <strong>Orders</strong> are process a day before <strong>(pre-order)</strong> or early hours of the same day, 6am-8am.
                </p>
            </div>

            <div className='info w-11/12 md:w-6/12 mt-12 flex justify-between p-3 gap-x-4 md:gap-x-8 mx-auto'>
                <div className='w-6/12 block py-1 bg-white rounded-md'>
                    <img src='/delivery.png' alt="delivery" className="mx-auto h-10"/>
                    <p className='text-xs font-medium text-center'>Quick delivery within Portharcourt&ndash;town</p>
                </div>

                <div className='w-6/12 py-1 bg-white rounded-md'>
                    <span className='block my-auto h-auto'>
                        <img src='/paystack1.png' alt="securepayment" className="m-auto h-10 bg-white"/>
                    </span>
                    <p className='text-xs font-medium text-center'>Secured payment</p>
                </div>
            </div>
           
            
        </div>
        </>
    );
}

export default Hero;
