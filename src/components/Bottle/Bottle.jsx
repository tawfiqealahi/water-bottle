import './Bottle.css';

const Bottle = ({bottle,handlePurchase}) => {
    const{name,img,price}=bottle;
    return (
        <div className='bottle'>
            <h4>Bottle name: {name}</h4>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={()=>{handlePurchase(bottle)}} >Purchase</button>
        </div>
    );
};

export default Bottle;