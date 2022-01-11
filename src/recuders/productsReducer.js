import { typesProducts } from "../types/types";

const initialState = {
    products : []
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {

        case typesProducts.add:            
            return{
                products: [...action.payload]
            }
    
        default:
           return state;
    }

}