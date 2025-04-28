import React, { useRef, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Signin = () => {
      const navigator=useNavigate();
      const useref1=useRef()
      const useref2=useRef()
      const[otp,setotp]=useState('');

      const[message,setmessage]=useState();
      const[userdata,setuserdata]=useState({
        username:"",
        useremail:"",
        usermobileno:'',
        userpassword:""

      })
    //   handle change for user data create
      function handlechange(event){
        const {name,value}=event.target;
        setuserdata({...userdata,[name]:value})

      }
    //   end of handlle change


    //   get otp functions start

      function createsignin(event){
        event.preventDefault();
        axios.post('http://localhost:5000/userdata',userdata)
        .then((response)=>{
            alert(response.data.message)
            const statuscode=response.status;
            if(statuscode===200){
                useref1.current.style.display="none"
                useref2.current.style.display="block"

            }
            if(statuscode===202){
                setmessage(response.data.message)
                setInterval(() => {
                setmessage("")

                    
                }, 3000);
            }
        } )}
  // get otp functions end   

// resend otp functions 

const reotp=(event)=>{
 event.preventDefault();
 axios.post('http://localhost:5000/reotp',userdata)
 .then((response)=>{
 alert(response.data.message)
})
 .catch((error)=>{
      console.log(error)
return; })


            }
// resend otp functions end 

// account create step start

const accountcreate=(event)=>{
    

    event.preventDefault();
    let requireddata={...userdata,otp}
    axios.post('http://localhost:5000/createaccount',requireddata)
    .then((response)=>{
        let statuscode=response.status
        if(statuscode===201){
            alert(response.data.message)
        console.log(response.data.message)

            setTimeout(()=>{
            navigator('/')
                
            },3000)
            return;

        }
        alert("invalid otp")
        
        
       
    })
    .catch((error)=>{
        console.log(error)
        alert("invalid error otp")


    })

}

    
    
  return (
    <div className='container-fluid' id='sign'>
        <div className='container pt-5' ref={useref1}>
        <h1 className='text-light text-center'>SHOPPING</h1>
            

            <div className='row pt-5'>
                <div className='col-sm-12 col-lg-6 col-md-8 mx-auto text-white border rounded bg-dark '>
                    <h1 className='h1 text-center '>SIGNIN</h1>
                    <form action="">
                        <div className='form-group'>
                            <label htmlFor="" className='mb-2'>ENTER YOUR NAME</label>
                            <input type="text" placeholder='enter your name' className='form-control' required  name="username" value={userdata.username} onChange={handlechange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="" className='my-2'>ENTER YOUR EMAIL</label>
                            <input type="text" placeholder='enter your email' className='form-control' required name="useremail" value={userdata.useremail} onChange={handlechange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="" className='my-2'>ENTER YOUR MOBILE</label>
                            <input type="text" placeholder='enter your mobile number' className='form-control' required  name="usermobileno" value={userdata.usermobileno} onChange={handlechange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="" className='my-2'>CREATE YOUR PASSWORD</label>
                            <input type="password" placeholder='create your password' className='form-control' name="userpassword" value={userdata.userpassword} required onChange={handlechange} />
                        </div>
                        <button className='btn btn-success form-control my-3' onClick={createsignin}>CREATE ACCOUNT</button>
                    </form>
                <hr />

                <p className='text-white'>have you account ? <text className='text-primary' id='pointer' onClick={()=>navigator('/')}>login</text></p>

                </div>
            </div>
            {message && <h1 className='text-danger text-center mt-2'>{message}</h1>}

        </div>

        {/* OTP FORM START */}
        <div className='container py-5' ref={useref2} id='otp'>
            <div className='row h-100'>
                <div className='col-1 col-lg-2'>

                </div>
                <div className='col-10 col-lg-6  ms-lg-5  border border-white rounded-3 '>
                    <form action="">
                        <h1 className='text-center text-white'>OTP VERIFICATION</h1>
                        <div className='form-group'>
                            <label htmlFor="" className='text-white my-2'>ENTER YOUR VERIFICATION OTP ON MAIL</label>
                            <input type="number" placeholder='enter otp ' className='form-control' value={otp} onChange={(e)=>setotp(e.target.value)} />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger my-2 w-50 ' onClick={accountcreate} >verify OTP</button>


                        </div>
                    </form>
                    <button className='btn btn-primary my-3' onClick={reotp}>RESEND OTP</button>
                </div>
                <div className='col-1 col-lg-2'>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Signin
