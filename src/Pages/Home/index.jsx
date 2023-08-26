import { useContext } from "react";
import Card from "../../components/Card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/ProductDetail";
import { shopingCarContext } from "../../components/Context";



const Home = () => {
    
    
    const {items, searchByTitle, setSearchByTitle, filteredItems}=useContext(shopingCarContext)
    
    return (
        <Layout>
            <div className='flex items-center justify-center relative w-80 mb-6'>   
                        <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input type="text" placeholder="Search a product" className="rounded-lg border border-black w-80 p-4 mb-4 " onChange={(event)=>setSearchByTitle(event.target.value)}/>

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">

            {filteredItems?.map((item)=>{return <Card key={item.id} data={item} />})}

            </div>
            <ProductDetail></ProductDetail>
        </Layout>
    );
};

export default Home;