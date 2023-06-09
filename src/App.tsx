import HomePage from './views/home_page/HomePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import MinigamePage from './views/minigame_page/MinigamePage';
import MyProductPage from './views/my_product_page/MyProductPage';
import { Fragment } from 'react';
import DetailProductPage from './views/detail_product_page/DetailProductPage';
import _404Page from './views/404_page/_404Page';
import DetailProduct from './components/detail_product/DetailProduct';

function App() {
    let location = useLocation<{ background: string }>();
    let background = location.state && location.state.background;
    return (
        <>
            <Switch location={background || (location as any)}>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/detail/:id' component={DetailProductPage} />
                <Route exact path='/mini-games' component={MinigamePage} />
                <Route exact path='/my-product' component={MyProductPage} />
                <Route exact path='/my-product/detail/:id' component={DetailProductPage} />
                <Route path='*' component={_404Page} />
            </Switch>
            {background && (
                <Fragment>
                    <Route exact path="/detail/:id" children={<DetailProduct />} />
                    <Route exact path="/my-product/detail/:id" children={<DetailProduct />} />
                </Fragment>
            )}
        </>
    );
}

export default App;
