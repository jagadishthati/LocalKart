
import { CartState } from '../Context/Context'
import Filter from './Filter'


const Products = () => {
   const{state:{data ,searchQuery}}= CartState()
   const{state:{cart},dispatch}= CartState()
   console.log(data)
   console.log(cart)
   console.log(searchQuery)
//
  return (
    <>
    <div className="Container flex p-10 gap-4">
   <Filter/>
    <div className="productContainer grid grid-cols-3">
    {
      data.map((prod)=>{ 
        const{id,title,description,image,price}=prod
        return(
          <div key={id} className="card card-compact  bg-base-100  shadow-xl" >
          <figure><img className='w-1/3' src={image} alt="Shoes" /></figure>
          <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='gr'>{description}</p>
          <p className='gr font-bold'> ${price}</p>
          <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick={()=>{
            dispatch({
              type:"ADD_TO_CART",
              playload:prod,
            })
          }}>Add to Cart</button>
          <button className="btn btn-primary" onClick={()=>{
            dispatch({
              type:"REMOVE_FROM_CART",
              playload:prod,
            })
          }}>Remove From Cart</button>
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

export default Products