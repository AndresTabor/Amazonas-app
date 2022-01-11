//import { db } from "../firebase/firebaseConfig"
//import { addDoc, collection } from "firebase/firestore";
import { typesProducts } from "../types/types";

// export const registerProducts = async(product) => {

//     const {title, price, category, description, image, rating, id} = product
//     return (dispatch) =>{
//         const newProduct = {
//             title,
//             price,
//             description,
//             category,
//             image, 
//             rating,
//             id
//         }
//         addDoc(collection(db, "productos", newProduct))
//         .then(resp =>{
//             dispatch(registerSincrono(product));
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }
// }
export const registerProductSincrono = (product) => {
    const {title, price, category, description, image, rating, id} = product
    console.log(product);
    return{

        type: typesProducts.add,

        payload: {
            title, 
            price, 
            category, 
            description, 
            image, 
            rating, 
            id
        } 
    }
}

