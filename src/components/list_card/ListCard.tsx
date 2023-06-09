import { Link, useLocation } from "react-router-dom";
import { IListCardProps } from "./ListCard.interfaces"

const ListCard = (props: IListCardProps) => {
    const { image, price, description, title, id, transaction } = props
    const location = useLocation();

    const path = () => {
        if (transaction === "BUY") {
            return `/detail/${id}`
        } else {
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
            <div className="h-32 max-w-full rounded-lg shadow-lg flex justify-start bg-white cursor-pointer mt-5">
                <div className="h-32 flex justify-center items-center p-2 w-48">
                    <img className='max-w-full max-h-full' src={image} alt="" />
                </div>
                <div className='p-2 w-full'>
                    <p className='text-lg font-bold'>{title}</p>
                    <p className='text-base font-bold'>{price}</p>
                    <p>Description:</p>
                    <p className="line-clamp-1">{description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ListCard