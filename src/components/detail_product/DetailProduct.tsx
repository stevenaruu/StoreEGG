import { useHistory, useLocation } from "react-router-dom";
import { IGridCardProps } from '../grid_card/GridCard.interfaces';
import Modal from "../modal/Modal";

const DetailProduct = () => {
    const history = useHistory();
    const location = useLocation();
    const product: IGridCardProps | undefined = (location.state as { product: IGridCardProps }).product;

    const back = () => {
        history.goBack();
    }

    return (
        <div className="h-screen bg-black/50 fixed flex left-0 right-0 top-0 bottom-0 justify-center items-center z-20" onClick={back}>
            <Modal
                modalCSS="h-5/6 w-9/12"
                product={product}
            />
        </div>
    );
}

export default DetailProduct
