import GridCardSkeleton from '../grid_card_skeleton/GridCardSkeleton'
import ListCardSkeleton from '../list_card_skeleton/ListCardSkeleton'
import { IGridListViewSkeletonProps } from './GridListViewSkeleton.interfaces'

const GridListViewSkeleton = (props: IGridListViewSkeletonProps) => {
    const { view } = props
    
    return (
        <div className='container mx-auto'>
            {view ? (
                <div className='h-full flex gap-x-5 flex-wrap items-center justify-center mt-5 mb-5'>
                    {Array(10).fill(undefined).map((_, index) => (
                        <GridCardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <div className='h-full w-full mt-5 mb-5'>
                    {Array(6).fill(undefined).map((_, index) => (
                        <ListCardSkeleton key={index} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default GridListViewSkeleton