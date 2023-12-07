import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa'
import Modal from '../modal/Modal'

const Signup = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className=' max-w-md bg-white shadow w-full mx-auto my-20 items-center justify-center '>
      <h3 className='font-bold text-3xl text-orange text-center'>Create Account!</h3>
      <form className="card-body">

        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            {...register("email")}
          />
        </div>

        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register("password")}
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            value="Login"
            className="btn text-white bg-Orange hover:bg-amber-500 border-none btn-primary"
          />
        </div>
        <p className="text-center my-2">
          Have an account?{" "}
          <button
            onClick={() =>
              document.getElementById('my_modal_5').showModal()}
            to="/signup"
            className="underline text-red ml-1">
            Login
          </button>{" "}
        </p>

        <Link to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >✕</Link>
      </form>

      {/* social sign in */}
      <div className="text-center space-x-3 pb-8">
        <button
          className="btn btn-circle hover:bg-Orange hover:text-white"
        // onClick={handleLogin}
        >
          <FaGoogle />
        </button>
        <button
          className="btn btn-circle hover:bg-Orange hover:text-white">
          <FaFacebookF />
        </button>
        <button
          className="btn btn-circle hover:bg-Orange hover:text-white">
          <FaGithub />
        </button>
      </div>
      <Modal />
    </div>

  )
}

export default Signup
