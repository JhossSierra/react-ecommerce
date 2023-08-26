import { useContext } from "react";
import OrdersCard from "../../components/OrdersCard";
import Layout from "../../components/layout";
import { shopingCarContext } from "../../components/Context";
import { Link } from "react-router-dom";




const MyOrders = () => {
const {order}= useContext(shopingCarContext)


    return (
        <Layout>
            MY ORDERS
          <div >
            { order && order.map((order,index)=>
            <Link to={`${index}`} key={index}>
                <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} date={order.date} time={order.time}/>
            </Link>
            
      )}
           </div>
        </Layout>
    );
};

export default MyOrders;