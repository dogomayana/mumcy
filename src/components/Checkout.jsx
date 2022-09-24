import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'

// const value =process.env.REACT_APP_PAYSTACK

export default function Checkout({closeModal, pay, sum}) {

    const [customer, setCustomer] = useState('');
    const [cusAddress, setCusAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const payment = `Pay ${sum}`

    const payWithPayStack =(e) =>{
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: `pk_live_fdf590fd88902ab8a4fef64a7e82a9c66fad8b2b`,
            // key:    `${value}`,
            amount: `${pay}`,
            email,
            firstname: customer,
            lastname: cusAddress,
            phone,
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail('')
                setCusAddress('')
                setCustomer('')
                setPhone('')
            },
            onCancel(){
                alert("You canceled your transaction")

            }

        })
    }


  return (
    <div className='ScreenSize w-full h-screen flex justify-center md:px-0 items-center'>
        
        <div className='w-full bg-[#fff] px-1'>

            <div className='mt-10 mb-5 md:mt-6 md:mb-2 md:w-6/12 mx-auto md:shadow-md bg-white p-2'>
                <div className='flex justify-between '>
                    <h1 className='text-center text-lg font-semibold'>Checkout</h1>
                    {/* <span className='block'>Amount to pay &#8358;{sum}</span> */}
                    <button onClick={()=> closeModal(false)} className='inline-block text-base font-medium'>X</button>
                </div>

                <form onSubmit={payWithPayStack}>
                <div className='mt-9 md:mt-4 md:p-2'>
                    <span className='block text-base font-medium text-black'>Name:</span> 
                    <input type='text' 
                        placeholder='enter your name' 
                        required
                        className='border border-grey-400 text-black p-2 capitalize mt-1 rounded-sm w-full'
                        value={customer}
                        onChange={(e)=>setCustomer(e.target.value)}
                        />
                </div>

                <div className='mt-3 md:p-2'>
                    <span className='block text-base font-medium text-black'>Address:</span> 
                    <input type='text' 
                        placeholder='enter your address' 
                        required
                        className='border border-grey-400 text-black p-2 rounded-sm mt-1 w-full capitalize'
                        value={cusAddress}
                        onChange={(e)=>setCusAddress(e.target.value)}
                        />
                </div>

                <div className='mt-3 md:p-2'>
                    <span className='block text-base font-medium text-black'>Phone:</span> 
                    <input type='number' 
                        placeholder='+234...' 
                        required
                        className=' capitalize border border-grey-400 text-black p-2 rounded-sm mt-1 w-full'
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                </div>

                <div className='mt-3 md:p-2'>
                    <span className='block text-base font-medium text-black'>Email:</span> 
                    <input type='email' 
                        placeholder='example@mail.com' 
                        required
                        className='border border-grey-400 text-black p-2 rounded-sm mt-1 w-full'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                </div>
            <input type='submit' value={payment} className='w-10/12 block mx-auto my-8 bg-green-500 uppercase text-base font-medium p-2 rounded-md'/>
                </form>
           </div>
        </div>
    </div>
  )
}
