import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

  const [showPassword, setShowPassword] = useState(false)

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  function changeHandler(event) {
    setFormdata(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

function submitHandler(event){
    event.preventDefault();
    if(formdata.password !=formdata.confirmPassword){
        toast.error("Passwords do not match");
        return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData={
        ...formdata
    };
    console.log(accountData);
    navigate("/dashboard");
}

  return (
    <div>

      {/* Student / Instructor */}
      <div>
        <button type="button">Student</button>
        <button type="button">Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        {/* First & Last Name */}
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              value={formdata.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              autoComplete="given-name"
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              value={formdata.lastName}
              onChange={changeHandler}
              placeholder="Enter Last Name"
              autoComplete="family-name"
            />
          </label>
        </div>

        {/* Email */}
        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            value={formdata.email}
            onChange={changeHandler}
            placeholder="Enter Email id"
            autoComplete="email"
          />
        </label>

        {/* Password */}
        <label>
          <p>Create Password<sup>*</sup></p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formdata.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            autoComplete="new-password"
          />

          <span onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        {/* Confirm Password */}
        <label>
          <p>Confirm Password<sup>*</sup></p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formdata.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
            autoComplete="new-password"
          />

          <span onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button >
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm
