import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-toastify';
import useCart from '../../hooks/useCart';
const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  // load data
  const [cart, refetch] = useCart();
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  // add cart
  const handleAddCart = (item) => {
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        quantity: 1,
        name,
        price,
        image
      }
      console.log(cartItem)
      fetch('http://localhost:3001/v1/food/carts',
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
      // setTimeout(() => {
      //   navigate('/signup', { state: { from: location } })
      // }, 5000)
    }
  }

  return (
    <>
      <div className="card shadow-xl relative mr-5 md:my-5">
        <div
          className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-Orange 
          ${isHeartFilled ? "text-rose-500" : "text-white"
            }
            `}
          onClick={handleHeartClick}
        >
          <FaHeart className="w-5 h-5 cursor-pointer" />
        </div>

        <Link to={`/menu/${item._id}`}>
          <figure>
            <img src={item.image} alt="Shoes" className="hover:scale-105 transition-all duration-300 md:h-72" />
          </figure>
        </Link>
        <div className="card-body">
          <Link to={`/menu/${item._id}`}>
            <h2 className="card-title">{item.name}!</h2>
          </Link>
          <p>Description of the item</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold">
              <span className="text-sm text-red">$ </span> {item.price}
            </h5>
            <button
              onClick={() => handleAddCart(item)}
              className="btn bg-Orange hover:bg-amber-500 text-white">Add to Cart </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
