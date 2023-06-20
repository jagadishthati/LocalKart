

const Filter = () => {
  return (
    // <div>Filter</div>
    <>

    <div className="FiltersContainer bg-orange-500 flex flex-col gap-2 p-4 text-white font-semibold  " >
        <h1> Filters</h1>
        <span className='flex gap-1'>
            <input type="radio" name="ascending" id="" /><span>Ascending</span>
        </span>

        <span className='flex gap-1'> 
            <input type="radio" name="ascending" id="" /><span>Descending</span>
        </span>
        <button className='bg-orange-200 p-2'>
            Clear Filter
        </button>
    </div>
    
    
    
    </>
  )
}

export default Filter