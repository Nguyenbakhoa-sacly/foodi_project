import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateProfilePage = () => {
  // redirecting to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { name, photoURL } = data;
    updateUserProfile(name, photoURL)
      .then(() => {
        navigate(from, { replace: true })
      })
      .catch(() => { })
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form
          onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className='font-bold'>Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input {...register("name")}
              type="text" placeholder="Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span
                className="label-text">Upload Photo</span>
            </label>
            <input type="text" {...register("photoURL")} placeholder="photoURL" className="input input-bordered" required />

            {/* uploading image witll be leter */}
            {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-Orange text-white border-none hover:bg-amber-500">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfilePage
