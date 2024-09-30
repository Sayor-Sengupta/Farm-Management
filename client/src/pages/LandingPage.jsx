import { MinusSquare } from 'lucide-react'
import React from 'react'



const LandingPage = () => {
  return (
    <>
      <div>
        <div className='w-screen h-6 bg-yellow-100 text-green-900 underline flex justify-between items-center px-4'>
          <div className='flex-grow flex justify-center space-x-4'>
            <div>HOME</div>
            <div>ABOUT</div>
            <div>MEOW</div>
          </div>
          <div className='bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 cursor-pointer'>
            TRY IT FOR FREE
          </div>
        </div>
        <div className="relative">
          <img className='w-screen h-screen object-cover' src='./wheat4.jpg' alt="Wheat field" />
          <p className='absolute top-10 left-0 ml-4 text-2xl font-bold text-white bg-opacity-50 bg-black p-2'>
            //tagline//
          </p>
         
          <div className='absolute bottom-0 left-0 w-full p-4 flex justify-evenly bg-opacity-50 mb-8'>
            <div className='p-11  rounded-lg text-lg border border-black'>div1</div>
            <div className='p-11  rounded-lg text-lg border border-black'>div2</div>
            <div className='p-11  rounded-lg text-lg border border-black'>div3</div>
            <div className='p-11  rounded-lg text-lg border border-black'>div4</div>
          </div>
        </div>
      </div>
    </>
  );
}



export default LandingPage