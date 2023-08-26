
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { shopingCarContext } from '../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils';
/* import MyOrder from '../../Pages/MyOrder'; */

const CheckoutMenu = () => {
    const contx =useContext(shopingCarContext)
    
    const handleDelete =(id)=>{
        const filteredProducts = contx.cart.filter(product=>product.id != id)
        contx.addToCart(filteredProducts)
        }

    const handleCheckout=()=>{
        const date= new Date()
        let checkoutDate= date.toLocaleDateString()
        let checkoutTime= date.toLocaleTimeString('en-US')
        contx.closeCheckoutMenu()
        contx.setSearchByTitle('')

        const orderToAdd={
            date:checkoutDate,
            time:checkoutTime,
            products: contx.cart,
            totalProducts: contx.cart.length,
            totalPrice: totalPrice(contx.cart)
        }
       
        contx.setOrder([...contx.order, orderToAdd])
        contx.addToCart([])
    }
    

    return (
        <aside className= {`${contx.isCheckoutMenuOpen? 'flex': 'hidden'} z-10 checkout-menu flex flex-col fixed right-0 border bg-white border-black rounded-lg`} >
            <div className='flex items-center justify-between p-1'>
                <h2 className='font-medium text-xl'>My order</h2>
                <div onClick={()=>contx.closeCheckoutMenu()} className='cursor-pointer'> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>

            {
                contx.cart.map((product=>{
                    return <OrderCard key={product.id}
                    id={product.id} 
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                    handleDelete={handleDelete}/>
                    
                }))
            }
            </div>

            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                
                <span className='font-light'>Total price: </span>
                <span className='font-medium'>${totalPrice(contx.cart)}</span>
                
                </p>
            
            <Link to='/my-orders/last'>
            <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=>{handleCheckout()}}>Checkout</button>
            </Link>
            
            </div>
        </aside>
    );
};

export default CheckoutMenu;