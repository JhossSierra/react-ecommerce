import { createContext, useState, useEffect } from "react";

export const shopingCarContext = createContext()

const ShopingCarContextProvider = ({children}) => {
    
   /*  const[count, setCount]= useState(0) */

    const[isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    const openProductDetail= () => setIsProductDetailOpen(true)
    const closeProductDetail= () =>  setIsProductDetailOpen(false)


    const[isCheckoutMenuOpen, setIsCheckoutMenuOpen]= useState(false)
    const openCheckoutMenu =() => setIsCheckoutMenuOpen(true)
    const closeCheckoutMenu = () =>  setIsCheckoutMenuOpen(false)

    const [productToShow, setProductToShow]= useState({})

    const [cart , addToCart]= useState([])

    const [order, setOrder]= useState([])
    
    const [searchByTitle, setSearchByTitle] = useState('');
    const [searchByCategory, setSearchByCategory] = useState('');
    
    const [filteredItems, setFilteredItems] = useState();
    


    //get products
    const[items,setItems]= useState(null)

    useEffect(()=>{
        const fetchdata = async(url)=>{
            try{
            const response = await fetch(url)
            const data= await response.json()
          
            
            setItems(data)
            }
            catch(error){ console.error(`algo ha salido mal, revisa el url, el codigo es ${error}`)

            }

        }
        fetchdata('https://fakestoreapi.com/products')
        
    }, [])

    const filteredItemsByTitle=(items, searchByTitle)=>{
        return items?.filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory=(items, searchByCategory)=>{
        
        return items?.filter(item=>item.category.includes(searchByCategory))
    }
    
    const doublefiltered= (items, searchByCategory,searchByTitle)=>{
        return items?.filter(item=> item.category.includes(searchByCategory) && item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if (searchByCategory.length > 0 && searchByTitle.length > 0){
            setFilteredItems(doublefiltered(items,searchByCategory,searchByTitle))
        }
        else if (searchByTitle.length > 0) {
            setFilteredItems(filteredItemsByTitle(items, searchByTitle));}
            
        else if (searchByCategory.length > 0)
            {setFilteredItems(filteredItemsByCategory(items, searchByCategory))}
            
        else{
            setFilteredItems(items)
        }
        

    }, [items, searchByTitle, searchByCategory]);
    
    return (
        <shopingCarContext.Provider value={{
          
           /*  count, setCount, */
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cart,
            addToCart,
            isCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems,
            searchByCategory, 
            setSearchByCategory}}>

        {children}
        </shopingCarContext.Provider>
    );
};

export default ShopingCarContextProvider
