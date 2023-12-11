import { actionTypes } from "../types";

const initialState = {
    products:[],
    filteredData:[],
    singlePost:[]
}

 export const productReducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.FETCH_API:
            return {
                ...state,
                products:action.payload
            }
    
        case actionTypes.SEND_FILTERS:
             let filteringData = state.products;
             let categoryData = action.payload
             filteringData = filteringData.filter(item => item.category === categoryData )
             return {
                ...state,
                    filteredData:filteringData
             }

        case actionTypes.PRODUCT_DESCRIPTION : 
             let singleData = state.products;
             const id = action.payload ;
             singleData = singleData.filter((item) => item.id === Number(id))
             return {
                ...state,
                singlePost: singleData
             }
             
        default :
            return state
    }
}