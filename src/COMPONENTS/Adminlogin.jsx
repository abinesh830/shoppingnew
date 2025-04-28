import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const navigator=useNavigate();
  return (
    <div className='container-fluid pt-5 ' id='log'>
        <h1 className='text-light text-center mb-5'>SHOPPING</h1>
        
        <div className='row mx-2'>
          <div className='col-lg-6 col-md-8 col-sm-12 mx-auto border rounded p-4 bg-dark text-white' id='log-1'>
            <h1 className='h1 text-white mb-4 text-center' >ADMIN LOGIN </h1>
            <form action="">
              <div className='form-group mb-3'>
                <label htmlFor="" className='mb-1'>EMAIL</label>
                <input type="text" placeholder='enter your email address'  className='form-control' required />
              </div>
              <div className='form-group mb-1'>
                <label htmlFor="" className='mb-1'>PASSWORD</label>
                <input type="text" placeholder='enter your password' className='form-control' required />
              </div>
              <p className='text-danger'>forget password?</p>
              <button className='btn btn-success my-4 form-control' onClick={()=>navigator('/home')}>LOGIN</button>
            </form>
            <hr />
            <div>
            <p>dont have an admin account?<text className='text-primary ms-2' id='pointer' onClick={()=>navigator('/Adminsignin')}>create account</text> </p>

            </div>
           

          </div>

           


           
  
        </div>




      
    </div>
  )
}

export default Adminlogin
