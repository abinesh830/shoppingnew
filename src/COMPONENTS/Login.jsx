import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { adduser } from '../SLICES/Userslice';
import { useDispatch} from 'react-redux';


const Login = () => {
  const navigator=useNavigate();
  const dispatch=useDispatch()
  
  const[userdata,setuserdata]=useState({
    useremail:"",
    userpassword:""

  })
  function handlechange(event){
    event.preventDefault();
    const{name,value}=event.target
    setuserdata({...userdata,[name]:value})

  }

  function log(event){
    event.preventDefault()

    axios.post('http://localhost:5000/login',userdata)
    .then((response)=>{
      const statuscode=response.status;

      if(statuscode===200){
      var datauser=response.data.userdetails
    localStorage.setItem("users",JSON.stringify(datauser))

    dispatch(adduser(datauser))

      alert(response.data.message)
      setTimeout(() => {
        navigator('/home')
        
      }, 3000);
      return



      }
      alert(response.data.message)
    })
    .catch((error)=>console.log(error))
    

  }

  return (
    <div className='container-fluid pt-lg-2 ' id='log'>
        <h1 className='text-light text-center mb-5'>SHOPPING</h1>
        
        <div className='row mx-2'>
          <div className='col-lg-6 col-md-8 col-sm-12 mx-auto border rounded p-4 bg-dark text-white' id='log-1'>
            <h1 className='h1 text-white mb-4 text-center' >LOGIN </h1>
            <form action="">
              <div className='form-group mb-3'>
                <label htmlFor="" className='mb-1'>EMAIL</label>
                <input type="text" placeholder='enter your email address'  className='form-control' required  name='useremail' value={userdata.useremail} onChange={handlechange} />
              </div>
              <div className='form-group mb-1'>
                <label htmlFor="" className='mb-1'>PASSWORD</label>
                <input type="password" placeholder='enter your password' className='form-control' name='userpassword' value={userdata.userpassword} required onChange={handlechange} />
              </div>
              <p className='text-danger'>forget password?</p>
              <button className='btn btn-success my-4 form-control' onClick={log}>LOGIN</button>
            </form>
            <hr />
            <div>
            <p>dont have an account?<text className='text-primary ms-2' id='pointer' onClick={()=>navigator('/signin')}>create account</text> </p>

            </div>
            <p>if you have business account ?</p>
            <button className='btn btn-success' onClick={()=>navigator('/Adminlogin')}>BUSINESS ACCOUNT</button>
           

          </div>

           


           
  
        </div>




      
    </div>
  )
}

export default Login
