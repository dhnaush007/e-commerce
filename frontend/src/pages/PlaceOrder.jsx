import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] borfer-t'>
            {/* ------------Left Side------------------*/ }
         <div className='flex flex-col gap-4 sm:max-w-[480px]' >
               <div className='text-xl sm:2xl my-3 '>
                  <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
                 <div className='flex gap-3'>
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />
                 </div>
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Email Address' type="email" />
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Street' type="text" />
                 <div className='flex gap-3'>
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='City' type="text" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='State' type="text" />
                 </div>
                 <div className='flex gap-3'>
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Pincode' type="number" />
                  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Country' type="text" />
                 </div>
                 <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Phone' type="number" />
               </div>
         </div>
         {/* ------------------Right Side------------------------ */}
           <div className='mt-8'>
            <div className='mt-8 min-w-80'>
           <CartTotal/>
            </div>
            <div className='mt-12'>
              <Title text1={'PAYMENT'} text2={'METHOD'}/>
              {/* -------payment method selection */}
              <div className='flex gap-3 flex-col lg:flex-row'>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p onClick={()=>setMethod('stripe')} className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''} `}></p>
                         <img className='h-5 mx-4 ' src={assets.stripe_logo} alt="" />
                  </div>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p onClick={()=>setMethod('razorpay')} className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''} `}></p>
                         <img className='h-5 mx-4 ' src={assets.razorpay_logo} alt="" />
                  </div>
                  <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                         <p onClick={()=>setMethod('cod')} className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''} `}></p>
                         <p className='text-grat-500 text-sm font-medium mx-4'>CASH ON DEILVERY  </p>
                  </div>
             </div>
               
               <div className='w-full text-end mt-8'>
                <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
               </div>


            </div>

           </div>
    </div>
  )
}

export default PlaceOrder