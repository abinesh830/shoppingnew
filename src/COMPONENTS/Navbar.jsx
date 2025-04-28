import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div>
        
        <div className='container d-none d-lg-block d-md-none'>
                    <div className='row border border-white bg-dark rounded-3 text-white' id='nav'>
                      <div className='col-2'>
                        <h1 className='text-white'>SHOPPING</h1>

                      </div>
                      <div className='col-4 d-flex'>
                      </div>
                      <div className='col-6 d-flex justify-content-around mt-2'>
                        <h3 className='' >HOME</h3>
                        <h3 className=''>MENU</h3>
                        <h3 className=''>CART</h3>
                        <h3 className=''>CONTACT</h3>
                        <h3 className=' border rounded-circle bg-dark pt-1 border-white' id='profile'><i class="fa-solid fa-user"></i></h3>
                        <h3 className='' id='animi'>ADMIN</h3>
                       
                      </div>
                       </div>


                  </div>
                  

      
    </div>
  )
}

export default Navbar
