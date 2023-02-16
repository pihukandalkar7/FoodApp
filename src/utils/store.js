import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

//create store using
// --- configureStore API - rtK

//Provide my store to app give access

//<provider store ={store} -import from react-redux

//slice
//createSlice -import from rtk
//createSlice ({
//name: "",
//   initialState:
//      reducers:{
//additem:(state.action)=>{state=action.payload}

// }
//export const {addtem,removeitem} = cartSlice.actions;
//export default cartSlice.reducer
//})
//put that slice into store
//{
//reducer:{
//cart:cartSlice
//}
//}
//
//
//
