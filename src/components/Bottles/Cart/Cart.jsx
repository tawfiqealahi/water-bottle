import './Cart.css'

const Cart = ({cart}) => {
    
    return (
        <div>
            <h5>Products Cart : {cart.length}</h5>
           <div className="bottleList">
           {
                cart.map(bottle=> <img src={bottle.img} ></img> )
            }
           </div>
        </div>
    );
};

export default Cart;