import propTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart,handleRemoveProduct}) => {
    
    return (
        <div>
            <h5>Products Cart : {cart.length}</h5>
           <div className="bottleList">
           {
            cart.map(bottle=> <div key={bottle.id}>
                    <img  src={bottle.img} ></img> 
                    <button onClick={()=>handleRemoveProduct(bottle.id)}>Remove</button>
                </div>
           ) }
           </div>
        </div>
    );
};
Cart.propTypes={
    cart: propTypes.array.isRequired,
    handleRemoveProduct: propTypes.func.isRequired,
}

export default Cart;