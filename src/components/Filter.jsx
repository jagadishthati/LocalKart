import { CartState } from "../Context/Context"


const Filter = () => {
  const{state:{sort},dispatch}= CartState()
const handleClick =()=>{
  window.location.reload()
}

  return (
    // <div>Filter</div>
    <>

    <div className="FiltersContainer bg-orange-500 flex flex-col gap-2 p-4 text-white font-semibold  " >
        <h1> Filters</h1>
        <span className='flex gap-1'>
            <input type="radio" name="ascending" id="ascending" 
            onChange={() =>
              dispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            } 
            checked={sort==="lowToHigh"?true:false}
            
            /><span>Ascending</span>
        </span>
        <span className='flex gap-1'> 
            <input type="radio" name="ascending" id=""    onChange={() =>
            dispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }  
          checked={sort === "highToLow" ? true : false} 
          /><span>Descending</span>
        </span>
        <button className='bg-orange-200 p-2' 
        onClick={handleClick} >
            Clear Filter
        </button>
    </div>
    
    
    
    </>
  )
}

export default Filter