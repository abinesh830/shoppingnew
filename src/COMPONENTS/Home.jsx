import React, { useEffect, useState } from 'react'
import '../App.css';
import Mobilenav from './Mobilenav';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addproduct } from '../SLICES/Productslice';
import { removeuser } from '../SLICES/Userslice';



const Home = () => {
  const[product,setproduct]=useState([]);
  const[search,setsearch]=useState()
  const navigator=useNavigate()
  const[loading,setloading]=useState(true)
  const dispatch=useDispatch()
  const productlength=useSelector((state)=>state.product)
  const users=useSelector((state)=>state.users)
  console.log(users)

  useEffect(()=>{
    const getdata= async ()=>{
     await axios.get("https://shopbuy12.netlify.app/getproduct")
      .then((response)=>{
        setproduct(response.data.product)
        console.log(response.data.product)
        setloading(false)

      })
      .catch((error)=>{
        console.log(error)
      })
    }
    getdata()
  },[users])
  

  function logout(index){
    dispatch(removeuser(index))
    localStorage.removeItem("users")
    navigator('/')
  }

  function addcart(item){
    
    dispatch(addproduct(item))


  }

  const filteredProducts = product.filter(item =>
    search
      ? item.productname.toLowerCase().includes(search.toLowerCase())
      : true
  );
  

  return (

    <div className='container-fluid pt-lg-1 bg-dark'  id='home'>

      {/* nav bar start  desktop*/}

      
      <div className='container d-none d-lg-block d-md-none'>
                    <div className='row border border-white bg-dark rounded-3 text-white' id='nav'>
                      <div className='col-2'>
                        <h1 className='text-white'>SHOPPING</h1>

                      </div>
                      <div className='col-4 d-flex'>
                        <input type="text" placeholder='search product' className='form-control h-75 m-1 mt-2' value={search}  onChange={(e)=>setsearch(e.target.value)} />
                      </div>
                      <div className='col-6 d-flex justify-content-around mt-2'>
                        <h3 className='text-primary' onClick={()=>navigator('/home')} >HOME</h3>
                        <h3 className='' onClick={()=>navigator('/menu')}>MENU</h3>
                        <h3 className='' onClick={()=>navigator('/cart')}>CART{productlength.length}</h3>
                        <h3 className='' onClick={()=>navigator('/contact')}>CONTACT</h3>
                        <h3 className=' border rounded-circle bg-dark pt-1 border-white' id='profile'><i class="fa-solid fa-user"></i></h3>
                        {users && users.length > 0 && users.map((user, index) => (
  <div key={index}>
    <h5 className='text-white' id='animi'>{user.username}</h5>
  </div>
))}
    <button className='btn btn-danger ms-3' onClick={() => logout(users[0])}>logout</button>



                      </div>
                       </div>


                  </div>









      {/* nav bar end desktop */}
     <Mobilenav/>
     <div className="container mt-5  rounded-5 pt-2">

      {loading?(<div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: '300px' }}>
    <div className="spinner-border text-white" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>):(
  <div className="row">
  <h1 className='text-white'>discount products</h1>

  {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (

              <div key={item._id} className="col-6 col-md-4 col-lg-3 mb-4">

                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={`http://localhost:5000/Uploads/${item.productimage}`}
                    alt={item.productname}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem"
                    }}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title text-truncate" title={item.productname}>
                      {item.productname}
                    </h6>
                    <p className="fw-bold mb-1 text-success">₹{item.productprice}</p>
                    <p className="card-text small text-muted">{item.productdescription}</p>
                  </div>
                  <div className="card-footer bg-white border-0 d-flex justify-content-between">
                    <button className="btn btn-outline-success btn-sm" onClick={()=>addcart(item)}>Add to Cart</button>
                    <button className="btn btn-success btn-sm">Buy Now</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted py-5">
              <h4>No products found.</h4>
            </div>
          )}
          
  </div>
  )}
</div>

    </div>
  )
}

export default Home
