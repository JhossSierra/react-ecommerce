import { useRoutes,BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from '../Home'
import MyOrders from '../MyOrders'

import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../components/Nabvar'
import ShopingCarContextProvider from '../../components/Context'
import CheckoutMenu from '../../components/CheckoutMenu'
import MyAccount from '../MyAccount'

const AppRoutes= ()=>{
  
  let routes = useRoutes([
    {path:'/', element: <Home/>},
    {path:'/jewelery', element: <Home/>},
    {path:'/electronics', element: <Home/>},
    {path:'/mens-clothing', element: <Home/>},
    {path:'/womens-clothing', element: <Home/>},
    {path:'/others', element: <Home/>},

    {path:'/clothes', element: <Home/>},
    {path:'/my-order', element:<MyOrder/>},
    {path:'/my-orders', element:<MyOrders/>},
    {path:'/my-orders/last', element:<MyOrder/>},
    {path:'/my-orders/:id', element:<MyOrder/>},
    {path:'/my-account', element:<MyAccount/>},
    {path:'/sign-in', element:<SignIn/>},
    {path:'/*', element:<NotFound/>}
  ])
  
  return routes
}

function App() {

  
  
  return (
    <ShopingCarContextProvider>
    <BrowserRouter>
    <Navbar></Navbar>
    <CheckoutMenu/>
    <AppRoutes/>
    </BrowserRouter>
    </ShopingCarContextProvider>
  )
}

export default App
