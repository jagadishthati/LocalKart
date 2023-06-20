

export const cartReducer =(state,action)=>{
switch (action.type) {
    case "FETCH_DATA":
        return {
            ...state,
            data:action.playload,
        };
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart,{...action.playload}]};
        
            case "REMOVE_FROM_CART":
                return {...state, cart:state.cart.filter((c)=>c.id !== action.playload.id)};
          case "FILTER_BY_SEARCH":
            return {
                ...state, data:state.data.filter((item)=>item.title.toLowerCase().includes(action.payload.toLowerCase())),
                  
            }
    default:
        return state;
}
}
