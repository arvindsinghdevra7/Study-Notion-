import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event) {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event) {
    event.preventDefault()
    setIsLoggedIn(true)
    toast.success("Logged In")
    navigate("/dashboard")
  }

  return (
    <form onSubmit={submitHandler}>

      <label>
        <p>Email Address <sup>*</sup></p>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email id"
        />
      </label>

      <label>
        <p>Password <sup>*</sup></p>
        <div>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
          />

          <span onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button >
        Sign In
      </button>

    </form>
  )
}

export default LoginForm
