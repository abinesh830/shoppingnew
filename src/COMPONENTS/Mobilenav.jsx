import React ,{useRef} from 'react'
import { useNavigate } from 'react-router-dom';


const Mobilenav = () => {

     const navigator=useNavigate();
      const ref1=useRef()
    
      function change(event){
        event.preventDefault();
    
        ref1.current.style.backgroundColor='black'
        ref1.current.style.transform='translateX(480px)';
        ref1.current.style.transition='transform .5s ease';
    
        
      }
      function closeer(event){
        event.preventDefault();
        ref1.current.style.transform='translateX(-500px)';
        ref1.current.style.transition='transform .5s ease';
    
    
    
    
    
      }
  return (
    <div className='container-fluid d-lg-none' id='mobile'>
                         <div className='row d-flex border border-white bg-dark '>
                                    <div className='col-6'>
                                            <h1 id='animi' className=''>Admin</h1>

                                    </div>
                                    <div className='col-6'>
                                             <i className="fa-solid fa-bars text-white fs-1 d-flex mt-2 justify-content-end" onClick={change}></i>
                                    </div>
                            </div>

    <div className='container-fluid d-lg-none border rounded ' id='tog' ref={ref1}>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>
        <i class="fa-solid fa-xmark text-white bg-danger fs-5 d-flex justify-content-end mt-2" onClick={closeer}></i>
          <p className='text-white mt-3 '><i class="fa-solid fa-file text-success mx-2"></i>HOME</p>
          <p className='text-white mt-3 my-4'><i class="fa-solid fa-book text-primary mx-2"></i>PROFILE</p>
          <p className='text-white my-4'><i class="fa-solid fa-cart-shopping text-warning mx-2"></i>CART</p>
          <p className='text-white my-4'><i class="fa-solid fa-sack-dollar text-success mx-2"></i>MENU</p>
          <p className='text-white my-4'><i class="fa-regular fa-folder text-success mx-2"></i>CONTACT</p>
          <p className='text-white my-4'><i class="fa-regular fa-folder-open text-success mx-2"></i>ABOUT</p>


        </div>
        <div className='col-sm-12 col-md-12' id='btn-1'>
          <button className='btn btn-danger my-2' onClick={()=>navigator('/')}><i class="fa-solid fa-arrow-right-from-bracket mx-2"></i>LOGOUT</button>
        </div>
      </div>

    </div>
      
    </div>
  )
}

export default Mobilenav
