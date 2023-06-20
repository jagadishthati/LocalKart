
import { createContext } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from './Reducer';
const Cart = createContext();



const Context = ({children}) => {
    const initialState ={
      data:[],
      cart:[],
      searchQuery:"",
    }
    const[state,dispatch]= useReducer(cartReducer,initialState)
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch({
      type:"FETCH_DATA",
      playload:data
    })
  };

  fetchData();
}, [])




      return (
        <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>
      )
    }
  


export default Context;

export const CartState =()=>{
    return useContext(Cart)
}



