
export const getBaseProducts = async () => {
    // fetch('https://fakestoreapi.com/products/')
    // .then(res => res.json())
    const resp = await  fetch('https://fakestoreapi.com/products/')
    const result = await resp.json();
    return result 
        
}