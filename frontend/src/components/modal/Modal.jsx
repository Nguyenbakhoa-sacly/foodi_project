import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthProvider'
import axios from 'axios'

const Modal = () => {
  const { signUpWithGamil, login, user, updateUserProfile } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('')

  // redirecting to home page or specifig page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit, reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data)
    login(email, password)
      .then((result) => {
        const user = result.user;
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
        alert('Login successful!')
        reset();
        document.getElementById("my_modal_5").close()
        navigate(from, { replace: true })
      }).catch((error) => {
        const errorMessage = error.message;
        setErrorMessage('Mật khẩu hoặc email không đúng!')
      });
  }

  //login with email
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
    <dialog id="my_modal_5"
      className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        <h3 className='font-bold text-3xl text-orange text-center'>Please Login!</h3>
        <form className="card-body"
          onSubmit={handleSubmit(onSubmit)}
          method='dialog'>
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

          {/* error */}
          {
            errorMessage
              ? <p className="text-red text-xs italic">
                {errorMessage}
              </p> : ""
          }

          {/* button login */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="btn text-white bg-Orange hover:bg-amber-500 border-none btn-primary"
            />
          </div>
          <p className="text-center my-2">
            Donot have an account?{" "}
            <Link to="/signup" className="underline text-red ml-1">
              Signup Now
            </Link>{" "}
          </p>
          <button
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >✕</button>
        </form>

        {/* social sign in */}
        <div className="text-center space-x-3 mb-5">
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
      </div>
    </dialog>
  )
}

export default Modal
