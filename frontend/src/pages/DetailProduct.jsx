import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
  const param = useParams();
  const [detail, setDetail] = useState([]);
  const { id } = param;

  useEffect(() => {
    axios.post(`${import.meta.env.VITE_API}/food/product/${id}`)
      .then((res) => setDetail(res.data))

  }, [])

  console.log(detail)
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 from-[#FAFAFA] from-0%
      to-[#FCFCFC] to-100%'>
        <div className='py-24 '>

          <div class="max-w-7xl mx-auto mt-6">
            <div class="flex flex-col md:flex-row">
              <div class="md:flex-1 px-4">
                <div >
                  <div class="h-64 md:h-80 flex justify-center items-center rounded-lg mb-4">
                    <img src={detail.image} alt="" />
                  </div>
                  <div className='grid grid-cols-4 gap-4'>
                    <div class="h-20 xl:h-40 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span class="text-5xl">1</span>
                    </div>

                    <div class="h-20 xl:h-40 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span class="text-5xl">2</span>
                    </div>

                    <div class="h-20 xl:h-40 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span class="text-5xl">3</span>
                    </div>

                    <div class="h-20 xl:h-40 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <span class="text-5xl">4</span>
                    </div>

                  </div>

                  {/* <div class="flex -mx-2 mb-4">
                    <template x-for="i in 4">
              <div class="flex-1 px-2">
                <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                  <span x-text="i" class="text-2xl"></span>
                </button>
              </div>
            </template>
                  </div> */}
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl 
                md:text-3xl">{detail.name}</h2>
                <p class="text-gray-500 text-sm">
                  {detail.category}
                </p>
                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class=" mr-1 text-orange mt-1">$</span>
                      <span class="font-bold text-3xl">{detail.price}</span>
                    </div>
                  </div>

                </div>

                <p class="text-gray-500">{detail.recipe}</p>
                <div className='flex my-3 justify-start'>
                  <div className="rating gap-1">
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-rose-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-amber-300" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-green-400" />
                  </div>
                </div>
                <div class="flex py-4 space-x-4">
                  <div class="relative">
                    <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                    <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>

                  <button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-Orange hover:bg-amber-500 text-white">
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct
