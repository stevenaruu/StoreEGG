import { IGridCardProps } from "./GridCard.interfaces"
import './GridCard.css'
import { Link, useLocation } from "react-router-dom"

const GridCard = (props: IGridCardProps) => {
    const { image, price, description, title, id, transaction } = props
    const location = useLocation();
    
    const path = () => {
        if (transaction === "BUY") {
            return `/detail/${id}`
        }else{
            return `my-product/detail/${id}`
        }
    }
    
    return (
        <Link
            key={id}
            to={{
                pathname: path(),
                state: { background: location, product: props }
              }}
        >
            <div className='height w-64 px-4 py-2 shadow-lg mt-5 bg-white rounded-md cursor-pointer'>
                <div className='mt-2 h-40 flex justify-center items-center'>
                    <img src={image} alt="" className='max-w-full max-h-full' />
                </div>
                <p className='text-lg font-bold mt-5 line-clamp-1'>{title}</p>
                <p className='text-base font-bold'>IDR {price}</p>
                <p className='mt-2'>Description:</p>
                <p className="line-clamp-6">{description}</p>
            </div>
        </Link>
    )
}

export default GridCard