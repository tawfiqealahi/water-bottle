 const getStoreCart =()=>{
    const storeCartString=localStorage.getItem('cart');
    if(storeCartString){
        return JSON.parse(storedCartString)
    } else{
        return [];
    }
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

 export {addToLS}