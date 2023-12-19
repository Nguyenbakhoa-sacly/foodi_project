import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
import { useCart } from '../hooks/useHooks'
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider';

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  // delete items
  const handleDelete = (id) => {
    console.log(id);
    fetch(`${import.meta.env.VITE_API}/food/carts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        refetch();
        toast.success("Deleted successfully!!!");
      })
      .catch((err) => {
        toast.success("Deleted product failed!!!");
      })

  }
  // handleDecrease functional
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      fetch(`${import.meta.env.VITE_API}/food/carts/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: item.quantity - 1 })
      })
        .then(res => res.json())
        .then(data => {
          const updateCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1
              }
            }
            return cartItem;
          });
          refetch();
          setCartItems(updateCart);
        })
    } else {
      toast.warning(`Item can't be zero!`)
    }
  }
  // handleIncrease functional
  const handleIncrease = (item) => {
    fetch(`${import.meta.env.VITE_API}/food/carts/${item._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: item.quantity + 1 })
    })
      .then(res => res.json())
      .then(data => {
        const updateCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1
            }
          }
          return cartItem;
        });
        refetch();
        setCartItems(updateCart);
      })
  }
  // caculate price
  const caculatePrice = (item) => {
    return item.price * item.quantity
  }
  // caculateTotalPrice
  const totalPrice = cart.reduce((total, item) => {
    return total + caculatePrice(item)
  }, 0)

  return (
    <>
      {
        cart.length === 0
          ? (
            <div className=' max-w-screen-2xl xl:px-24 px-4 from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
              <div className='py-36 h-screen flex flex-col justify-center'>
                <p className='text-center font-medium text-xl'>Cart is empty, Please add products</p>
                <div className='flex justify-center mt-3'>
                  <button
                    className='btn text-white hover:bg-amber-500 bg-Orange'
                    onClick={() => { navigate('/menu') }}>Back to menu</button >
                </div>
              </div>
            </div>
          )
          : (
            <div className='section-container '>
              {/* banner cart*/}
              <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 from-[#FAFAFA] from-0%
      to-[#FCFCFC] to-100%'>
                <div className='py-36 flex flex-col justify-center items-center gap-8'>
                  {/* text */}
                  <div className=' space-y-7 px-4'>
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>Items Added to The <span className='text-orange'>Cart</span>
                    </h2>
                  </div>
                </div>
              </div>
              {/* table cart */}
              <div className="overflow-x-auto h-screen">
                <table className="table">
                  {/* head */}
                  <thead className='bg-Orange text-white'>
                    <tr>
                      <th> # </th>
                      <th>Food</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      cart && cart.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={item.image}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className='font-medium'>
                            {item.name}
                          </td>
                          <td>
                            <button
                              onClick={() => handleDecrease(item)}
                              className='btn bg-Orange text-white hover:bg-amber-500 btn-xs btn-circle'>-</button>
                            <input type="text "
                              className='w-10 mx-2  text-center'
                              value={item.quantity}
                              onChange={(e) => { }}
                            />
                            <button
                              onClick={() => handleIncrease(item)}
                              className='btn bg-Orange text-white hover:bg-amber-500 btn-xs btn-circle'>+</button>
                          </td>
                          <td>${caculatePrice(item).toFixed(2)}</td>
                          <th>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="btn btn-ghost btn-circle ">
                              <MdDeleteForever
                                className='w-6 h-6 fill-[#fb8500]' /></button>
                          </th>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>

              <div className='my-12 flex flex-col md:flex-row justify-between items-start'>
                <div className='md:w-1/2 space-y-3'>
                  <h3 className='font-medium'> Customer Details </h3>
                  <p><strong>Name:</strong> {user.displayName}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>User_id:</strong> {user.uid}</p>
                </div>
                <div className='md:w-1/2 space-y-3'>
                  <h3 className='font-medium'> Shopping Details </h3>
                  <p>Total Items: {cart.length}</p>
                  <p>Total Price: ${totalPrice.toFixed(2)}</p>
                  <button className='btn bg-Orange text-white hover:bg-amber-500'>Procceed checkout</button>
                </div>
              </div>
            </div>
          )
      }

    </>
  )
}

export default CartPage
