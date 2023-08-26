/* eslint-disable react/prop-types */
import { useContext } from "react";
import { shopingCarContext } from "../Context";
import ChangingIcon from "../ChangingIcon";

const Card = ({data}) => {

const { openProductDetail, setProductToShow, cart, addToCart, openCheckoutMenu, closeProductDetail, closeCheckoutMenu} =useContext(shopingCarContext)

const showProduct=(productData)=>{ 
    closeCheckoutMenu()
    openProductDetail()
    setProductToShow(productData)
}

const addToCartList = (event,productData)=>{
    event.stopPropagation()
    
    openCheckoutMenu()
    closeProductDetail()
    addToCart([...cart,productData])
    
    
}    
    
const DesactivateOnclic= (e,data)=>{
    if (cart.length==0){
       addToCartList(e,data) 
    }
    else{
        if(cart.filter(product=>(product.id==data.id)).length==0){addToCartList(e,data) 
        }

    }

        
}


    return (
        <div onClick={()=>showProduct(data)} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 h-4/5'>
                <span className='absolute bottom-0  bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className="rounded-lg w-full h-full object-cover" src={data.image} alt="" />
                
                <button onClick={(e)=>DesactivateOnclic(e,data)} className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 border-none'>
                <ChangingIcon id={data.id}/>
                </button>
                

            </figure>
            <p className="flex justify-between">
            <span className="text-sm font-medium">{data.title}</span>
            <span className="text-lg font-medium">{data.price}$</span>
            </p>

        </div>
    );
};

export default Card;