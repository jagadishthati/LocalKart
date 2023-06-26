
import { CartState } from '../Context/Context';
import { useState ,useEffect } from 'react';
const TotalItems = () => {
    const{state:{cart}}= CartState()
    const[total ,setTotal]=useState();
    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
    },[cart])
  return (
    <>
    <div className="cont flex flex-col gap-2 w-1/4 p-4 bg-teal-500 text-white ">
        <h1 className='font-bold text-2xl'>Selected items({cart.length})</h1>
        <p className='font-semibold'> Total Price $({total})</p>
    </div>
    </>
  )
}

export default TotalItems