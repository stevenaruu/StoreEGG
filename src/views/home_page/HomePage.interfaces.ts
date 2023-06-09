import { IProduct } from "../../interfaces/IProduct";

export interface IHomePageProps {

}

export interface IHomePageState {
    view: boolean;
    listProduct: IProduct[];
    searchValue: string;
}

export interface IHomePageReduxProps {
    balance: number
}