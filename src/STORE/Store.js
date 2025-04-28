import {configureStore} from '@reduxjs/toolkit' 
import productsreducer from '../SLICES/Productslice'
import userslicer from '../SLICES/Userslice'



const savedCart = localStorage.getItem("cartitems")
const saveduser=localStorage.getItem("users")
const preloadedState = {
  product: savedCart ? JSON.parse(savedCart) : [],
  users: saveduser ? JSON.parse(saveduser) :[]
}



export const store= configureStore({
    reducer:{
        product:productsreducer,
        users:userslicer
    },
    preloadedState,
})
