import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { useCart } from '../hooks/useHooks';
import { IoMdArrowBack } from "react-icons/io";


const DetailProduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [dataRelate, setDataRelate] = useState([]);
  const { id } = param;

  useEffect(() => {
    axios.post(`${import.meta.env.VITE_API}/food/product/${id}`)
      .then((res) => setDetail(res.data))
  }, []);


  const handleAddCart = (item) => {
    const { name, image, price, recipe, _id } = item;
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        quantity: quantity,
        name,
        price,
        image
      }
      console.log(cartItem)
      fetch(`${import.meta.env.VITE_API}/food/carts`,
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItem),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast.success("Add to cart successfully!!!")
        })
    } else {
      toast.error("You are not logged in ?")
    }
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      return quantity
    }
    setQuantity(quantity - 1)
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  };
  const handleBack = () => {
    navigate('/menu')
  }

  // data fakes
  useEffect(() => {
    axios.get(`/menu.json`)
      .then((res) => setDataRelate(res.data.splice(0, 4)))
  }, []);
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 from-[#FAFAFA] from-0%
      to-[#FCFCFC] to-100%'>
        <div className='py-24 '>
          <button
            onClick={() => handleBack()}
            className='btn btn-circle'>
            <IoMdArrowBack className='w-5 h-5' />
          </button>
          <div className="max-w-7xl mx-auto mt-2">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 px-4">
                <div >
                  <div className="h-64 md:h-80 flex justify-center items-center rounded-lg mb-4">
                    <img src={detail.image} alt="" />
                  </div>
                  <div className='grid grid-cols-4 mb-4 gap-4'>
                    {
                      dataRelate && dataRelate.map(
                        (item, index) => (
                          <div key={index} className="avatar ">
                            <div className="w-28 rounded">
                              <img src={item.image} />
                            </div>
                          </div>
                        ))
                    }
                  </div>
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl 
                md:text-3xl">{detail.name}</h2>
                <p className="text-gray-500 text-sm">
                  {detail.category}
                </p>
                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className=" mr-1 text-orange mt-1">$</span>
                      <span className="font-bold text-3xl">{detail.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500">{detail.recipe}</p>
                <div className='flex my-3 justify-start'>
                  <div className="rating gap-1">
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-rose-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-amber-300" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-yellow-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-lime-400" />
                    <input type="radio" name="rating-3" className="mask w-4 h-4 mask-heart bg-green-400" />
                  </div>
                </div>
                <div className="flex py-2 space-x-4 items-center">
                  <button
                    onClick={() => handleDecrease()}
                    className='btn bg-Orange text-white hover:bg-amber-500 btn-xs btn-circle'>-</button>
                  <input type="text "
                    className='w-10 mx-2 text-center'
                    value={quantity}
                    onChange={(e) => { }}
                  />
                  <button
                    onClick={() => handleIncrease()}
                    className='btn bg-Orange text-white hover:bg-amber-500 btn-xs btn-circle'>+</button>
                  <button type="button"
                    onClick={() => handleAddCart(detail)}
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-Orange hover:bg-amber-500 text-white">
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
