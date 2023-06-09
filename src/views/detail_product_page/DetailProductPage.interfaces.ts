import { IProduct } from "../../interfaces/IProduct";

export interface IDetailProductPageProps {

}

export interface IDetailProductPageState {
    id: number;
    title: string | undefined;
    description: string;
    price: number;
    image: string;
    transaction: string;
}

export interface RouteParams {
    id: string;
}

export interface IDetailProductPageReduxProps {
    balance: number;
    myProduct: IProduct[];
}