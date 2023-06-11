import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IHomePageProps, IHomePageReduxProps, IHomePageState } from "./HomePage.interfaces";
import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import SearchBar from "../../components/search_bar/SearchBar";
import Header from "../../components/header/Header";
import axios from "axios";
import GridListView from "../../components/grid_list_view/GridListView";
import GridListButton from "../../components/grid_list_button/GridListButton";
import MinigameButton from "../../components/minigame_button/MinigameButton";
import GridListViewSkeleton from "../../components/grid_list_view_skeleton/GridListViewSkeleton";
import { selectBalance } from "../../features/BalanceSlice";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux";

class HomePage extends Component<IHomePageProps & RouteComponentProps & IHomePageReduxProps, IHomePageState> {

    constructor(props: IHomePageProps & RouteComponentProps & IHomePageReduxProps) {
        super(props);
        this.state = {
            view: true,
            listProduct: [],
            searchValue: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                this.setState({ listProduct: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSearch = (event: React.ChangeEvent<HTMLInputElement>): string => {
        const searchValue = event.target.value;
        this.setState({ searchValue });
        return searchValue;
    };

    setView: any = (view: boolean) => {
        this.setState({ view });
    };

    goToMyProductPage = () => {
        this.props.history.push('/my-product');
    }

    render() {
        const { view, listProduct, searchValue } = this.state
        const { balance } = this.props;
        return (
            <div className='h-full bg-slate-300'>
                <Navbar
                    balance={balance}
                    searchBar={<SearchBar handleSearch={this.handleSearch} />}
                />
                <Button
                    text='My Product'
                    color='bg-yellow-600 hover:bg-amber-600'
                    container='container'
                    onClick={this.goToMyProductPage}
                />
                <Header
                    text='Home > Product List'
                    icon={<GridListButton viewState={[view, this.setView]} />}
                />
                {listProduct.length > 0 ? (
                    <GridListView
                        listProduct={listProduct}
                        view={view}
                        searchValue={searchValue}
                        transaction="BUY"
                    />
                ) : (
                    <GridListViewSkeleton
                        view={view}
                    />
                )}
                <MinigameButton />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): IHomePageReduxProps => {
    return {
        balance: selectBalance(state),
    };
};

export default withRouter(connect(mapStateToProps)(HomePage));