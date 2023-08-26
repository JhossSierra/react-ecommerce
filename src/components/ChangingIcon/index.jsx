import { useContext } from "react";
import { shopingCarContext } from "../Context";

const ChangingIcon = ({id}) => {
    
    const {cart} = useContext(shopingCarContext)

    if(cart.filter(product=>(product.id==id)).length>0){
    
    
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
)
}


else{
        return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>)
    }
};

export default ChangingIcon;