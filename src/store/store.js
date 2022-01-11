import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { productsReducer } from "../recuders/productsReducer";
import { registerReducer } from "../recuders/registerReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    products : productsReducer,
    register: registerReducer 
})

export const store = createStore (
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))

)