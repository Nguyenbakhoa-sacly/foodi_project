import React from 'react'

const Banner = () => {
  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 from-[#FAFAFA] from-0%
      to-[#FCFCFC] to-100%'>
      <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>

        {/* images */}
        <div className='md:w-1/2 '>
          <img src="/images/home/Banner.png" alt="" />
          <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            <div className=' w-64 flex bg-white py-2 px-3 rounded-2xl items-center shadow-md gap-3'>
              <img className='rounded-2xl'
                src="/images/home/b-food1.png" alt="" />
              <div className='space-y-1'>
                <h5 className='font-medium'>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                </div>
                <p className='text-red '>$18.00</p>
              </div>
            </div>
            <div className=' hidden w-64 sm:flex bg-white py-2 px-3 rounded-2xl items-center shadow-md gap-3'>
              <img className='rounded-2xl'
                src="/images/home/b-food1.png" alt="" />
              <div className='space-y-1'>
                <h5 className='font-medium'>Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
                </div>
                <p className='text-red '>$18.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'> Dive into Delights of Delectable <span className='text-orange'>Food</span>
          </h2>
          <p className='text-xl text-[#4A4A4A]'> whre Each Plate Weaves a Strory of Culinary Mastery and Passionate Craftsmanship</p>
          <button className='btn bg-Orange px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
