import { typesUser } from "../types/types";

export const registerReducer = (state = {}, action) => {
    
    switch (action.type) {
        
        case typesUser.register:

            return{
                email: action.payload.email,
                name: action.payload.name,
                password: action.payload.password
            }
        
    
        default:
            return state;
            
    }
}