import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { shopingCarContext } from "../Context";




const Navbar = () => {
    
    const {cart,setSearchByCategory}=useContext(shopingCarContext)
    const activeStyle= 'underline underline-offset-4'
    
    
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full px-8 py-5 text-sm font-normal top-0 bg-white">
            <ul className="flex items-center gap-2">
                <li className="font-bold text-lg">
                    
                    <NavLink
                    onClick={()=>setSearchByCategory('')}
                    to='/'>
                     Shopy   
                    </NavLink>
                </li>

                <li>
                <NavLink
                    to='/'
                    onClick={()=>setSearchByCategory('')}
                    className={({isActive})=>
                           isActive? activeStyle : undefined}>
                     All
                </NavLink>
                </li>

                <li>
                <NavLink
                    to='/jewelery'
                    onClick={()=>setSearchByCategory('jewelery')}
                    className={({isActive})=>
                           isActive? activeStyle : undefined}>
                     Jewelery
                </NavLink>
                </li>
                
                <li>
                <NavLink
                    to='/mens-clothing'
                    onClick={()=>setSearchByCategory(`men's clothing`)}
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     Men's Clothing
                </NavLink>
                </li>
                
                <li>
                <NavLink
                    to='/womens-clothing'
                    onClick={()=>setSearchByCategory("women's clothing")}
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     Women's Clothing
                </NavLink>
                </li>

                  
                <li>
                <NavLink
                    to='/others'
                    onClick={()=>setSearchByCategory('electronics')}
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     Others
                </NavLink>
                </li>

            </ul>

            <ul className="flex items-center gap-2">
                <li>
                    userName
                </li>

                <li>
                <NavLink
                    to='/my-account'
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     my account
                </NavLink>
                </li>

                <li>
                <NavLink
                    to='/my-orders'
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     My orders
                </NavLink>
                </li>

                <li>
                <NavLink
                    to='/sign-in'
                    className={({isActive})=>
                    isActive? activeStyle : undefined}>
                     signIn
                </NavLink>
                </li>
                
                <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg> {cart.length}
                </li>

                  
              

            </ul>
        </nav>
    );
};

export default Navbar;