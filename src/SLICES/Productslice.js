import { createSlice } from "@reduxjs/toolkit";

const initialState= []

const productslice=createSlice({
    name:"product",
    initialState,
    reducers:{
        addproduct:(state,action)=>{
           // Make sure state is still an array
           let exist=state.find((state)=>state._id==action.payload._id)
           if(!exist){
           state.push(action.payload)
           return


           }

     

        }
        ,
        removeproduct:(state,action)=>{
           return state.filter((product,index)=>index!==action.payload)
        }

    }
})
export const {addproduct,removeproduct}=productslice.actions;
export default productslice.reducer;