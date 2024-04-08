import { useState } from "react";
import axios from 'axios';
import { BiSolidUser } from "react-icons/bi";
import { BiSolidLock } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
   
  });
  const [passwordMatchError, setPasswordMatchError] = useState("");

  function  changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError("Passwords do not match");
      return;
    }
    const {confirmPassword,...dataToSend}=formData;
    // Proceed with form submission
    console.log("Form Data");
    console.log(formData);

    console.log(dataToSend)


    // django api ke baad
    try {
        const response = await axios.post('http://127.0.0.1:8000/archivetool/signup/', 
        dataToSend
        // {
        //   first_name: "harsh",
        //   last_name: "sharma",
        //   email: "hrsjh12@yopmail.com",
        //   password: "123harsh",
        // }
        );
        console.log(response)
        // Handle successful signup (e.g., redirect user)
      } catch (err) {
        console.log(err)
      }
  }

  return (
    <div className="flex flex-col h-[80vh]  justify-center items-center">
      <form onSubmit={submitHandler}>
        <div className='relative my-3 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-80 py-2 text-sm'
              type="text"
              placeholder="Enter First name"
              onChange={changeHandler}
              name="first_name"
              value={formData.first_name}
            />
            <BiSolidUser className='absolute top-3 ml-4'/>
        </div>
        
        <div className='relative my-3 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-80 py-2 text-sm'
              type="text"
              placeholder="Enter Last name"
              onChange={changeHandler}
              name="last_name"
              value={formData.last_name}
            />
            <BiSolidUser className='absolute top-3 ml-4'/>
        </div>

        <div className='relative my-3 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-80 py-2 text-sm'
              type="email"
              placeholder="Enter Email"
              onChange={changeHandler}
              name="email"
              value={formData.email}
            />
            <MdEmail className='absolute top-3 ml-4'/>
        </div>

   
        <div className='relative my-3 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-80 py-2 text-sm'
              type="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              name="password"
              value={formData.password}
            />
            <BiSolidLock className='absolute top-3 ml-4'/>
        </div>
        <div className='relative my-3 '>
            <input
              className='bg-gray-100 border-2 border-gray-300 text-center focus:outline-none rounded block w-80 py-2 text-sm'
              type="password"
              placeholder="Confirm Password"
              onChange={changeHandler}
              name="confirmPassword"
              value={formData.confirmPassword}
            />
            <BiSolidLock className='absolute top-3 ml-4'/>
        </div>


        <div className='flex justify-between mb-4'>
          <span className='text-gray-400 text-sm cursor-pointer'>Remember Me</span>
          <span className='text-gray-400 text-sm cursor-pointer'>Forgot Password?</span>
        </div>
        {passwordMatchError && <p style={{ color: "red" }}>{passwordMatchError}</p>}
        <div className="flex gap-5">
          <button
            type="submit"
            className='bg-sky-800 flex justify-start pl-14 text-white w-3/4 py-1.5  rounded text-sm'
          >Create new account</button>

          <button
            type="submit"
            
            className='bg-sky-800 flex justify-start pl-5 text-white w-1/4  py-1.5  rounded text-sm'
          >Login</button>


        </div>
        

        
      </form>
    </div>
  );
}

export default SignUp;
