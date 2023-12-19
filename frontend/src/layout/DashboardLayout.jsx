
import React from 'react'
import logo from '../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import {
  FaUser, FaShoppingBag,
  FaEdit, FaRegUserCircle, FaShoppingCart, FaLocationArrow, FaQuestionCircle
} from "react-icons/fa";
import {
  IoIosAddCircle, IoMdMenu
} from "react-icons/io";

const sharedLink = (
  <>
    <li>
      <Link className='mt-3' to="/">
        <MdDashboard /> Home
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <FaShoppingCart /> Menu
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <FaLocationArrow />  Orders Tracking
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <FaQuestionCircle /> Customer Support
      </Link>
    </li>
  </>
);


const DashboardLayout = () => {
  return (
    <div className="drawer sm:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-3 ">
        {/* Page content here */}
        <div className='flex items-center 
        justify-between mx-3' >
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button sm:hidden">
            <IoMdMenu className='w-5 h-5' />
          </label>
          <div>
            <button className='sm:hidden flex items-center btn text-white bg-Orange hover:bg-amber-500'>
              <FaRegUserCircle className='w-5 h-5' />
              Logout</button>
          </div>
        </div>

        <div className='mt-5 w-full md:mt-2 px-4'>
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard"
              className='flex justify-start mb-3'>
              <img src={logo} alt="" />
              <div className="badge badge-primary">Admin</div>
            </Link>
          </li>
          <hr />
          <li className='mt-3'>
            <Link to="/dashboard">
              <MdDashboard />Dashboard
            </Link>
          </li>
          <li>
            <Link to="">
              <FaShoppingBag /> Manage Bookings
            </Link>
          </li>
          <li>
            <Link to="/dashboard/newproduct">
              <IoIosAddCircle /> Add Product
            </Link>
          </li>
          <li>
            <Link to="">
              <FaEdit />  Manage Items
            </Link>
          </li>
          <li className='mb-3'>
            <Link to="/dashboard/users">
              <FaUser /> All Users
            </Link>
          </li>
          <hr />
          {/* sharedLink */}
          {sharedLink}
        </ul>
      </div>
    </div>
  )
}

export default DashboardLayout
