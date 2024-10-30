import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';


const Bottles = () => {
    const[bottles,setBottles]=useState([]);
    const [purchase,setPurchase]=useState([]);

    useEffect(()=>{
      fetch('bottles.json')
      .then(res=>res.json())
      .then(data=>setBottles(data))
    },[])

    const handlePurchase=bottle=>{
        const newPurchase = [...purchase,bottle]
        setPurchase(newPurchase)
    }

    return (
        <div>
            <h3 style={{textAlign:'center', marginTop:'1rem'} }>Total bottles: {bottles.length}</h3>
            <h5>Products Cart : {purchase.length}</h5>
            
           <div className='bottleParent'>
           { 
                bottles.map(bottle=> <Bottle handlePurchase={handlePurchase} bottle={bottle} key={bottles.id} ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;