import Button from '../button/Button';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/redux';
import { ADD_BALANCE, MIN_BALANCE, selectBalance } from '../../features/BalanceSlice';
import { BUY_PRODUCT, SELL_PRODUCT, selectProduct } from '../../features/MyProductSlice';
import { IModalProps } from './Modal.interfaces';
import { useState } from 'react';
import AlertModal from '../alert_modal/AlertModal';

const Modal = (props: IModalProps) => {
    const { modalCSS, product } = props;
    const dispatch = useDispatch();
    const balance = useAppSelector(selectBalance)
    const myProduct = useAppSelector(selectProduct)
    const [isClicked, setIsClicked] = useState(false)
    const [status, setStatus] = useState("")
    const [message, setMessage] = useState("")
    const [statusColor, setStatusColor] = useState("")
    const btnColor = product.transaction === "BUY" ? "bg-yellow-600 hover:bg-amber-600" : "bg-cyan-400 hover:bg-cyan-500"

    const handleBuyProduct = () => {
        const newId = myProduct.length === 0 ? 1 : myProduct.length + 1;
        const updatedProduct = { ...product, id: newId }
        if (product.transaction === "BUY") {
            if (balance >= product.price) {
                setStatus("SUCCESS")
                setMessage(product.title + "was bought sucessfully !")
                setStatusColor("text-green-400")
                dispatch(MIN_BALANCE(product.price))
                dispatch(BUY_PRODUCT(updatedProduct))
            } else {
                setStatus("FAILED")
                setMessage("Sorry you don't have enough coins. Play minigame to earn coins !")
                setStatusColor("text-red-400")
            }
            setIsClicked(true)
        } else {
            setStatus("SUCCESS")
            setMessage(product.title + "was sell sucessfully !")
            setStatusColor("text-green-400")
            dispatch(SELL_PRODUCT(product))
            dispatch(ADD_BALANCE(product.price))
            setIsClicked(true)
        }
    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className={`bg-white ${modalCSS} flex flex-col justify-between px-10 py-5 rounded-lg shadow-lg`} onClick={handleModalClick}>
                <p className='text-4xl w-6/12 font-bold h-1/6 flex items-center justify-center text-center'>{product.title}</p>
                <div className='h-5/6 flex justify-center items-center'>
                    <div className='h-full w-6/12 flex justify-evenly items-center flex-col'>
                        <div className='h-4/6 flex justify-center items-center'>
                            <img src={product.image} alt="" className='max-w-full max-h-full' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <Button
                                text={product.transaction}
                                color={btnColor}
                                container=''
                                onClick={handleBuyProduct}
                            />
                        </div>
                    </div>
                    <div className='w-6/12 h-full px-10'>
                        <p className='text-xl font-bold'>IDR: {product.price}</p>
                        <p className='my-2'>Description:</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
            <AlertModal
                showModal={isClicked}
                status={status}
                message={message}
                image={product.image}
                btnColor={btnColor}
                statusColor={statusColor}
            />
        </>
    );
}

export default Modal
