import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoreCart, removeFromLocalStorage } from "../../utilities/localStorage";
import propTypes from 'prop-types';
import Cart from "./Cart/Cart";


const Bottles = () => {
    const[bottles,setBottles]=useState([]);
    const [purchase,setPurchase]=useState([]);

    useEffect(()=>{
      fetch('bottles.json')
      .then(res=>res.json())
      .then(data=>setBottles(data))
    },[])

    // load cart from LS
    useEffect(()=>{
        console.log('called the use effect', bottles.length)
        const storeCart= getStoreCart();
       const saveCart=[];
       for(const id of storeCart){
        console.log(id)
        const bottle = bottles.find(bottle=>bottle.id===id);
        if(bottle){
            saveCart.push(bottle)
        }
       }

       setPurchase(saveCart)

    },[bottles])

    const handlePurchase=bottle=>{
        const newPurchase = [...purchase,bottle]
        setPurchase(newPurchase);
        addToLS(bottle.id);
    }

    const handleRemoveProduct=id=>{

        const remainingCart = purchase.filter(bottle=>bottle.id !==id)
        setPurchase(remainingCart);

        removeFromLocalStorage(id)
    }

    return (
        <div>
            <h3 style={{textAlign:'center', marginTop:'1rem'} }>Total bottles: {bottles.length}</h3>
            <Cart cart={purchase} handleRemoveProduct={handleRemoveProduct}  ></Cart>
            
           <div className='bottleParent'>
           { 
                bottles.map(bottle=> <Bottle handlePurchase={handlePurchase} bottle={bottle} key={bottles.id} ></Bottle>)
            }
           </div>
        </div>
    );
};

Bottle.propTypes={bottle: propTypes.object.isRequired,
    
        handlePurchase: propTypes.func.isRequired,
    
}

export default Bottles;