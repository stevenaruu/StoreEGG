import { Component } from "react";
import { IDetailProductPageProps, IDetailProductPageReduxProps, IDetailProductPageState, RouteParams, } from "./DetailProductPage.interfaces";
import axios from "axios";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import DetailProductSkeleton from "../../components/detail_product_skeleton/DetailProductSkeleton";
import _404Page from "../404_page/_404Page";
import { connect } from "react-redux";
import { selectBalance } from "../../features/BalanceSlice";
import { RootState } from "../../redux/redux";
import { selectProduct } from "../../features/MyProductSlice";
import Modal from "../../components/modal/Modal";

class DetailProductPage extends Component<IDetailProductPageProps & RouteComponentProps<RouteParams> & IDetailProductPageReduxProps, IDetailProductPageState> {

    constructor(props: IDetailProductPageProps & RouteComponentProps<RouteParams> & IDetailProductPageReduxProps) {
        super(props);
        this.state = {
            id: 0,
            title: "",
            description: "",
            price: 0,
            image: "",
            transaction: ""
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        const { pathname } = this.props.location;
        if (pathname === "/detail/" + id) {
            axios.get('https://fakestoreapi.com/products/' + id)
                .then((response) => {
                    this.setState({
                        id: response.data.id,
                        title: response.data.title,
                        description: response.data.description,
                        price: response.data.price,
                        image: response.data.image,
                        transaction: "BUY",
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (pathname === "/my-product/detail/" + id) {
            const product = this.props.myProduct.find((product) => product.id.toString() === id);
            if (product) {
                this.setState({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                    transaction: "SELL",
                });
            } else {
                this.setState({
                    title: undefined
                })
            }
        }
    }

    render() {
        const { id, title, description, price, image, transaction } = this.state;
        const { balance } = this.props
        return (
            <>
                {title !== undefined ? (
                    <div className='h-full bg-slate-300'>
                        <Navbar
                            searchBar={<></>}
                            balance={balance}
                        />
                        <Header
                            text={`Detail Product > ${title}`}
                            icon={<></>}
                        />
                        {id !== 0 ? (
                            <div className="container mx-auto w-full">
                                <Modal
                                    modalCSS="heigh w-full mt-5"
                                    product={{
                                        image,
                                        price,
                                        description,
                                        title,
                                        id,
                                        transaction
                                    }}
                                />
                            </div>
                        ) : (
                            <DetailProductSkeleton />
                        )}
                    </div>
                ) : (
                    <_404Page />
                )}
            </>
        )
    }

}

const mapStateToProps = (state: RootState): IDetailProductPageReduxProps => {
    return {
        balance: selectBalance(state),
        myProduct: selectProduct(state)
    };
};

export default withRouter(connect(mapStateToProps)(DetailProductPage));