import React, { useState } from 'react'
import axios from 'axios'

const Addproducts = () => {
    const[message,setmessage]=useState("")

    const[productadd,setproductadd]=useState({
        productname:"",
        productprice:"",
        productdescription:"",
        productimage:null

    })
    
    function handlechange(event){
        const{name,value,files}=event.target;
        if(name === 'productimage' && files){
            setproductadd({...productadd,[name]:files[0]})
        }
        else{
        setproductadd({...productadd,[name]:value})


        }


    }
   
    function adder(event) {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('productname', productadd.productname);
        formData.append('productprice', productadd.productprice);
        formData.append('productdescription', productadd.productdescription);
        formData.append('productimage', productadd.productimage);
      
        axios.post("http://localhost:5000/productadd", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response) => {
            setmessage(response.data.message);
            console.log(response.data.product);
            console.log(response.data.message)
          })
          .catch((error) => console.log(error));
      }
  return (
    <div className='container mt-5'>
        <div className='row bg-dark h-100'>
            <div className='col'>
                <h3 className='text-white text-center mt-2'>ADD PRODUCT</h3>
                <form action="">
                    <div className='form-group'>
                        <label htmlFor="" className='my-2 text-white'>PRODUCT NAME</label>
                        <input type="text" placeholder='product name' className='form-control' name='productname' value={productadd.productname} onChange={handlechange} />

                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='my-2 text-white' >PRODUCT PRICE</label>
                        <input type="text" placeholder='enter product price' className='form-control' name='productprice' value={productadd.productprice} onChange={handlechange} />

                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='my-2 text-white'>DESCRIPTION</label>
                        <input type="text" placeholder='enter product details' className='form-control' name='productdescription' value={productadd.productdescription} onChange={handlechange} />

                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='my-2 text-white'>UPLOAD PRODUCT IMAGE</label>
                        <input type="file" placeholder='upload photo' className='form-control' name='productimage' onChange={handlechange}/>

                    </div>
                    <div className='form-group w-100 d-flex justify-content-center '>
                    <button onClick={adder} className='btn btn-success form-control  w-25 my-5'>ADD PRODUCT</button>


                    </div>


                </form>

            </div>
            {message && <h1 className='text-white text-center'>{message}</h1>}
        </div>

      
    </div>
  )
}

export default Addproducts
