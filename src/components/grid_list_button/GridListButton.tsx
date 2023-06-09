import GridViewIcon from "../../assets/icon/GridViewIcon"
import ListViewIcon from "../../assets/icon/ListViewIcon"
import { IGridListButtonProps } from "./GridListButton.interfaces"

const GridListButton = (props: IGridListButtonProps) => {
    const [view, setView] = props.viewState
    
    return (
        <span className='cursor-pointer'>
            {view ? (
                <GridViewIcon onClick={() => setView(false)} />
            ) : (
                <ListViewIcon onClick={() => setView(true)} />
            )}
        </span>
    )
}

export default GridListButton