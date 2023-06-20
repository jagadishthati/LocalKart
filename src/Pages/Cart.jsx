
import Navbar from '../components/Navbar'
import { CartState } from '../Context/Context'
import { Trash } from 'phosphor-react'
import TotalItems from '../components/TotalItems'
const Cart = () => {
  const{state:{cart},dispatch}= CartState()
  
  return (
    <>
    <Navbar/>
    <div className="cont flex flex-row-reverse justify-center ">
      <TotalItems/>
      <div className="totalcart">


    {
      cart.map((prod)=>{ 
        const{id,title,image,price}=prod
        return(
          <div className="container flex justify-center p-4">
          <div key={id} className="card card-compact  bg-base-100  shadow-xl flex flex-row p-4" >
            <figure><img className='w-32' src={image} alt="Shoes" /></figure>
          <div className="card-body flex flex-row gap-4 items-center">
          <h4 className="card-title">{title}</h4>
          <p className='gr grow-0'> ${price}</p>
          <label htmlFor="quantity">Quantity</label>
      <select name="quantity" id="quantity"  >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
          </div>
          <div className="card-actions ">
          <Trash size={32}  onClick={()=>{
            dispatch({
              type:"REMOVE_FROM_CART",
              playload:prod,
            })
          }}/>
          </div>
         </div>
          </div>
          
          
          )
        }
        
        )}
        </div>
        </div>
    </>

  )
}

export default Cart