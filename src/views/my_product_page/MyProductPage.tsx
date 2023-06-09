import { Component } from "react";
import { IMyProductPageProps, IMyProductPageState, IMyProductPageReduxProps } from "./MyProductPage.interfaces";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search_bar/SearchBar";
import Header from "../../components/header/Header";
import GridListButton from "../../components/grid_list_button/GridListButton";
import GridListView from "../../components/grid_list_view/GridListView";
import { selectBalance } from "../../features/BalanceSlice";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux";
import { selectProduct } from "../../features/MyProductSlice";

class MyProductPage extends Component<IMyProductPageProps & IMyProductPageReduxProps, IMyProductPageState> {
    
    constructor(props: IMyProductPageProps & IMyProductPageReduxProps) {
        super(props);
        this.state = {
            view: true,
            searchValue: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch = (event: React.ChangeEvent<HTMLInputElement>): string => {
        const searchValue = event.target.value;
        this.setState({ searchValue });
        return searchValue;
    };

    setView: any = (view: boolean) => {
        this.setState({ view });
    };

    render() {
        const { view, searchValue } = this.state
        const { balance, myProduct } = this.props

        return (
            <div className='h-full bg-slate-300'>
                <Navbar
                    balance={balance}
                    searchBar={<SearchBar handleSearch={this.handleSearch} />}
                />
                <Header
                    text='My Product > Product List'
                    icon={<GridListButton viewState={[view, this.setView]} />}
                />
                <GridListView
                    listProduct={myProduct}
                    view={view}
                    searchValue={searchValue}
                    transaction="SELL"
                />
            </div>
        )
    }
}

const mapStateToProps = (state: RootState): IMyProductPageReduxProps => {
    return {
        balance: selectBalance(state),
        myProduct: selectProduct(state)
    };
};

export default connect(mapStateToProps)(MyProductPage);