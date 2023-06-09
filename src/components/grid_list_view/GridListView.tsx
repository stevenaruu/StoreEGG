import GridCard from '../grid_card/GridCard';
import ListCard from '../list_card/ListCard';
import { IGridListViewProps, IGridListViewState } from './GridListView.interfaces';

const GridListView = (props: IGridListViewProps) => {
    const { listProduct, view, searchValue, transaction } = props
    const filteredProduct = listProduct.filter((product) =>
        product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    
    return (
        <div className='container mx-auto'>
            {view ? (
                <div className='h-full flex gap-x-5 flex-wrap items-center justify-center mt-5 mb-5'>
                    {filteredProduct.map((product: IGridListViewState, index: number) => (
                        <GridCard
                            key={index}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                            title={product.title} 
                            id={product.id}
                            transaction={transaction}
                        />
                    ))}
                </div>
            ) : (
                <div className='h-full w-full mt-5 mb-5'>
                    {filteredProduct.map((product: IGridListViewState, index: number) => (
                        <ListCard
                            key={index}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                            title={product.title} 
                            id={product.id}
                            transaction={transaction}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default GridListView