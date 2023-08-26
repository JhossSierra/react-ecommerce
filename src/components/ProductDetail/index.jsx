
import { useContext } from 'react';
import './styles.css';
import { shopingCarContext } from '../Context';

const ProductDetail = () => {
    const contx =useContext(shopingCarContext)

    return (
        <aside className= {`${contx.isProductDetailOpen? 'flex': 'hidden'} flex flex-col fixed right-0 border bg-white border-black rounded-lg`} >
            <div className='flex items-center justify-between p-1'>
                <h2 className='font-medium text-xl'>detail</h2>
                <div onClick={()=>contx.closeProductDetail()} className='cursor-pointer'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </div>
            </div>

            <figure className='px-6'>
                <img src={contx.productToShow.image && contx.productToShow.image} alt={contx.productToShow.title} className='w-full h-full rounded-lg'/>
            </figure>
            <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl'>{contx.productToShow.title}</span>
            <span className='font-medium text-2xl'>${contx.productToShow.price}</span>
            <span>{contx.productToShow.description}</span>
        
            </p>    
        </aside>
    );
};

export default ProductDetail;