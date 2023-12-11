
import React from 'react'

import logo from '../assets/logo.svg'

import { Link, Outlet } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { FaUser, FaShoppingBag, FaEdit } from "react-icons/fa";
import { IoIosAddCircle, IoMdMenu } from "react-icons/io";
const DashboardLayout = () => {
  return (
    <div className="drawer sm:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col sm:items-center sm:justify-center my-3 ">
        {/* Page content here */}
        <div className='flex items-center justify-between mx-3' >
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button sm:hidden">
            <IoMdMenu className='w-5 h-5' />
          </label>
          <div>
            <button className='sm:hidden btn text-white bg-Orange hover:bg-amber-500'>Logout</button>
          </div>
        </div>
        <Outlet />
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
            <Link to="">
              <IoIosAddCircle /> Add Product
            </Link>
          </li>
          <li>
            <Link to="">
              <FaEdit />  Manage Items
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <FaUser /> All Users
            </Link>
          </li>
          <li>
            <Link to="">
            </Link>
          </li>
          <li>
            <Link to="">
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardLayout
