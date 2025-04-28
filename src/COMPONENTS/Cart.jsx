import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeproduct } from '../SLICES/Productslice'


const Cart = () => {
  const dispatch=useDispatch();
    const navigator=useNavigate()
    const cartitems=useSelector((state)=>state.product)
    useEffect(()=>{
      localStorage.setItem('cartitems',JSON.stringify(cartitems))
      localStorage.getItem('cartitems')
    },[cartitems])

    function deleted(index){
      dispatch(removeproduct(index))
      console.log(index)



    }
  return (
    <div>
        {/* nav bar */}

         
      <div className='container d-none d-lg-block d-md-none'>
                    <div className='row border border-white bg-dark rounded-3 text-white' id='nav'>
                      <div className='col-2'>
                        <h1 className='text-white'>SHOPPING</h1>

                      </div>
                      <div className='col-4 d-flex'>
                      </div>
                      <div className='col-6 d-flex justify-content-around mt-2'>
                        <h3 className='' onClick={()=>navigator('/home')} >HOME</h3>
                        <h3 className='' onClick={()=>navigator('/menu')}>MENU</h3>
                        <h3 className='text-primary' onClick={()=>navigator('/cart')}>CART{cartitems.length}</h3>
                        <h3 className='' onClick={()=>navigator('/contact')}>CONTACT</h3>
                        <h3 className=' border rounded-circle bg-dark pt-1 border-white' id='profile'><i class="fa-solid fa-user"></i></h3>
                        <h3 className='' id='animi'>ADMIN</h3>
                       
                      </div>
                       </div>


                  </div>





        {/* nav bar  end */}


{/* cart start */}


{cartitems.length > 0 ? (
  cartitems.map((cart, index) => (
    <div className="card border-0 shadow-sm mx-2" key={index}>
      <img
        src={`http://localhost:5000/Uploads/${cart.productimage}`}
        alt={cart.productname}
        className="card-img-top"
        style={{
          width: "200px",
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem"
        }}
      />
      <div className="">
        <h6 className="card-title text-truncate" title={cart.productname}>
          {cart.productname}
        </h6>
        <p className="fw-bold mb-1 text-success">₹{cart.productprice}</p>
        <p className="card-text small text-muted">{cart.productdescription}</p>
        <button className='btn btn-danger form-control w-25' onClick={()=>deleted(index)}>remove cart</button>
      </div>

    </div>
  ))
) : (
  <div>
    <h1>No cart item added</h1>
  </div>
)}





{/* cart end */}








        
            </div>


      
  )
}

export default Cart
