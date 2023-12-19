import React, { useContext } from 'react'
import { Link, useLocation, useNavigate }
  from 'react-router-dom'
import { useForm } from "react-hook-form"
import { FaGoogle, FaFacebookF, FaGithub }
  from 'react-icons/fa'
import Modal from '../modal/Modal'
import { AuthContext } from '../../context/AuthProvider'
import axios from 'axios'

const Signup = () => {
  // redirecting to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const { register, handleSubmit,
    watch, reset,
    formState: { errors },
  } = useForm()
  const { createUser, updateUserProfile,
    signUpWithGamil } = useContext(AuthContext);

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        // Signed up 
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            }
            axios.post(`${import.meta.env.VITE_API}/users`,
              userInfo).then((res) => {
                alert('Signup successful!');
                navigate(from, { replace: true })
              });
          });
        document.getElementById("my_modal_5").close()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  // login with google
  const handleLogin = () => {
    signUpWithGamil()
      .then(result => {
        const user = result.user;
        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        }
        axios.post(`${import.meta.env.VITE_API}/users`,
          userInfo).then((res) => {
            alert('Signup successful!');
            navigate('/')
          })
      })
      .catch(err => { console.log(err) });
  }

  return (
    <div className=' max-w-md bg-white shadow w-full mx-auto my-20 items-center justify-center '>
      <h3 className='font-bold text-3xl text-orange text-center'>Create Account!</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body">
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="name"
            className="input input-bordered"
            required
            {...register("name")}
          />
        </div>
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
            value="Sign up"
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
          onClick={handleLogin}
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
