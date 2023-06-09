import { IProduct } from "../../interfaces/IProduct";

export interface IGridListViewProps {
    view: boolean
    listProduct: IProduct[];
    searchValue: string
    transaction: string;
}

export interface IGridListViewState {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}