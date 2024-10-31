 const getStoreCart =()=>{
    const storedCartString=localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    } 
        return [];
    
 }

const saveCartToLS= cart=>{
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}

 const addToLS=id=>{
    const cart = getStoreCart();
    cart.push(id);

    saveCartToLS(cart);
 }

 const removeFromLocalStorage=id=>{
    const cart =getStoreCart();
    const remaining = cart.filter(ids => ids !==id )
    saveCartToLS(remaining);
 }


 export {addToLS,getStoreCart,removeFromLocalStorage}