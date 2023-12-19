
import React,
{ useContext, useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { IoIosLogIn } from "react-icons/io";
import Modal from '../modal/Modal';
import { AuthContext } from '../../context/AuthProvider';
import Profile from '../profile/Profile';
import { useCart } from '../../hooks/useHooks';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2">
            <li><Link to='/menu'>All</Link></li>
            <li><Link to=''>Salad</Link></li>
            <li><Link to=''>pizza</Link></li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li className='w-36'><Link to=''>Online Order</Link></li>
            <li className='w-36'><Link to=''>Table Booking</Link></li>
            <li className='w-36'><Link to=''>Order Tracking</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to=''>Offers</Link></li>
      {/* <li><Link to=''>Contact</Link></li> */}

    </>
  )

  const [cart, refetch] = useCart();

  return (
    <>
      <div className={`navbar xl:px-24 ${isSticky ?
        "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* search */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          {
            user
              ?
              <>
                {/* cart */}
                <Link to={"/cart-page"} tabIndex={0} role="button"
                  className="btn btn-ghost btn-circle items-center justify-center md:flex">
                  <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge flex items-center content-center text-white badge-sm bg-Orange 
              w-5 h-5 rounded-full indicator-item">{cart?.length || 0}</span>
                  </div>
                </Link>
                <Profile user={user} />
              </>
              : <button
                onClick={() =>
                  document.getElementById('my_modal_5').showModal()}
                className="py-2 px-4  gap-2 bg-Orange text-white rounded-full flex items-center content-center ">
                <IoIosLogIn className='w-5 h-5' /> Login
              </button>
          }
          <Modal />
        </div>
      </div>
    </>
  )
}

export default Navbar
