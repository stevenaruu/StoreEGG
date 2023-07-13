import { useHistory } from "react-router-dom"
import { selectBalance } from "../../features/BalanceSlice"
import { useAppSelector } from "../../redux/redux"
import Button from "../button/Button"
import { IAlertModalProps } from "./AlertModal.interfaces"

const AlertModal = (props: IAlertModalProps) => {
    const { showModal, status, message, image, btnColor, statusColor } = props
    const history = useHistory()
    const balance = useAppSelector(selectBalance)
    if (!showModal) return null
    
    const handleButton = () => {
        history.goBack()
    }

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <div className="h-screen bg-black/50 fixed flex left-0 right-0 top-0 bottom-0 justify-center items-center z-20">
            <div className="bg-white h-4/6 w-4/12 p-10 shadow-lg rounded flex justify-center items-center flex-col" onClick={handleModalClick}>
                <div className="h-2/6 flex justify-center items-center">
                    <img src={image} alt="" className="max-w-full max-h-full" />
                </div>
                <div className="my-5 flex justify-center items-center flex-col">
                    <p className={`font-bold text-2xl ${statusColor}`}>{status}</p>
                    <p className="text-lg text-center my-5">{message}</p>
                    <p className="text-lg text-center">Your current Coin {balance}</p>
                </div>
                <div className="flex justify-center items-center">
                    <Button
                        text="OK"
                        color={btnColor}
                        container=""
                        onClick={handleButton}
                    />
                </div>
            </div>
        </div>
    )
}

export default AlertModal