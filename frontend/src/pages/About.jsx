import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewletterBox'


const About = () => {
  return (
    <div>
        
       <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div  className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Forever, your one-stop destination for all things extraordinary! At Forever, we believe in offering not just products, but experiences that enrich your life. Founded with a passion for quality and sustainability, our mission is to bring you a curated selection of items that inspire and delight.</p>
            <p>At Forever, we envision a world where every purchase contributes to a brighter future. We are committed to sourcing products that are not only stylish but also eco-friendly, ensuring that you can shop with confidence knowing you’re making a positive impact.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Forever, our mission is to inspire a sustainable lifestyle through thoughtfully curated products that combine quality, style, and responsibility. We strive to empower our customers to make informed choices that not only elevate their everyday experiences but also contribute to a healthier planet. With a commitment to exceptional service and transparency, we aim to build a community that values creativity, innovation, and ethical consumption. Together, let’s create a future that we can cherish forever.</p>

          </div>
       </div>
      <div  className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Qualitity Assurance:</b>
          <p className='text-gray-600'>At Forever, we take quality seriously. Every product undergoes rigorous testing and evaluation to ensure it meets our high standards. We are committed to providing you with items that are not only stylish but also durable and reliable. Your satisfaction 
            is our priority, and we stand by the quality of everything we offer.</p>

         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600' >At Forever, we prioritize your convenience. Our user-friendly website makes shopping a breeze, with easy navigation and a seamless checkout process. Enjoy fast shipping and hassle-free returns, so you can focus on what matters most—finding the perfect products for your lifestyle.
             Shop with us and experience effortless online shopping!</p>
            
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Excetional Customer Serives:</b>
          <p className='text-gray-600'>At Forever, exceptional customer service is at the core of our values. Our dedicated team is here to assist you with any inquiries, ensuring a smooth and enjoyable shopping experience. Whether you need product guidance or support with your order, we are committed to providing prompt, friendly, and knowledgeable service.
             Your satisfaction is our ultimate goal!</p>
            
         </div>
         
      </div>
      <NewletterBox/>

    </div>
  )
}

export default About