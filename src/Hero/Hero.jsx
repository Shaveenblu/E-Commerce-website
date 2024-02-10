import React from 'react'
import Image1 from '../../assests/1.jpg'
import Image2 from '../../assests/2.jpeg'
import Image3 from '../../assests/3.jpeg'

const ImageList = [
  {
    id :1,
    img: Image1,
    title: 'Upto 50% off on all mens shoes',
    description: 'GHG'
  },
  {
    id :2,
    img: Image2,
    title: 'Upto 50% off on all mens shoes',
    description: 'GHG'
  },
  {
    id :3,
    img: Image3,
    title: 'Upto 50% off on all mens shoes',
    description: 'GHG'
  },
]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]
    bg-gray-100 flex justify-center items-center dark:bg-gray-950
    dark:text-white duration-200'>
      <div className='h-[600px] w-[600px] bg-primary/30
      absolute -top-1/2 right-0 rounded-3xl rotate-45
      -z-9'></div>
      <div className='container pb-8 sm:pb-0'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl
              font-bold'>Hello</h1>
              <p>Peter</p>
              <div>
                <button className='bg-gradient-to-r from-primary 
                to-secondary hover:scale-10 duration-200 text-white
                py-2 px-4 rounded-full'>
                  Hrrlo
                </button>
              </div>
            </div>
            <div>
              <div>
                <img 
                src = {Image1}
                alt=""
                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                sm:scale-125 object-contain mx-auto'/>

              </div>
            </div>

          </div>
        </div>

      </div>
      </div>
    
  )
}

export default Hero