
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import {Trash} from "phosphor-react"
import {MagnifyingGlass} from "phosphor-react"
const Navbar = () => {
  const{state:{cart,searchQuery},dispatch}=CartState();
console.log(searchQuery)
  return (
    <>
    <div className="navbar bg-base-100 justify-around">
        <Link to="/">
  <div className="flex">
    <a className="btn btn-ghost normal-case text-xl">LocalKart</a>
  </div>
        </Link>
  <div className='searchBox border-2 p-2 rounded-xl'>
    <span>
    <MagnifyingGlass size={32} />
    </span>
    <span>
    <input type="text" onChange={(e)=>{
      dispatch({
        type:"FILTER_BY_SEARCH",
        payload:e.target.value
      })
    }}  className="border-none bg-transparent outline-none text-lg font-semibold" placeholder="Search Here"/>

    </span>

  </div>
  <div className="flex-none z-10">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
             {cart.length > 0 ?(<>
             {
              cart.map((prod)=>(
              <span className='cartitem flex gap-1' key={prod.id}>
             <img className='w-12' src={prod.image} alt="img" />
             <div className="cartitemDetails">
              <span> {prod.title}</span>
              <span>{prod.price}</span>
             </div>
             <Trash size={32} style={{cursor:"pointer"}} onClick={()=>{
              dispatch({
                type:"REMOVE_FROM_CART",
                playload:prod,
              })
             }} />
              </span>
              ))
             }
             
             </>

             ):( <span className={{padding:10}}>Cart is Empty!</span>)

             }

          <span className="font-bold text-lg">{cart.length} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <Link to="/cart">
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
          </Link>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Navbar