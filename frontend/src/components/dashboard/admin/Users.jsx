import React from 'react'
import { UsersApi } from '../../../hooks/useHooks'
import { MdDeleteForever } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Users = () => {

  const [users, refetch] = UsersApi();
  console.log(users);

  return (

    <>
      <div>
        <div className="stats shadow mb-4">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">{users.length}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

        </div>
        {/* table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead className=' text-white rounded-lg bg-slate-800'>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  users?.map((item, index) => (
                    <tr key={index}>
                      <th>  {index + 1} </th>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.photoURL} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <th>
                        {
                          item.role === 'admin'
                            ? 'Admin'
                            : (
                              <button

                                className='btn btn-ghost btn-circle'>
                                <FaUser className='w-5 h-5 ' />
                              </button>)
                        }
                      </th>
                      <td>
                        <button
                          // onClick={() => handleDelete(item._id)}
                          className="btn btn-ghost btn-circle ">
                          <MdDeleteForever
                            className='w-6 h-6 fill-[#fb8500]' /></button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>



  )
}

export default Users
