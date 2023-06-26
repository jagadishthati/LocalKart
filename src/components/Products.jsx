
import { CartState } from '../Context/Context'
import Filter from './Filter'


const Products = () => {
   const{state:{data ,searchQuery,sort}}= CartState()
   const{state:{cart},dispatch}= CartState()
   console.log(data)
   console.log(cart)
   console.log(searchQuery)
//


const transfromProducts =()=>{
  let sortedProducts = data;
  if (sort) {
    sortedProducts = sortedProducts.sort((a, b) =>
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
  }
  if (searchQuery) {
    sortedProducts = sortedProducts.filter((prod) =>
      prod.title.toLowerCase().includes(searchQuery)
    );
  }




  return sortedProducts

}








  return (
    <>
    <div className="Container flex p-10 gap-4">
   <Filter/>
    <div className="productContainer grid grid-cols-3">
    {
      transfromProducts().map((prod)=>{ 
        const{id,title,description,image,price}=prod
        
        return(
          <div key={id} className="card card-compact  bg-base-100  shadow-xl" >
          <figure><img className='w-1/3' src={image} alt="Shoes" /></figure>
          <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='gr'>{description}</p>
          <p className='gr font-bold'> ${price}</p>
          <div className="card-actions justify-between">
            {
              cart.some((p)=> p.id===prod.id)

             ?(

              <button className="btn btn-primary" onClick={()=>{
                dispatch({
                  type:"REMOVE_FROM_CART",
                  playload:prod,
                })
              }}>Remove From Cart</button>
              ):( <button className="btn btn-primary" onClick={()=>{
                  dispatch({
                    type:"ADD_TO_CART",
                    playload:prod,
                  })
                }}>Add to Cart</button>)
        }
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



// ( <button className="btn btn-primary" onClick={()=>{
//   dispatch({
//     type:"ADD_TO_CART",
//     playload:prod,
//   })
// }}>Add to Cart</button>)