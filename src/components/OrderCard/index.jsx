

// eslint-disable-next-line react/prop-types
const OrderCard = ({title, imageUrl, price, handleDelete, id}) => {

    
   


    return (
        <div className="flex justify-between items-center mb-3 ">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}$</p>

                {/* x del la card */}
               {handleDelete &&  <button onClick={()=>handleDelete(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 rotate-45">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>}

            </div>
        </div>
    );
}

export default OrderCard;
