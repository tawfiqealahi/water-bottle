import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';


const Bottles = () => {
    const[bottles,setBottles]=useState([])

    useEffect(()=>{
      fetch('bottles.json')
      .then(res=>res.json())
      .then(data=>setBottles(data))
    },[])
    return (
        <div>
            <h3 style={{textAlign:'center', marginTop:'1rem'} }>Total bottles: {bottles.length}</h3>
           <div className='bottleParent'>
           {
                bottles.map(bottle=> <Bottle bottle={bottle} key={bottles.id} ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;