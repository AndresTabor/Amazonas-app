import { typesUser } from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";




export const registroEmailPasswordNombre = (email,password,name) => {
    return(dispatch) => {
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth,email,password)
        
        .then(async ({user}) => {
            
            await updateProfile(auth.currentUser, {displayName: name})

            dispatch(registerUserSincrono(user.email, user.uid, user.displayName))
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}


export const registerUserSincrono = (email,password,name) => {
    
    return{
       type: typesUser.register,

       payload: {
           email,
           password,
           name
       }
    }
}