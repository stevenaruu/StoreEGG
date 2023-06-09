import { IProduct } from "../../interfaces/IProduct";

export interface IMyProductPageProps {

}

export interface IMyProductPageState {
    view: boolean;
    searchValue: string;
}

export interface IMyProductPageReduxProps {
    balance: number
    myProduct: IProduct[]
}