import React from 'react';
import "../styles/cart.scss";
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,decrement, deleteFromCart,calculatePrice} from "../redux/cartActions.js";


const Cart = () => {
    const { cartItems, subTotal, tax, shipping,total} = useSelector((state)=>state.cart);

    const dispatch = useDispatch();

    const increment =(id)=>{
        dispatch(addToCart({id}));
        dispatch(calculatePrice(id));

    };

    const decrementt =(id)=>{
        dispatch(decrement(id));
        dispatch(calculatePrice(id));

    };
    const deleteHandler =(id)=>{
        dispatch(deleteFromCart(id));
        dispatch(calculatePrice(id));

    };

  return (
    <div className='cart'>
        <main>
           {
            cartItems.length > 0 ? (
                cartItems.map((i)=>(
                    <CartItem
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    qty={i.quantity}
                    id={i.id}
                    key={i.id}
                    decrement={decrementt}
                    increment={increment}
                    deleteHandler={deleteHandler}
               />
                ))
            ):(
                <h1>No Items Yet</h1>
            )}
        </main>
            <aside>
                <h2>Subtotat: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
      
    </div>
  );
};

const CartItem =({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id,
})=>(
    <div className='cartItem'>
        <img src={imgSrc} alt='Item' />
        <artice>
            <h3>{name}</h3>
            <p>${price}</p>
        </artice>
        <div>
            <button onClick={()=> decrement(id)}> - </button>
            <p>{qty}</p>
            <button onClick={()=> increment(id)}> + </button>
        </div>
        <AiFillDelete onClick={()=> deleteHandler(id)} />
    </div>
);



export default Cart;
