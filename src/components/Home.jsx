import React from 'react';
import "../styles/home.scss";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {addToCart,calculatePrice} from "../redux/cartActions.js";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://www.nicekicks.com/files/2024/08/Air-Jordan-5-El-Grito-HF8833-100-01.jpg";

const Home = () => {
    const productList = [
        { 
            name:"Macbook", 
            price:89999 , 
            imgSrc:img1,
            id:"bdgbdbegnmdgsaj",
        },
        { 
            name:"Jordans", 
            price:45000 , 
            imgSrc:img2,
            id:"oqwyoyqpwoeyqewtyop",
        },
    ];

    const dispatch = useDispatch();

    const addToCartHandler =( options)=>{
        console.log(options);
        dispatch(addToCart(options));
        dispatch(calculatePrice(options));
        toast.success("Added to Cart");
    };
  return (
    <div className='home'>
        {
            productList.map(i=>(
                <ProductCard
                     key={i.id}
                     name={i.name}
                     imgSrc={i.imgSrc}
                     price={i.price}
                     id={i.id}
                     handler={addToCartHandler}    
                />
            ))
        }
    </div>
  )
};
const ProductCard = ({name,id,price,handler,imgSrc})=>(
    <div className='productCard'>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=>handler({name, price, id, quantity:1, imgSrc})}> Add to Cart</button>
    </div>
);

export default Home;
