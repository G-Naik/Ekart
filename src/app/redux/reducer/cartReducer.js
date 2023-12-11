import { actionTypes } from "../types";

const initialState = {
    cartData:[] || null ,
}

 export const cartReducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART : 
        let cartProduct = action.payload
            return{
                ...state,
                cartData : [...state.cartData,{...cartProduct}]
            }
        
        case actionTypes.REMOVE_ITEM : 
        return { 
            ...state , 
            cartData : state.cartData.filter((item) => item.id !==  action.payload)
        }

        case actionTypes.PLUS_QUANTITY :
            let itemId = action.payload ;
            let cartQty = state.cartData.map((item) =>{
                return item.id === itemId ? {...item,quantity: ++item.quantity } : item
            })
            return {
                ...state,
                cartData:cartQty
            }
            
        case actionTypes.MINUS_QUANTITY :
            let reduceItemId = action.payload ;
            let reduceCardQty = state.cartData.map((item) =>{
                    return item.id === reduceItemId ? {...item,quantity: (item.quantity <= 1 ) ? item.quantity : item.quantity - 1} : item
                })
                return {
                    ...state,
                    cartData:reduceCardQty
                }
        default :
            return state
    }
}